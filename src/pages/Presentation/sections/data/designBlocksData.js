const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Dubarry",
    description: "Exercices et problèmes corrigés sup",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Mecanique",
        count: 1,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Électricité",
        count: 2,
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Thermodynamique",
        count: 3,
      },
    ],
  },
  {
    title: "H-prepa",
    description: "Sup/Spe",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Mecanique",
        count: 4,
        route: "/sections/navigation/navbars",
      },
    ],
  },
];
