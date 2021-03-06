const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "normies";
const description = "https://thenormies.io";
//PROBLEM: To know this URI, I need to upload the images to IPFS before running this command, but how can I do that if this command generates also the images. 
// On his Tutorial HL is using a goDaddy host so he can easily predict this baseURI, not our case

//Solution1:
//Run this command with a predicatble hosted URI, it can be a S3 bucket. 
//Never run this command again
//Upload the entire image file to IPFS, get the ID
  //https://gateway.pinata.cloud/ipfs/abs1234
//Use Scripts inside Visual Studio Code to replace that specific string for the new base
  //https://gateway.pinata.cloud/ipfs/abs1234/images/

const baseUri = "ipfs://123456789";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// Not in use anymore
//MALE
const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    startAt: 55,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Eyes" },
      { name: "Tattoo" },
      { name: "Mouth" },
      { name: "Accessories" },
      { name: "Jewel" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1400,
  height: 1400,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
