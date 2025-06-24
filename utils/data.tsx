import { StaticImageData } from "next/image";

import categoryIcon_1 from "@public/template/icon/icon_15.svg";
import categoryIcon_2 from "@public/template/icon/icon_16.svg";
import categoryIcon_3 from "@public/template/icon/icon_17.svg";
import categoryIcon_4 from "@public/template/icon/icon_18.svg";
import categoryIcon_5 from "@public/template/icon/icon_19.svg";
import categoryIcon_6 from "@public/template/icon/icon_20.svg";
import categoryIcon_7 from "@public/template/icon/icon_21.svg";

import city1 from "@public/template/city1.jpg";
import city2 from "@public/template/city2.jpg";

import F1 from "@public/template/feedback1.webp";

export interface CategoryItem {
  id: number;
  icon?: StaticImageData;
  text: string;
}

export const category_data: CategoryItem[] = [
  { id: 1, icon: categoryIcon_1, text: "Architects Consultants" },
  { id: 2, icon: categoryIcon_2, text: "Engineering Consultants" },
  { id: 3, icon: categoryIcon_3, text: "Builders & Developers" },
  { id: 4, icon: categoryIcon_4, text: "Interior Designers" },
  { id: 5, icon: categoryIcon_5, text: "Mechanical Consultant" },
  { id: 6, icon: categoryIcon_6, text: "Electrical Consultants" },
  { id: 7, icon: categoryIcon_7, text: "HVAC Consultants" },
  { id: 8, icon: categoryIcon_7, text: "Plumbling Consultants" },
  { id: 9, icon: categoryIcon_7, text: "Furniture Manufactures" },
  { id: 10, icon: categoryIcon_7, text: "Project Managers" },
  { id: 11, icon: categoryIcon_7, text: "Quantity Surveyors Consultants" },
  { id: 12, icon: categoryIcon_7, text: "Metal Works" },
];

// export interface FeatureItem {
//   id: number;
//   title: string;
//   desc: string;
//   image: StaticImageData;
// }

// export const featureData: FeatureItem[] = [
//   {
//     id: 1,
//     title: "Architects Consultants",
//     desc: "1,230 Listing",
//     image: city1,
//   },
//   {
//     id: 2,
//     title: "Interior Designers",
//     desc: "1,140 Listing",
//     image: city2,
//   },
//   {
//     id: 3,
//     title: "Furniture Manufactures",
//     desc: "1,740 Listing",
//     image: city1,
//   },
//   {
//     id: 4,
//     title: "Metal Works",
//     desc: "720 Listing",
//     image: city2,
//   },
// ];

export type Testimonial = {
  name: string;
  location: string;
  image: StaticImageData;

  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Musa Delimuza",
    location: "Miami, USA",
    image: F1,
    review:
      "Quick solutions coupled with extraordinary performance — a recommendation that's unequivocal.",
  },
  {
    name: "Alina Cruse",
    location: "Toronto, Canada",
    image: F1,
    review:
      "Found our dream home. Great experience with them. Thank you for the excellent service!",
  },
  {
    name: "Carlos Mendes",
    location: "Lisbon, Portugal",
    image: F1,
    review:
      "Efficient and friendly service, guided us perfectly. I'm fully satisfied with our new home!",
  },
];


export interface FaqResponse {
  id?: number;
  question?: string;
  answer?: string;
 
}

export const faqData: FaqResponse[] = [
  {
    id: 1,
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 14 days, no credit card required.",
  },
  {
    id: 2,
    question: "How do you evaluate different criteria in your process?",
    answer: "We assess product fit, market potential, team experience, and scalability before making a decision.",
  },
  {
    id: 3,
    question: "What do you look for in a founding team?",
    answer: "We value diverse skill sets, a strong vision, and the ability to execute under pressure.",
  },
  {
    id: 4,
    question: "Do you recommend Pay as you go or Prepay?",
    answer: "It depends on your usage pattern. Prepay offers better value for long-term usage, while Pay as you go is more flexible.",
  },
  {
    id: 5,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime from your dashboard. No questions asked.",
  },
];


import propertyThumb_1 from "@public/template/project-1.jpg";
import propertyThumb_2 from "@public/template/project-2.jpg";
import propertyThumb_3 from "@public/template/project-3.jpg";
import propertyThumb_4 from "@public/template/project-1.jpg";
import propertyThumb_5 from "@public/template/project-2.jpg";
import propertyThumb_6 from "@public/template/project-3.jpg";

import property2Thumb_1 from "@public/template/project-1.jpg";
import property2Thumb_2 from "@public/template/project-2.jpg";
import property2Thumb_3 from "@public/template/project-3.jpg";

import property2Thumb_11 from "@public/template/project-1.jpg";
import property2Thumb_22 from "@public/template/project-2.jpg";
import property2Thumb_33 from "@public/template/project-3.jpg";

