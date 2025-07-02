import { feature_data } from "@utils/data";
import { categoryDetails } from "data/categoryDetail";

export interface HeaderNavbar {
  label: string;
  path?: string; // Optional if it has children
  children?: {
    label: string;
    path: string;
    child?:any[];
  }[];
}

export interface FooterSection {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}


const parentCategoryAssign = () => {
  const result = [];

  const parentMap = {};

  categoryDetails.forEach(cat => {
    if (cat.parentCategory) {
      // Add under existing parent or create it
      if (!parentMap[cat.parentCategory]) {
        parentMap[cat.parentCategory] = {
          label: cat.parentCategory,
          child: []
        };
        result.push(parentMap[cat.parentCategory]);
      }

      parentMap[cat.parentCategory].child.push({
        label: cat.category,
        path: cat.categorySlug
      });
    } else {
      // Top-level category (may or may not have children)
      const item = {
        label: cat.category,
        path: cat.categorySlug
      };
      parentMap[cat.category] = item;
      result.push(item);
    }
  });
  return result
}


export const headerNavigation: HeaderNavbar[] = [
  { label: "Home", path: "/" },
  {
    label: "Categories",
    children: parentCategoryAssign()
  },
  { label: "About Us", path: "/about-us" },
  { label: "FAQs", path: "/faqs" },

  { label: "Contact", path: "/contact" },

];
export const footerSections: FooterSection[] = [
  {
    title: "Links",
    items: [
      { label: "Home", href: "/" },
      { label: "About Company", href: "/about-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms & conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },

      { label: "Resgiter Your  Company", href: "/register-company" },
      { label: "Faq’s", href: "/faqs" },
    ],
  },
  // {
  //   title: "New Listing",
  //   items: [
  //     { label: "Buy Apartments", href: "#" },
  //     { label: "Buy Condos", href: "#" },
  //     { label: "Rent Houses", href: "#" },
  //     { label: "Rent Industrial", href: "#" },
  //     { label: "Buy Villas", href: "#" },
  //     { label: "Rent Office", href: "#" },
  //   ],
  // },
];
