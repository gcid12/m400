const basePath = process.cwd();
const { startCreating, startCreatingEmpty, buildSetup } = require(`${basePath}/src/main.js`);

const config_male1 = [
  {
    configName:'male1',
    startAt: 1,
    growEditionSizeTo: 100,
    location: '/layers/male',
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

const config_female1 = [
  {
    configName:'female1',
    startAt: 101,
    growEditionSizeTo: 100,
    location: '/layers/female',
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

const config_empty = [
  {
    configName:'empty',
    startAt: 1,
    growEditionSizeTo: 6000,
    location: '/layers/placeholder',
    layersOrder: [
      { name: "ph" }
    ],
  },
];

(() => {
  buildSetup();
   //startCreating(config_male1);
   //startCreating(config_female1);

  startCreatingEmpty(config_empty);
})();