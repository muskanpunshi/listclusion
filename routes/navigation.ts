import { feature_data } from "@utils/data";
import { categoryDetails } from "data/categoryDetail";

export interface HeaderNavbar {
  label: string;
  path?: string; // Optional if it has children
  children?: {
    label: string;
    path: string;
  }[];
}

export interface FooterSection {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}


const uniqueCategories = [
  ...new Map(categoryDetails.map(cat => [cat.category, cat])).values()
];

export const headerNavigation: HeaderNavbar[] = [
  { label: "Home", path: "/" },
  {
    label: "Categories",
    children: uniqueCategories.map((cat) => ({
      label: cat.category,
      path: cat.categorySlug, // or dynamically `/categories/${slugify(cat.title)}`
    })),
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
      { label: "Membership", href: "#" },
      { label: "About Company", href: "/about-us" },
      { label: "Blog", href: "#" },
      { label: "Explore Careers", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Dashboard", href: "#" },
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
  {
    title: "New Listing",
    items: [
      { label: "Buy Apartments", href: "#" },
      { label: "Buy Condos", href: "#" },
      { label: "Rent Houses", href: "#" },
      { label: "Rent Industrial", href: "#" },
      { label: "Buy Villas", href: "#" },
      { label: "Rent Office", href: "#" },
    ],
  },
];
