import Img1 from "./assets/imgs/card_img1.png";
import Img1_1 from "./assets/imgs/card_img1_1.png";
import Img2 from "./assets/imgs/card_img2.png";
import Img2_1 from "./assets/imgs/card_img2_1.png";
import Img3 from "./assets/imgs/card_img3.png";
import Img3_1 from "./assets/imgs/card_img3_1.png";
import Img4 from "./assets/imgs/card_img4.png";
import Img4_1 from "./assets/imgs/card_img4_1.png";
import Img5 from "./assets/imgs/card_img5.png";
import Img5_1 from "./assets/imgs/card_img5_1.png";
import Img6 from "./assets/imgs/card_img6.png";
import Img6_1 from "./assets/imgs/card_img6_1.png";
import Img7 from "./assets/imgs/card_img7.png";
import Img7_1 from "./assets/imgs/card_img7_1.png";
import Img8 from "./assets/imgs/card_img8.png";
import Img8_1 from "./assets/imgs/card_img8_1.png";

import Articles1 from "./assets/imgs/acticles_1.png";
import Articles2 from "./assets/imgs/acticles_2.png";
import Articles3 from "./assets/imgs/acticles_3.png";

import MultiUser from "./assets/imgs/multiple-users.svg";
import Sun from "./assets/imgs/Sun.svg";
import Snow from "./assets/imgs/snow.svg";
import Star from "./assets/imgs/star.svg";
import Photo_1 from "./assets/imgs/photo_1.png";
import Photo_2 from "./assets/imgs/photo_2.png";
import Photo_3 from "./assets/imgs/photo_3.png";

export const destinations = [
  {
    id: 1,
    city: "Paraty",
    country: "Rio de Janeiro",
    image: Img1,
    detailImage: Img1_1,
  },
  {
    id: 2,
    city: "Morretes",
    country: "Paraná",
    image: Img2,
    detailImage: Img2_1,
  },
  {
    id: 3,
    city: "Olinda",
    country: "Pernambuco",
    image: Img3,
    detailImage: Img3_1,
  },
  {
    id: 4,
    city: "Gramado",
    country: "Rio Grande do Sul",
    image: Img4,
    detailImage: Img4_1,
  },
  {
    id: 5,
    city: "Estaing",
    country: "France",
    image: Img5,
    detailImage: Img5_1,
  },
  {
    id: 6,
    city: "Vík í Mýrdal",
    country: "Iceland",
    image: Img6,
    detailImage: Img6_1,
  },
  {
    id: 7,
    city: "Hamnoy village",
    country: "Norway",
    image: Img7,
    detailImage: Img7_1,
  },
  {
    id: 8,
    city: "Montego Bay",
    country: "Jamaica",
    image: Img8,
    detailImage: Img8_1,
  },
];

export const articles = [
  {
    id: 1,
    heading: "Expat Life in Brazil: Living the Dream in South America",
    link: "www.magnificentworld.com",
    image: Articles1,
  },
  {
    id: 2,
    heading: "Best Things to Do in Paraty, Brazil You Can't Miss",
    link: "www.laidbacktrip.com",
    image: Articles2,
  },
  {
    id: 3,
    heading: "Worth the trip: A visit to paraty",
    link: "www.vayaadventures.com",
    image: Articles3,
  },
];

export const cityDetails = [
  {
    id: 1,
    heading: "City size",
    itemDatas: [
      {
        id: 1,
        icon: MultiUser,
        text: "35,730",
      },
      {
        id: 2,
        icon: null,
        text: "(2009)",
      },
    ],
  },
  {
    id: 2,
    heading: "Weather",
    itemDatas: [
      {
        id: 1,
        icon: Sun,
        text: "High - 29°C",
      },
      {
        id: 2,
        icon: Snow,
        text: "LOW - 19°C",
      },
    ],
  },
  {
    id: 3,
    heading: "Safety",
    itemDatas: [
      {
        id: 1,
        icon: Star,
        text: "4.8",
      },
    ],
  },
];

export const photos = [
  { id: 1, image: Photo_1 },
  { id: 2, image: Photo_2 },
  { id: 3, image: Photo_3 },
];

export const livingcosts = [
  {
    id: 1,
    heading: "Mothly spend for a family of 4",
    subItems: [
      {
        id: 1,
        subHeading: "rent",
        price: "1,800",
        desc: "This is for a 3 bedroom(40Sqm) within city center.",
      },
      {
        id: 2,
        subHeading: "groceries",
        price: "1,600",
        desc: "The average cost of Groceries for a family of 4.",
      },
      {
        id: 3,
        subHeading: "others",
        price: "2,200",
        desc: "the average monthly cost of Gas, Water, Electricity, and Internet.",
      },
      {
        id: 4,
        subHeading: "total",
        price: "5,600",
        desc: "This is the average mothly spending for a family of four(4)",
      },
    ],
  },
  {
    id: 2,
    heading: "Mothly spend for an individual",
    subItems: [
      {
        id: 1,
        subHeading: "rent",
        price: "1,100",
        desc: "This is for a 3 bedroom(40Sqm) within city center.",
      },
      {
        id: 2,
        subHeading: "groceries",
        price: "900",
        desc: "The average cost of Groceries for a family of 4.",
      },
      {
        id: 3,
        subHeading: "others",
        price: "1,300",
        desc: "the average monthly cost of Gas, Water, Electricity, and Internet.",
      },
      {
        id: 4,
        subHeading: "total",
        price: "3,300",
        desc: "This is the average mothly spending for a family of four(4)",
      },
    ],
  },
];
