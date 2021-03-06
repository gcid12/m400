const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const { uniqueNamesGenerator } = require('unique-names-generator');
// const {adjectives, roles, maleNames } = require(`./names.js`)

const fs = require("fs");
const sha1 = require(`${basePath}/node_modules/sha1`);
const { createCanvas, loadImage } = require(`${basePath}/node_modules/canvas`);
const buildDir = `${basePath}/build`;
const layersDir = `${basePath}/layers_female`;
const {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
} = require(`${basePath}/src/config.js`);
const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = format.smoothing;
var metadataList = [];
var attributesList = [];
var dnaList = new Set();
const DNA_DELIMITER = "-";
const HashlipsGiffer = require(`${basePath}/modules/HashlipsGiffer.js`);

let hashlipsGiffer = null;

const buildSetup = () => {
  if (fs.existsSync(buildDir)) {
    fs.rmdirSync(buildDir, { recursive: true });
  }
  fs.mkdirSync(buildDir);
  fs.mkdirSync(`${buildDir}/json`);
  fs.mkdirSync(`${buildDir}/images`);
  if (gif.export) {
    fs.mkdirSync(`${buildDir}/gifs`);
  }
};

const getRarityWeight = (_str) => {
  let nameWithoutExtension = _str.slice(0, -4);
  var nameWithoutWeight = Number(
    nameWithoutExtension.split(rarityDelimiter).pop()
  );
  if (isNaN(nameWithoutWeight)) {
    nameWithoutWeight = 1;
  }
  return nameWithoutWeight;
};

const cleanDna = (_str) => {
  const withoutOptions = removeQueryStrings(_str);
  var dna = Number(withoutOptions.split(":").shift());
  return dna;
};

const cleanName = (_str) => {
  let nameWithoutExtension = _str.slice(0, -4);
  var nameWithoutWeight = nameWithoutExtension.split(rarityDelimiter).shift();
  return nameWithoutWeight;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index,
        name: cleanName(i),
        filename: i,
        path: `${path}${i}`,
        weight: getRarityWeight(i),
      };
    });
};

const layersSetup = (layersOrder, location) => {
  console.log(layersOrder);
  console.log("LOCATION:::::::::::::", location);
  const layers = layersOrder.map((layerObj, index) => ({
    id: index,
    elements: getElements(`${basePath}/${location}/${layerObj.name}/`),
    name: layerObj.name
  }));
  console.log(layers);
  return layers;
};

const saveImage = (_editionCount) => {
  fs.writeFileSync(
    `${buildDir}/images/${_editionCount}.png`,
    canvas.toBuffer("image/png")
  );
};

const genColor = () => {
  let hue = Math.floor(Math.random() * 360);
  let pastel = `hsl(${hue}, 100%, ${background.brightness})`;
  return pastel;
};

const drawBackground = () => {
  ctx.fillStyle = background.static ? background.default : genColor();
  ctx.fillRect(0, 0, format.width, format.height);
};


const addMetadata = (_dna, _edition, empty, configName) => {
  //Empty means generating placeholders
  let dateTime = Date.now();
  //const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });

  const normieName = uniqueNamesGenerator({
    dictionaries: [adjectives, roles, configName =='vmale' ? maleNames : femaleNames ],
    length: 3,
    style: 'capital',
    separator: ' '
    
  });

  let tempMetadata = {
    name: `Normie #${_edition}`,
    description: `${normieName}`,
    image: `${baseUri}/${empty ? '1' : _edition}.png`,
    //image: empty ? `https://www.thenormies.io/ph.jpg` : `${baseUri}/${_edition}.png`,
    //image: `https://www.thenormies.io/ph.jpg`,
    dna: sha1(_dna),
    edition: _edition,
    date: dateTime,
    ...extraMetadata,
    attributes: attributesList
  };
  if (network == NETWORK.sol) {
    tempMetadata = {
      //Added metadata for solana
      name: tempMetadata.name,
      symbol: solanaMetadata.symbol,
      description: tempMetadata.description,
      //Added metadata for solana
      seller_fee_basis_points: solanaMetadata.seller_fee_basis_points,
      image: `image.png`,
      //Added metadata for solana
      external_url: solanaMetadata.external_url,
      edition: _edition,
      ...extraMetadata,
      attributes: tempMetadata.attributes,
      properties: {
        files: [
          {
            uri: "image.png",
            type: "image/png",
          },
        ],
        category: "image",
        creators: solanaMetadata.creators,
      },
    };
  }
  metadataList.push(tempMetadata);
  attributesList = [];
};

