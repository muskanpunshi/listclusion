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


export interface CategoryItem {
  id: number;
  icon?: StaticImageData;
  text: string;

}


export const category_data: CategoryItem[] = [
  { id: 1, icon: categoryIcon_1, text: "Architects Consultants"},
  { id: 2, icon: categoryIcon_2, text: "Engineering Consultants"},
  { id: 3, icon: categoryIcon_3, text: "Builders & Developers"},
  { id: 4, icon: categoryIcon_4, text: "Interior Designers"},
  { id: 5, icon: categoryIcon_5, text: "Mechanical Consultant"},
  { id: 6, icon: categoryIcon_6, text: "Electrical Consultants"},
  { id: 7, icon: categoryIcon_7, text: "HVAC Consultants"},
  { id: 8, icon: categoryIcon_7, text: "Plumbling Consultants"},
  { id: 9, icon: categoryIcon_7, text: "Furniture Manufactures"},
  { id: 10, icon: categoryIcon_7, text: "Project Managers"},
  { id: 11, icon: categoryIcon_7, text: "Quantity Surveyors Consultants"},
  { id: 12, icon: categoryIcon_7, text: "Metal Works"}
];



export interface FeatureItem {
  id: number;
  title: string;
  desc: string;
  image:  StaticImageData;
}

export const featureData: FeatureItem[] = [
  {
    id: 1,
    title: "Architects Consultants",
    desc: "1,230 Listing",
    image: city1,
  },
  {
    id: 2,
    title: "Interior Designers",
    desc: "1,140 Listing",
    image: city2,
  },
  {
    id: 3,
    title: "Furniture Manufactures",
    desc: "1,740 Listing",
    image:city1,
  },
  {
    id: 4,
    title: "Metal Works",
    desc: "720 Listing",
    image: city2,
  },
];



