import { feature_data } from "@utils/data";

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

export const headerNavigation: HeaderNavbar[] = [
  { label: "Home", path: "/" },
  {
    label: "Categories",
    children: feature_data.map((cat) => ({
      label: cat.title,
      path: "/listing_04", // or dynamically `/categories/${slugify(cat.title)}`
    })),
  },
  { label: "Blog", path: "#" },
  { label: "About Us", path: "#" },
  { label: "Contact", path: "/contact" },

];
export const footerSections: FooterSection[] = [
  {
    title: "Links",
    items: [
      { label: "Home", href: "#" },
      { label: "Membership", href: "#" },
      { label: "About Company", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Explore Careers", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Dashboard", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms & conditions", href: "#" },
      { label: "Cookie", href: "#" },
      { label: "Privacy policy", href: "#" },
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