import property3Thumb_1 from "@public/template/project-1.jpg";
import property3Thumb_2 from "@public/template/project-2.jpg";
import property3Thumb_3 from "@public/template/project-3.jpg";
import property3Thumb_4 from "@public/template/project-1.jpg";

import propertyLargThumb_1 from "@public/template/project-1.jpg";
import propertyLargThumb_2 from "@public/template/project-2.jpg";
import propertyLargThumb_3 from "@public/template/project-3.jpg";
import propertyLargThumb_4 from "@public/template/project-1.jpg";
import propertyLargThumb_5 from "@public/template/project-2.jpg";
import propertyLargThumb_6 from "@public/template/project-3.jpg";

// import propertyIcon_1 from "@/public/template/images/icon/icon_04.svg";
// import propertyIcon_2 from "@/public/template/images/icon/icon_05.svg";
// import propertyIcon_3 from "@/public/template/images/icon/icon_06.svg";

interface DataType {
  id: number;
  page: string;
  tag: string;
  tag_bg?: string;
  thumb?: StaticImageData;
  carousel_thumb: {
    id?: string;
    img: StaticImageData;
    active?: string;
  }[];
  title: string;
  address: string;
  data_delay_time?: string;
  price: number;
  price_text?: string;
  carousel?: string;
}

export const property_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    tag: "FOR RENT",
    carousel_thumb: [
      { img: property2Thumb_11, active: "active" },
      { img: property2Thumb_22 },
      { img: property2Thumb_33 },
    ],
    title: "PYRAMID CONSTRUCTORS",
    address: "Architects Consultants",

    price: 3280,
    price_text: "m",
    carousel: "1",
  },
  {
    id: 2,
    page: "home_1",
    tag: "FOR SELL",
    tag_bg: "sale",
    carousel_thumb: [
      { img: propertyThumb_2, active: "active" },
      { img: propertyThumb_3 },
      { img: propertyThumb_1 },
    ],
    title: "ARIF & ASSOCIATES",
    address: "Engineering Consultants",

    data_delay_time: "0.1s",
    price: 28100,
    carousel: "2",
  },
  {
    id: 3,
    page: "home_1",
    tag: "FOR SELL",
    tag_bg: "sale",
    carousel_thumb: [
      { img: propertyThumb_3, active: "active" },
      { img: propertyThumb_2 },
      { img: propertyThumb_1 },
    ],
    title: "AA BUILDERS & DEVELOPERS",
    address: "Builders & Developers",

    data_delay_time: "0.2s",
    price: 42500,
    carousel: "3",
  },
  {
    id: 4,
    page: "home_1",
    tag: "FOR RENT",
    carousel_thumb: [
      { img: propertyThumb_4, active: "active" },
      { img: propertyThumb_5 },
      { img: propertyThumb_6 },
    ],
    title: "AL-SHAFI ENTERPRISES",
    address: "Interior Designers",

    price: 3280,
    price_text: "m",
    carousel: "4",
  },
  {
    id: 5,
    page: "home_1",
    tag: "FOR SELL",
    tag_bg: "sale",
    carousel_thumb: [
      { img: propertyThumb_5, active: "active" },
      { img: propertyThumb_4 },
      { img: propertyThumb_6 },
    ],
    title: "AZIZ ENTERPRISES",
    address: "Mechanical Consultant",

    data_delay_time: "0.1s",
    price: 28100,
    carousel: "5",
  },
  {
    id: 6,
    page: "home_1",
    tag: "FOR RENT",
    carousel_thumb: [
      { img: propertyThumb_6, active: "active" },
      { img: propertyThumb_5 },
      { img: propertyThumb_4 },
    ],
    title: "CRESENT",
    address: "Electrical Consultants",

    data_delay_time: "0.2s",
    price: 42500,
    price_text: "m",
    carousel: "6",
  },

  // home two

  {
    id: 1,
    page: "home_2",
    tag: "FOR RENT",
    carousel_thumb: [
      { img: property2Thumb_1, active: "active" },
      { img: property2Thumb_2 },
      { img: property2Thumb_3 },
    ],
    title: "Blueberry villa.",
    address: "Mirpur 10, Stadium dhaka 1208",

    price: 34900.0,
    carousel: "1",
  },
  {
    id: 2,
    page: "home_2",
    tag: "FOR SELL",
    carousel_thumb: [
      { img: property2Thumb_2, active: "active" },
      { img: property2Thumb_1 },
      { img: property2Thumb_2 },
    ],
    title: "White House villa",
    address: "Muza link road, ca, usa",

    data_delay_time: "0.1s",
    price: 28100.0,
    carousel: "2",
  },
  {
    id: 3,
    page: "home_2",
    tag: "FOR SELL",
    carousel_thumb: [
      { img: property2Thumb_3, active: "active" },
      { img: property2Thumb_2 },
      { img: property2Thumb_1 },
    ],
    title: "Luxury villa in Dal lake.",
    address: "Mirpur 10, Stadium",

    data_delay_time: "0.2s",
    price: 42500.0,
    carousel: "3",
  },

  // home_3_property_2

  {
    id: 1,
    page: "home_3_property_2",
    tag: "FOR RENT",
    thumb: property3Thumb_1,
    carousel_thumb: [
      { id: "1", img: propertyLargThumb_1 },
      { id: "2", img: propertyLargThumb_2 },
      { id: "3", img: propertyLargThumb_3 },
    ],
    title: "Blueberry villa.",
    address: "Mirpur 10, Stadium dhaka 1208",

    price: 34900,
    carousel: "03",
  },
  {
    id: 2,
    page: "home_3_property_2",
    tag: "FOR SELL",
    thumb: property3Thumb_2,
    carousel_thumb: [
      { id: "4", img: propertyLargThumb_4 },
      { id: "5", img: propertyLargThumb_5 },
      { id: "6", img: propertyLargThumb_6 },
    ],
    title: "White House villa",
    address: "California link road, ca, usa",

    price: 28100,
    carousel: "03",
  },
  {
    id: 3,
    page: "home_3_property_2",
    tag: "FOR SELL",
    thumb: property3Thumb_3,
    carousel_thumb: [
      { id: "1", img: propertyLargThumb_1 },
      { id: "5", img: propertyLargThumb_5 },
      { id: "3", img: propertyLargThumb_3 },
      { id: "2", img: propertyLargThumb_2 },
    ],
    title: "Luxury villa in Dal lake.",
    address: "Mirpur 10, Stadium",

    price: 42500,
    carousel: "04",
  },
  {
    id: 4,
    page: "home_3_property_2",
    tag: "FOR SELL",
    thumb: property3Thumb_4,
    carousel_thumb: [
      { id: "4", img: propertyLargThumb_4 },
      { id: "6", img: propertyLargThumb_6 },
      { id: "3", img: propertyLargThumb_3 },
      { id: "2", img: propertyLargThumb_2 },
    ],
    title: "South Sun House",
    address: "Mirpur 10, Stadium",

    price: 55500,
    carousel: "04",
  },
  {
    id: 5,
    page: "home_3_property_2",
    tag: "FOR SELL",
    thumb: property3Thumb_2,
    carousel_thumb: [
      { id: "4", img: propertyLargThumb_4 },
      { id: "5", img: propertyLargThumb_5 },
      { id: "6", img: propertyLargThumb_6 },
    ],
    title: "White House villa",
    address: "California link road, ca, usa",

    price: 28100,
    carousel: "03",
  },

  // home_5
];