const addAttributes = (_element) => {
  let selectedElement = _element.layer.selectedElement;
  attributesList.push({
    trait_type: _element.layer.name,
    value: selectedElement.name,
  });
};

const loadLayerImg = async (_layer) => {
  return new Promise(async (resolve) => {
    const image = await loadImage(`${_layer.selectedElement.path}`);
    resolve({ layer: _layer, loadedImage: image });
  });
};

const addText = (_sig, x, y, size) => {
  ctx.fillStyle = text.color;
  ctx.font = `${text.weight} ${size}pt ${text.family}`;
  ctx.textBaseline = text.baseline;
  ctx.textAlign = text.align;
  ctx.fillText(_sig, x, y);
};

const drawElement = (_renderObject, _index, _layersLen) => {
  ctx.globalAlpha = _renderObject.layer.opacity;
  ctx.globalCompositeOperation = _renderObject.layer.blend;
  text.only
    ? addText(
        `${_renderObject.layer.name}${text.spacer}${_renderObject.layer.selectedElement.name}`,
        text.xGap,
        text.yGap * (_index + 1),
        text.size
      )
    : ctx.drawImage(
        _renderObject.loadedImage,
        0,
        0,
        format.width,
        format.height
      );

  addAttributes(_renderObject);
};

const constructLayerToDna = (_dna = "", _layers = []) => {
  let mappedDnaToLayers = _layers.map((layer, index) => {
    let selectedElement = layer.elements.find(
      (e) => e.id == cleanDna(_dna.split(DNA_DELIMITER)[index])
    );
    return {
      name: layer.name,
      blend: layer.blend,
      opacity: layer.opacity,
      selectedElement: selectedElement,
    };
  });
  return mappedDnaToLayers;
};

/**
 * In some cases a DNA string may contain optional query parameters for options
 * such as bypassing the DNA isUnique check, this function filters out those
 * items without modifying the stored DNA.
 *
 * @param {String} _dna New DNA string
 * @returns new DNA string with any items that should be filtered, removed.
 */
const filterDNAOptions = (_dna) => {
  const dnaItems = _dna.split(DNA_DELIMITER);
  const filteredDNA = dnaItems.filter((element) => {
    const query = /(\?.*$)/;
    const querystring = query.exec(element);
    if (!querystring) {
      return true;
    }
    const options = querystring[1].split("&").reduce((r, setting) => {
      const keyPairs = setting.split("=");
      return { ...r, [keyPairs[0]]: keyPairs[1] };
    }, []);

    return options.bypassDNA;
  });

  return filteredDNA.join(DNA_DELIMITER);
};

/**
 * Cleaning function for DNA strings. When DNA strings include an option, it
 * is added to the filename with a ?setting=value query string. It needs to be
 * removed to properly access the file name before Drawing.
 *
 * @param {String} _dna The entire newDNA string
 * @returns Cleaned DNA string without querystring parameters.
 */
const removeQueryStrings = (_dna) => {
  const query = /(\?.*$)/;
  return _dna.replace(query, "");
};

const isDnaUnique = (_DnaList = new Set(), _dna = "") => {
  const _filteredDNA = filterDNAOptions(_dna);
  return !_DnaList.has(_filteredDNA);
};

const createDna = (_layers) => {
  let randNum = [];
  _layers.forEach((layer) => {
    var totalWeight = 0;
    layer.elements.forEach((element) => {
      totalWeight += element.weight;
    });
    // number between 0 - totalWeight
    let random = Math.floor(Math.random() * totalWeight);
    for (var i = 0; i < layer.elements.length; i++) {
      // subtract the current weight from the random weight until we reach a sub zero value.
      random -= layer.elements[i].weight;
      if (random < 0) {
        return randNum.push(
          `${layer.elements[i].id}:${layer.elements[i].filename}${
            layer.bypassDNA ? "?bypassDNA=true" : ""
          }`
        );
      }
    }
  });
  return randNum.join(DNA_DELIMITER);
};

