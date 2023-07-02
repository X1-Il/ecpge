/*
=========================================================
* e_ React - v2.1.0
=========================================================

* Product Page:
* Copyright 2023 X1-Il (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import Pr1 from "assets/images/Formation/Ilham/Pr1.png";
import Pr2 from "assets/images/Formation/Ilham/Pr2.png";
import CA1 from "assets/images/Formation/Ilham/CA1.png";
import VA1 from "assets/images/Formation/Ilham/VA1.png";
import VA2 from "assets/images/Formation/Ilham/VA2.png";
import pb1 from "assets/images/Formation/Ilham/pb1.png";
import pb2 from "assets/images/Formation/Ilham/pb2.png";
import pb3 from "assets/images/Formation/Ilham/pb3.png";
import pb4 from "assets/images/Formation/Ilham/pb4.png";
export default [
  {
    title: "Rappel sup",
    description: "Des rappels et des résumés généraux sur la partie Proba du programme sup",
    items: [
      {
        image: Pr1,
        name: "",
        count: 1,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: Pr2,
        name: "",
        count: 2,
        route: "/sections/page-sections/features",
      },
    ],
  },
  {
    title: "Couple Aleatoire",
    items: [
      {
        image: CA1,
        name: "",
        count: 1,
        route: "/sections/navigation/In",
      },
    ],
  },
  {
    title: "Variables Aleatoires",
    items: [
      {
        image: VA1,
        name: "",
        count: 1,
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: VA2,
        name: "",
        count: 2,
      },
    ],
  },
  {
    title: "Problèmes",
    items: [
      {
        image: pb1,
        name: "",
        count: 1,
      },
      {
        image: pb2,
        name: "",
        count: 2,
      },
      {
        image: pb3,
        name: "Fonction generatrice",
        count: 3,
      },
      {
        image: pb4,
        name: "Markov",
        count: 4,
      },
    ],
  },
];
