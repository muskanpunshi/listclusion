import { StaticImageData } from "next/image";

import categoryIcon_1 from "@public/template/icon/icon_15.svg";
import categoryIcon_2 from "@public/template/icon/icon_16.svg";
import categoryIcon_3 from "@public/template/icon/icon_17.svg";
import categoryIcon_4 from "@public/template/icon/icon_18.svg";
import categoryIcon_5 from "@public/template/icon/icon_19.svg";
import categoryIcon_6 from "@public/template/icon/icon_20.svg";
import categoryIcon_7 from "@public/template/icon/icon_21.svg";

export interface CategoryItem {
  id: number;
  icon?: StaticImageData;
  text: string;

}

const category_data: CategoryItem[] = [
  { id: 1, icon: categoryIcon_1, text: "Architects Consultants", page: "home_3" },
  { id: 2, icon: categoryIcon_2, text: "Engineering Consultants", page: "home_3" },
  { id: 3, icon: categoryIcon_3, text: "Builders & Developers", page: "home_3" },
  { id: 4, icon: categoryIcon_4, text: "Interior Designers", page: "home_3" },
  { id: 5, icon: categoryIcon_5, text: "Mechanical Consultant", page: "home_3" },
  { id: 6, icon: categoryIcon_6, text: "Electrical Consultants", page: "home_3" },
  { id: 7, icon: categoryIcon_7, text: "HVAC Consultants", page: "home_3" },
  { id: 8, icon: categoryIcon_7, text: "Plumbling Consultants", page: "home_3" },
  { id: 9, icon: categoryIcon_7, text: "Furniture Manufactures", page: "home_3" },
  { id: 10, icon: categoryIcon_7, text: "Project Managers", page: "home_3" },
  { id: 11, icon: categoryIcon_7, text: "Quantity Surveyors Consultants", page: "home_3" },
  { id: 12, icon: categoryIcon_7, text: "Metal Works", page: "home_3" }
];

export default category_data;