const writeMetaData = (_data) => {
  fs.writeFileSync(`${buildDir}/json/_metadata.json`, _data);
};

const saveMetaDataSingleFile = (_editionCount) => {
  let metadata = metadataList.find((meta) => meta.edition == _editionCount);
  debugLogs
    ? console.log(
        `Writing metadata for ${_editionCount}: ${JSON.stringify(metadata)}`
      )
    : null;
  fs.writeFileSync(
    `${buildDir}/json/${_editionCount}.json`,
    JSON.stringify(metadata, null, 2)
  );
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const startCreating = async (config) => {
  let layerConfigIndex = 0;
  let editionCount = 1;
  let failedCount = 0;
  let abstractedIndexes = [];

  let configName= config[0].configName;

  let startAt= config[0].startAt;
  for (
    // let i = network == NETWORK.sol ? 0 : 1;
    // i <= config.growEditionSizeTo;
    // i++
    let i = startAt;
    i <= startAt + config[0].growEditionSizeTo;
    i++
  ) {
    console.log('here:',i)
    abstractedIndexes.push(i);
  }
  if (shuffleLayerConfigurations) {
    abstractedIndexes = shuffle(abstractedIndexes);
  }
  debugLogs
    ? console.log("Editions left to create: ", abstractedIndexes)
    : null;
  while (layerConfigIndex < config.length) {
    const layers = layersSetup(
      config[0].layersOrder,
      config[0].location
    );
    while (
      editionCount <= config[0].growEditionSizeTo
    ) {
      let newDna = createDna(layers);
      if (isDnaUnique(dnaList, newDna)) {
        let results = constructLayerToDna(newDna, layers);
        let loadedElements = [];

        results.forEach((layer) => {
          loadedElements.push(loadLayerImg(layer));
        });

        await Promise.all(loadedElements).then((renderObjectArray) => {
          debugLogs ? console.log("Clearing canvas") : null;
          ctx.clearRect(0, 0, format.width, format.height);
          if (gif.export) {
            hashlipsGiffer = new HashlipsGiffer(
              canvas,
              ctx,
              `${buildDir}/gifs/${abstractedIndexes[0]}.gif`,
              gif.repeat,
              gif.quality,
              gif.delay
            );
            hashlipsGiffer.start();
          }
          if (background.generate) {
            drawBackground();
          }
          renderObjectArray.forEach((renderObject, index) => {
            drawElement(
              renderObject,
              index,
              config[0].layersOrder.length
            );
            if (gif.export) {
              hashlipsGiffer.add();
            }
          });
          if (gif.export) {
            hashlipsGiffer.stop();
          }
          debugLogs
            ? console.log("Editions left to create: ", abstractedIndexes)
            : null;
          saveImage(abstractedIndexes[0]);
          addMetadata(newDna, abstractedIndexes[0], false, configName);
          saveMetaDataSingleFile(abstractedIndexes[0]);
          console.log(
            `Created edition: ${abstractedIndexes[0]}, with DNA: ${sha1(
              newDna
            )}`
          );
        });
        dnaList.add(filterDNAOptions(newDna));
        editionCount++;
        abstractedIndexes.shift();
      } else {
        console.log("DNA exists!");
        failedCount++;
        if (failedCount >= uniqueDnaTorrance) {
          console.log(
            `You need more layers or elements to grow your edition to ${startAt + config[layerConfigIndex].growEditionSizeTo} artworks!`
          );
          process.exit();
        }
      }
    }
    layerConfigIndex++;
  }
  writeMetaData(JSON.stringify(metadataList, null, 2));
};


const startCreatingEmpty = async (config) => {
  let layerConfigIndex = 0;
  let editionCount = 1;
  let failedCount = 0;
  let abstractedIndexes = [];

  let startAt= config[0].startAt;
  for (
    let i = startAt;
    i <= startAt + config[0].growEditionSizeTo;
    i++
  ) {
    console.log('here:',i)
    abstractedIndexes.push(i);
  }
  if (shuffleLayerConfigurations) {
    abstractedIndexes = shuffle(abstractedIndexes);
  }
  debugLogs
    ? console.log("Editions left to create: ", abstractedIndexes)
    : null;
  while (layerConfigIndex < config.length) {
    const layers = layersSetup(
      config[0].layersOrder,
      config[0].location
    );
    while (
      editionCount <= config[0].growEditionSizeTo
    ) {
      let newDna = createDna(layers);
      //if (isDnaUnique(dnaList, newDna)) {
        let results = constructLayerToDna(newDna, layers);
        let loadedElements = [];

        results.forEach((layer) => {
          loadedElements.push(loadLayerImg(layer));
        });

        await Promise.all(loadedElements).then((renderObjectArray) => {
          debugLogs ? console.log("Clearing canvas") : null;
          ctx.clearRect(0, 0, format.width, format.height);
          if (gif.export) {
            hashlipsGiffer = new HashlipsGiffer(
              canvas,
              ctx,
              `${buildDir}/gifs/${abstractedIndexes[0]}.gif`,
              gif.repeat,
              gif.quality,
              gif.delay
            );
            hashlipsGiffer.start();
          }
          if (background.generate) {
            drawBackground();
          }
          renderObjectArray.forEach((renderObject, index) => {
            drawElement(
              renderObject,
              index,
              config[0].layersOrder.length
            );
            if (gif.export) {
              hashlipsGiffer.add();
            }
          });
          if (gif.export) {
            hashlipsGiffer.stop();
          }
          debugLogs
            ? console.log("Editions left to create: ", abstractedIndexes)
            : null;
          saveImage(1);
          addMetadata(newDna, abstractedIndexes[0], true);
          saveMetaDataSingleFile(abstractedIndexes[0]);
          console.log(
            `Created edition: ${abstractedIndexes[0]}, with DNA: ${sha1(
              newDna
            )}`
          );
        });
        dnaList.add(filterDNAOptions(newDna));
        editionCount++;
        abstractedIndexes.shift();
      // } else {
      //   console.log("DNA exists!");
      //   failedCount++;
      //   if (failedCount >= uniqueDnaTorrance) {
      //     console.log(
      //       `You need more layers or elements to grow your edition to ${startAt + config[layerConfigIndex].growEditionSizeTo} artworks!`
      //     );
      //     process.exit();
      //   }
      // }
    }
    layerConfigIndex++;
  }
  writeMetaData(JSON.stringify(metadataList, null, 2));
};



module.exports = { startCreating, startCreatingEmpty, buildSetup, getElements };

const roles = [
  'Punk',
  'Punkk',
  'Rock',
  'Dark',
  'Degen',
  'Rotten',
  'Damned',
  'Clashed',
  'Pistol',
  'Vicious',
  'Riot',
  'Wrecked',
  'Stinky',
  'Raw',
  'Chief',
  'Ice',
  'DJ',
  'MC',
  'Dr',
  'OG',
  'Real',
];

const adjectives = [
  "able",
  "absent",
  "absolute",
  "active",
  "adorable",
  "adverse",
  "aesthetic",
  "afraid",
  "aggressive",
  "agreeable",
  "alone",
  "alternative",
  "amateur",
  "amazing",
  "ambitious",
  "amused",
  "angry",
  "annoyed",
  "anonymous",
  "anxious",
  "appalling",
  "appropriate",
  "arbitrary",
  "arrogant",
  "artificial",
  "artistic",
  "ashamed",
  "asleep",
  "atomic",
  "average",
  "awake",
  "aware",
  "awful",
  "awkward",
  "bad",
  "bare",
  "basic",
  "better",
  "bewildered",
  "bitter",
  "bizarre",
  "bloody",
  "blushing",
  "boiling",
  "bold",
  "bored",
  "brainy",
  "brave",
  "brief",
  "broken",
  "bumpy",
  "busy",
  "careful",
  "casual",
  "charming",
  "cheap",
  "cheerful",
  "chilly",
  "chronic",
  "classic",
  "clean",
  "clear",
  "clever",
  "closed",
  "cloudy",
  "clumsy",
  "coherent",
  "cold",
  "colorful",
  "colossal",
  "combative",
  "comfortable",
  "common",
  "complex",
  "concerned",
  "condemned",
  "confident",
  "confused",
  "conscious",
  "controversial",
  "conventional",
  "cool",
  "crazy",
  "creative",
  "creepy",
  "criminal",
  "crooked",
  "crude",
  "curious",
  "curly",
  "cute",
  "damaged",
  "dangerous",
  "dark",
  "deep",
  "defiant",
  "deliberate",
  "delicate",
  "delighted",
  "dependent",
  "depressed",
  "desperate",
  "detailed",
  "determined",
  "dirty",
  "disappointed",
  "disastrous",
  "disgusted",
  "distant",
  "disturbing",
  "divine",
  "dizzy",
  "doubtful",
  "dramatic",
  "dreadful",
  "drunk",
  "dry",
  "dull",
  "dusty",
  "dynamic",
  "eager",
  "easy",
  "eerie",
  "elated",
  "elderly",
  "electric",
  "elegant",
  "eligible",
  "embarrassing",
  "emotional",
  "empty",
  "energetic",
  "enormous",
  "enthusiastic",
  "entitled",
  "envious",
  "essential",
  "evil",
  "exceptional",
  "excessive",
  "excited",
  "exclusive",
  "exotic",
  "experimental",
  "explicit",
  "extra",
  "extreme",
  "exuberant",
  "famous",
  "fancy",
  "fashionable",
  "fast",
  "fatal",
  "fellow",
  "fierce",
  "filthy",
  "flaky",
  "flexible",
  "fluffy",
  "foolish",
  "fragile",
  "frail",
  "frantic",
  "friendly",
  "frightened",
  "fun",
  "funny",
  "furious",
  "fuzzy",
  "genuine",
  "giant",
  "glad",
  "glamorous",
  "gleaming",
  "global",
  "glorious",
  "gorgeous",
  "gothic",
  "grand",
  "grateful",
  "greasy",
  "great",
  "grim",
  "gross",
  "grotesque",
  "grubby",
  "grumpy",
  "guilty",
  "happy",
  "hard",
  "harsh",
  "heavy",
  "high",
  "horrible",
  "hostile",
  "huge",
  "human",
  "icy",
  "ill",
  "illegal",
  "implicit",
  "inclined",
  "incredible",
  "independent",
  "indirect",
  "influential",
  "informal",
  "inquisitive",
  "intense",
  "interested",
  "interesting",
  "invisible",
  "irrelevant",
  "isolated",
  "itchy",
  "jealous",
  "jittery",
  "keen",
  "key",
  "kind",
  "lazy",
  "logical",
  "lonely",
  "lost",
  "loud",
  "lovely",
  "low",
  "loyal",
  "lucky",
  "mad",
  "magic",
  "magnetic",
  "main",
  "major",
  "marked",
  "massive",
  "mean",
  "mental",
  "mighty",
  "minimal",
  "miserable",
  "misty",
  "mixed",
  "muddy",
  "mushy",
  "mutual",
  "mysterious",
  "naked",
  "narrow",
  "nasty",
  "naughty",
  "neat",
  "negative",
  "nervous",
  "noisy",
  "normal",
  "objective",
  "obnoxious",
  "odd",
  "optimistic",
  "original",
  "outrageous",
  "panicky",
  "passive",
  "patient",
  "peaceful",
  "peculiar",
  "permanent",
  "persistent",
  "pleased",
  "poised",
  "polite",
  "popular",
  "positive",
  "practical",
  "precious",
  "precise",
  "prickly",
  "primitive",
  "proud",
  "psychological",
  "puzzled",
  "quaint",
  "quick",
  "quickest",
  "quiet",
  "quintessential",
  "rapid",
  "rare",
  "raspy",
  "rational",
  "raw",
  "real",
  "realistic",
  "reasonable",
  "redundant",
  "relaxed",
  "relevant",
  "reluctant",
  "repulsive",
  "required",
  "revolutionary",
  "ridiculous",
  "roasted",
  "rude",
  "salty",
  "scary",
  "scattered",
  "screeching",
  "secondary",
  "sensible",
  "serious",
  "severe",
  "shaggy",
  "shaky",
  "shallow",
  "sharp",
  "shiny",
  "shocked",
  "shy",
  "sick",
  "silly",
  "simple",
  "skinny",
  "sleepy",
  "slimy",
  "slippery",
  "smooth",
  "soft",
  "sour",
  "spicy",
  "spontaneous",
  "spotty",
  "squealing",
  "stale",
  "sticky",
  "stiff",
  "stingy",
  "stormy",
  "strange",
  "striped",
  "stuck",
  "subtle",
  "suspicious",
  "tasty",
  "tense",
  "terrible",
  "toxic",
  "tragic",
  "tricky",
  "troubled",
  "typical",
  "ultimate",
  "unconscious",
  "underground",
  "unexpected",
  "unfortunate",
  "uninterested",
  "unusual",
  "urban",
  "vague",
  "vicious",
  "wicked",
  "wild",
  "wise",
  "worried",
  "wrong",
  "yawning",
  "yeasty",
  "yelling",
  "zealous",
  "zestful",
  "zesty"
]

const femaleNames = [
  'Jenny',
  'Tina',
  'Alex',
  'Claudia',
  'Laura',
  "Abbey",
  "Ada",
  "Adele",
  "Alameda",
  "Alejandra",
  "Alexandra",
  "Alice",
  "Allegra",
  "Aloise",
  "Aby",
  "Ami",
  "Andrea",
  "Angela",
  "Antonia",
  "Ariel",
  "Astrid",
  "Aura",
  "Austin",
  "Blake",
  "Blondie",
  "Bobbie",
  "Brandi",
  "Brooks",
  "Carmela",
  "Casey",
  "Cassandra",
  "Catarina",
  "Celeste",
  "Chelsea",
  "Pris",
  "Patti",
  "Celestina",
  "Charleen",
  "Chelsea",
  "Cindie",
  "Clair",
  "Gloria",
  "Greta",
  "Clementine",
  "Cornie",
  "Courtney",
  "Cyndie",
  "Delia",
  "Diana",
  "Emilia",
  "Elisa",
  "Henny",
  "Miley",
  "Rene",
  "Rosita",
  "Kato",
  "Jean",
  "Luz",
  "Lorena",
  "Mary",
  "Sophie",
  "Sarah",
  "Issa",
  "Olivia",
  "Mia",
  "Mila",
  "Victoria",
  "Zoe",
  "Lucy",
  "Ivy",
  "Eva",
  "Melody",
  "Taylor",
  "Molley",
  "Sloane",
  "Morgan",
  "Ruth",
  "Sage",
  "Zuri",
  "Nicole",
  "Kate",
  "Nadia",
  "Dylan",
  "Zelda",
  "Nala",
  "Lara",
  "Indie",
  "Ramona",
  "Simone",
  "Frida"


];

const maleNames = [
  'Rob',
  'Alex',
  'Sid',
  'Adam',
  'Tom',
  "Alexis",
  "Alfie",
  "Alys",
  "Andy",
  "Andre",
  "Benny",
  "Berry",
  "Bobby",
  "Brett",
  "Charlie",
  "Cody",
  "Clay",
  "Dale",
  "Derrick",
  "Eddie",
  "John",
  "Mick",
  "Quentin",
  "Memo",
  "Malcom",
  "Steve",
  "Paul",
  "Rene",
  "Oliver",
  "Terry",
  "Nicky",
  "Keith",
  "Billy",
  "Simon",
  "Johnny",
  "Sid",
  "Wally",
  "Eric",
  "Mike",
  "Tony",
  "Eazy",
  "Omar",
  "Vito",
  "Gio",
  "Danny",
  "Julien",
  "Ice",
  "Rick",
  "Logan",
  "Xavier",
  "Joey",
  "Lou",
  "Martin",
  "Rod",
  "james",
  "Mason",
  "Lucas",
  "Jackson",
  "Carter",
  "Leo",
  "lincoln",
  "Dylan",
  "Jaxon",
  "Miles",
  "Ezekiel",
  "Cooper",
  "Connor",
  "Jordan",
  "Austin",
  "Ryder",
  "Jason",
  "Vincent",
  "Ashton",
  "Archer",
  "Enzo",
  "Tristan",
  "Barrett",
  "Ace",
  "Walker",
  "Grant",
  "Jax",
  "Damien",
  "Cohen",
  "Cruz",
  "Julius",
  "Cesar",
  "Porter",
  "Dax",
  "Shane",
  "Victor",
  "Edison",
  "Rex",
  "Max",
  "Ray",
  "Lance",
  "Jon",
  "Franco",
  "Wes",
  




];