interface CategoryDataType {
  id: number;
  page: string;
  item_bg?: string;
  img?: StaticImageData;
  icon?: StaticImageData;
  title: string;
  desc?: string;
  tag?: string;
  data_delay_time?: string;
  btn?: string;
  class_name?: string;
  image?: any;
}

import image1 from "@public/template/architects-consultants.png";
import image2 from "@public/template/builders-and-developers.png";
import image3 from "@public/template/electrical-consultants.png";
import image4 from "@public/template/engineering-consultants.png";
import image5 from "@public/template/furniture-manufactures.png";
import image6 from "@public/template/hvac-consultants.png";
import image7 from "@public/template/interior-designers.png";
import image8 from "@public/template/mechanical-consultant.png";
import image9 from "@public/template/metal-works.png";
import image10 from "@public/template/plumbling-consultants.png";
import image11 from "@public/template/project-managers.png";
import image12 from "@public/template/quanlity-surveyors-consultants.png";

export const feature_data: CategoryDataType[] = [
  {
    id: 1,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-1",
    title: "Architects Consultants",
    desc: "1,230 Listing",
    image: image1,
  },
  {
    id: 2,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-2",
    title: "Engineering Consultants",
    desc: "1,140 Listing",
    data_delay_time: "0.1s",
    image: image2,
  },
  {
    id: 3,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-3",
    title: "Builders & Developers",
    desc: "1,740 Listing",
    data_delay_time: "0.2s",
    image: image3,
  },
  {
    id: 4,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-4",
    title: "Interior Designers",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image4,
  },
  {
    id: 5,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-5",
    title: "Mechanical Consultant",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image5,
  },
  {
    id: 6,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-6",
    title: "Electrical Consultants",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image6,
  },
  {
    id: 7,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-7",
    title: "HVAC Consultants",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image7,
  },
  {
    id: 8,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-8",
    title: "Plumbling Consultants",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image8,
  },
  {
    id: 9,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-9",
    title: "Furniture Manufactures",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image9,
  },
  {
    id: 10,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-10",
    title: "Project Managers",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image10,
  },
  {
    id: 11,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-11",
    title: "Quantity Surveyors Consultants",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image11,
  },
  {
    id: 12,
    page: "home_5_feature_1",
    item_bg: "home-5-feature-item-12",
    title: "Metal Works",
    desc: "720 Listing",
    data_delay_time: "0.3s",
    image: image12,
  },
];
