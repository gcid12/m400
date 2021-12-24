const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

const config_male1 = [
  {
    configName:'male1',
    startAt: 1,
    growEditionSizeTo: 10,
    location: '/layers_male',
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
    startAt: 40,
    growEditionSizeTo: 10,
    location: '/layers_female',
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

(() => {
  buildSetup();
  startCreating(config_male1);
  startCreating(config_female1);
})();
