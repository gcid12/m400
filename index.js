const basePath = process.cwd();
const { startCreating, startCreatingEmpty, buildSetup } = require(`${basePath}/src/main.js`);

//female  PARES  EVEN
//male    NONES  ODD

//female1  0000-0999  EVEN
//male1    1000-1999  ODD
//female2  2000-2999  EVEN
//male2    3000-3999
//female3  4000-4999
//male3    5000-5999
//female4  6000-6999
//male4    7000-7999
//female5  8000-8999
//male5    9000-10000




const config_female0k = [
  {
    configName:'vfemale',
    startAt: 100,
    growEditionSizeTo: 900,
    location: '/layers/female',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_male1k = [
  {
    configName:'vmale',
    startAt: 1100,
    growEditionSizeTo: 900,
    location: '/layers/male',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_female2k = [
  {
    configName:'vfemale',
    startAt: 2100,
    growEditionSizeTo: 900,
    location: '/layers/female',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_male3k = [
  {
    configName:'vmale',
    startAt: 3100,
    growEditionSizeTo: 900,
    location: '/layers/male',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_female4k = [
  {
    configName:'vfemale',
    startAt: 4100,
    growEditionSizeTo: 900,
    location: '/layers/female',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_male5k = [
  {
    configName:'vmale',
    startAt: 5100,
    growEditionSizeTo: 900,
    location: '/layers/male',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_female6k = [
  {
    configName:'vfemale',
    startAt: 6100,
    growEditionSizeTo: 900,
    location: '/layers/female',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_male7k = [
  {
    configName:'vmale',
    startAt: 7100,
    growEditionSizeTo: 900,
    location: '/layers/male',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_female8k = [
  {
    configName:'vfemale',
    startAt: 8100,
    growEditionSizeTo: 900,
    location: '/layers/female',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];

const config_male9k = [
  {
    configName:'vmale',
    startAt: 9100,
    growEditionSizeTo: 900,
    location: '/layers/male',
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Tattoo Face" },
      { name: "Tattoo Arm Left" },
      { name: "Tattoo Arm Right" },
      { name: "Tattoo Center" },
      { name: "Tattoo Small Right" },
      { name: "Tattoo Small Left" },
      { name: "Jewelry" },
      { name: "Accessories" },
      { name: "Mouth" },
      { name: "Eyes" },
    ],
  },
];



// 0k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch0k = [
  {
    configName:'vfemaleglitch',
    startAt: 0,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch0k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro0k = [
  {
    configName:'vfemaleastro',
    startAt: 3,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro0k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire0k = [
  {
    configName:'vfemalefire',
    startAt: 13,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire0k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire0k = [
  {
    configName:'vmaleFire',
    startAt: 26,
    growEditionSizeTo: 12,
    location: '/layers/maleFire0k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric0k = [
  {
    configName:'vfemaleelectric',
    startAt: 38,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric0k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric0k = [
  {
    configName:'vmaleelectric',
    startAt: 53,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric0k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red0k = [
  {
    configName:'vfemalered',
    startAt: 68,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed0k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red0k = [
  {
    configName:'vmalered',
    startAt: 88,
    growEditionSizeTo: 12,
    location: '/layers/maleRed0k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];


// 1k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch1k = [
  {
    configName:'vfemaleglitch',
    startAt: 1000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch1k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro1k = [
  {
    configName:'vfemaleastro',
    startAt: 1003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro1k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire1k = [
  {
    configName:'vfemalefire',
    startAt: 1013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire1k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire1k = [
  {
    configName:'vmaleFire',
    startAt: 1026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire1k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric1k = [
  {
    configName:'vfemaleelectric',
    startAt: 1038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric1k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric1k = [
  {
    configName:'vmaleelectric',
    startAt: 1053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric1k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red1k = [
  {
    configName:'vfemalered',
    startAt: 1068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed1k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red1k = [
  {
    configName:'vmalered',
    startAt: 1088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed1k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];


// 2k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch2k = [
  {
    configName:'vfemaleglitch',
    startAt: 2000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch2k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro2k = [
  {
    configName:'vfemaleastro',
    startAt: 2003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro2k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire2k = [
  {
    configName:'vfemalefire',
    startAt: 2013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire2k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire2k = [
  {
    configName:'vmaleFire',
    startAt: 2026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire2k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric2k = [
  {
    configName:'vfemaleelectric',
    startAt: 2038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric2k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric2k = [
  {
    configName:'vmaleelectric',
    startAt: 2053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric2k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red2k = [
  {
    configName:'vfemalered',
    startAt: 2068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed2k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red2k = [
  {
    configName:'vmalered',
    startAt: 2088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed2k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

// 3k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch3k = [
  {
    configName:'vfemaleglitch',
    startAt: 3000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch3k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro3k = [
  {
    configName:'vfemaleastro',
    startAt: 3003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro3k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire3k = [
  {
    configName:'vfemalefire',
    startAt: 3013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire3k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire3k = [
  {
    configName:'vmaleFire',
    startAt: 3026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire3k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric3k = [
  {
    configName:'vfemaleelectric',
    startAt: 3038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric3k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric3k = [
  {
    configName:'vmaleelectric',
    startAt: 3053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric3k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red3k = [
  {
    configName:'vfemalered',
    startAt: 3068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed3k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red3k = [
  {
    configName:'vmalered',
    startAt: 3088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed3k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];



// 4k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch4k = [
  {
    configName:'vfemaleglitch',
    startAt: 4000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch4k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro4k = [
  {
    configName:'vfemaleastro',
    startAt: 4003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro4k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire4k = [
  {
    configName:'vfemalefire',
    startAt: 4013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire4k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire4k = [
  {
    configName:'vmaleFire',
    startAt: 4026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire4k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric4k = [
  {
    configName:'vfemaleelectric',
    startAt: 4038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric4k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric4k = [
  {
    configName:'vmaleelectric',
    startAt: 4053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric4k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red4k = [
  {
    configName:'vfemalered',
    startAt: 4068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed4k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red4k = [
  {
    configName:'vmalered',
    startAt: 4088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed4k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

// 5k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch5k = [
  {
    configName:'vfemaleglitch',
    startAt: 5000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch5k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro5k = [
  {
    configName:'vfemaleastro',
    startAt: 5003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro5k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire5k = [
  {
    configName:'vfemalefire',
    startAt: 5013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire5k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire5k = [
  {
    configName:'vmaleFire',
    startAt: 5026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire5k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric5k = [
  {
    configName:'vfemaleelectric',
    startAt: 5038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric5k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric5k = [
  {
    configName:'vmaleelectric',
    startAt: 5053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric5k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red5k = [
  {
    configName:'vfemalered',
    startAt: 5068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed5k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red5k = [
  {
    configName:'vmalered',
    startAt: 5088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed5k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];


// 6k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch6k = [
  {
    configName:'vfemaleglitch',
    startAt: 6000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch6k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro6k = [
  {
    configName:'vfemaleastro',
    startAt: 6003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro6k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire6k = [
  {
    configName:'vfemalefire',
    startAt: 6013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire6k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire6k = [
  {
    configName:'vmaleFire',
    startAt: 6026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire6k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric6k = [
  {
    configName:'vfemaleelectric',
    startAt: 6038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric6k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric6k = [
  {
    configName:'vmaleelectric',
    startAt: 6053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric6k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red6k = [
  {
    configName:'vfemalered',
    startAt: 6068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed6k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red6k = [
  {
    configName:'vmalered',
    startAt: 6088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed6k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

// 7k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch7k = [
  {
    configName:'vfemaleglitch',
    startAt: 7000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch7k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro7k = [
  {
    configName:'vfemaleastro',
    startAt: 7003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro7k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire7k = [
  {
    configName:'vfemalefire',
    startAt: 7013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire7k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire7k = [
  {
    configName:'vmaleFire',
    startAt: 7026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire7k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric7k = [
  {
    configName:'vfemaleelectric',
    startAt: 7038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric7k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric7k = [
  {
    configName:'vmaleelectric',
    startAt: 7053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric7k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red7k = [
  {
    configName:'vfemalered',
    startAt: 7068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed7k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red7k = [
  {
    configName:'vmalered',
    startAt: 7088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed7k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

// 8k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch8k = [
  {
    configName:'vfemaleglitch',
    startAt: 8000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch8k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro8k = [
  {
    configName:'vfemaleastro',
    startAt: 8003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro8k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire8k = [
  {
    configName:'vfemalefire',
    startAt: 8013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire8k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire8k = [
  {
    configName:'vmaleFire',
    startAt: 8026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire8k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric8k = [
  {
    configName:'vfemaleelectric',
    startAt: 8038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric8k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric8k = [
  {
    configName:'vmaleelectric',
    startAt: 8053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric8k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red8k = [
  {
    configName:'vfemalered',
    startAt: 8068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed8k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red8k = [
  {
    configName:'vmalered',
    startAt: 8088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed8k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];




// 9k's  RARES  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const config_female_glitch9k = [
  {
    configName:'vfemaleglitch',
    startAt: 9000,
    growEditionSizeTo: 3,
    location: '/layers/femaleGlitch9k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_astro9k = [
  {
    configName:'vfemaleastro',
    startAt: 9003,
    growEditionSizeTo: 10,
    location: '/layers/femaleAstro9k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_fire9k = [
  {
    configName:'vfemalefire',
    startAt: 9013,
    growEditionSizeTo: 13,
    location: '/layers/femaleFire9k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_fire9k = [
  {
    configName:'vmaleFire',
    startAt: 9026,
    growEditionSizeTo: 12,
    location: '/layers/maleFire9k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_electric9k = [
  {
    configName:'vfemaleelectric',
    startAt: 9038,
    growEditionSizeTo: 15,
    location: '/layers/femaleElectric9k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_electric9k = [
  {
    configName:'vmaleelectric',
    startAt: 9053,
    growEditionSizeTo: 15,
    location: '/layers/maleElectric9k',
    layersOrder: [
      { name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_female_red9k = [
  {
    configName:'vfemalered',
    startAt: 9068,
    growEditionSizeTo: 20,
    location: '/layers/femaleRed9k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];

const config_male_red9k = [
  {
    configName:'vmalered',
    startAt: 9088,
    growEditionSizeTo: 12,
    location: '/layers/maleRed9k',
    layersOrder: [
      { name: "Background" },{ name: "Body" },{ name: "Tattoo Face" },{ name: "Tattoo Arm Left" },{ name: "Tattoo Arm Right" },{ name: "Tattoo Center" },{ name: "Tattoo Small Right" },{ name: "Tattoo Small Left" },{ name: "Jewelry" },{ name: "Accessories" },{ name: "Mouth" },{ name: "Eyes" },
    ],
  },
];




const config_empty = [
  {
    configName:'empty',
    startAt: 1,
    growEditionSizeTo: 10000,
    location: '/layers/placeholder',
    layersOrder: [
      { name: "ph" }
    ],
  },
];

(() => {
  buildSetup();

  //startCreating(config_female0k);
  //startCreating(config_male1k);
  // startCreating(config_female2k);
  //startCreating(config_male3k);
  // startCreating(config_female4k);
  // startCreating(config_male5k);
  // startCreating(config_female6k);
  // startCreating(config_male7k);
  // startCreating(config_female8k);
  // startCreating(config_male9k);


  startCreating(config_female_glitch0k);
  startCreating(config_female_astro0k);
  startCreating(config_female_fire0k);
  startCreating(config_male_fire0k);
  startCreating(config_female_electric0k);
  startCreating(config_male_electric0k);
  startCreating(config_female_red0k);
  startCreating(config_male_red0k);

  startCreating(config_female_glitch1k);
  startCreating(config_female_astro1k);
  startCreating(config_female_fire1k);
  startCreating(config_male_fire1k);
  startCreating(config_female_electric1k);
  startCreating(config_male_electric1k);
  startCreating(config_female_red1k);
  startCreating(config_male_red1k);

  startCreating(config_female_glitch2k);
  startCreating(config_female_astro2k);
  startCreating(config_female_fire2k);
  startCreating(config_male_fire2k);
  startCreating(config_female_electric2k);
  startCreating(config_male_electric2k);
  startCreating(config_female_red2k);
  startCreating(config_male_red2k);

  startCreating(config_female_glitch3k);
  startCreating(config_female_astro3k);
  startCreating(config_female_fire3k);
  startCreating(config_male_fire3k);
  startCreating(config_female_electric3k);
  startCreating(config_male_electric3k);
  startCreating(config_female_red3k);
  startCreating(config_male_red3k);

  startCreating(config_female_glitch4k);
  startCreating(config_female_astro4k);
  startCreating(config_female_fire4k);
  startCreating(config_male_fire4k);
  startCreating(config_female_electric4k);
  startCreating(config_male_electric4k);
  startCreating(config_female_red4k);
  startCreating(config_male_red4k);

  startCreating(config_female_glitch5k);
  startCreating(config_female_astro5k);
  startCreating(config_female_fire5k);
  startCreating(config_male_fire5k);
  startCreating(config_female_electric5k);
  startCreating(config_male_electric5k);
  startCreating(config_female_red5k);
  startCreating(config_male_red5k);

  startCreating(config_female_glitch6k);
  startCreating(config_female_astro6k);
  startCreating(config_female_fire6k);
  startCreating(config_male_fire6k);
  startCreating(config_female_electric6k);
  startCreating(config_male_electric6k);
  startCreating(config_female_red6k);
  startCreating(config_male_red6k);

  startCreating(config_female_glitch7k);
  startCreating(config_female_astro7k);
  startCreating(config_female_fire7k);
  startCreating(config_male_fire7k);
  startCreating(config_female_electric7k);
  startCreating(config_male_electric7k);
  startCreating(config_female_red7k);
  startCreating(config_male_red6k);

  startCreating(config_female_glitch8k);
  startCreating(config_female_astro8k);
  startCreating(config_female_fire8k);
  startCreating(config_male_fire8k);
  startCreating(config_female_electric8k);
  startCreating(config_male_electric8k);
  startCreating(config_female_red8k);
  startCreating(config_male_red8k);

  startCreating(config_female_glitch9k);
  startCreating(config_female_astro9k);
  startCreating(config_female_fire9k);
  startCreating(config_male_fire9k);
  startCreating(config_female_electric9k);
  startCreating(config_male_electric9k);
  startCreating(config_female_red9k);
  startCreating(config_male_red9k);
  
  

  //startCreatingEmpty(config_empty);
})();