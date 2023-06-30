import T1 from "assets/images/Formation/Ilham/T1.png";
import T2 from "assets/images/Formation/Ilham/T2.png";
import T3 from "assets/images/Formation/Ilham/T3.png";
import Ag1 from "assets/images/Formation/Ilham/Ag1.png";
import R1 from "assets/images/Formation/Ilham/R1.png";
import R2 from "assets/images/Formation/Ilham/R2.png";
import R3 from "assets/images/Formation/Ilham/R3.png";
import R4 from "assets/images/Formation/Ilham/R4.png";
import EP1 from "assets/images/Formation/Ilham/EP1.png";
import pb2 from "assets/images/Formation/Ilham/pb2.png";
import pb5 from "assets/images/Formation/Ilham/pb5.png";

export default [
  {
    title: "Espaces prehilbertien",
    description: "Des rappels et des résumés généraux",
    items: [
      {
        image: EP1,
        name: "Prehilbertien",
        count: 1,
      },
    ],
  },
  {
    title: "Reduction d'endomorphisme",
    description: "Resume + apps + extraits",
    items: [
      {
        image: R1,
        name: "Reduction (resume de cours)",
        count: 1,
      },
      {
        image: R2,
        name: "Application de la reduction",
        count: 2,
      },
      {
        image: R3,
        name: "Reduction d'endomorphisme",
        count: 3,
      },
      {
        image: R4,
        name: "Reduction (cnc2012)",
        count: 4,
      },
    ],
  },
  {
    title: "Algébre générale",
    description: "Resume + apps + extraits",
    items: [
      {
        image: Ag1,
        name: "",
        count: 1,
      },
    ],
  },
  {
    title: "Topologie",
    description: "Resume + apps",
    items: [
      {
        image: T1,
        name: "Resumé",
        count: 1,
        route: "/sections/elements/buttons",
      },
      {
        image: T2,
        name: "CNC 2017",
        count: 2,
      },
      {
        image: T3,
        name: "CNC 2017 (suite)",
        count: 3,
      },
    ],
  },
  {
    title: "Concours",
    description: "",
    items: [
      {
        image: pb5,
        name: "CCP 2010",
        count: 1,
        route: "/sections/elements/buttons",
      },
      {
        image: pb2,
        name: "CCP 2011",
        count: 2,
      },
    ],
  },
];
