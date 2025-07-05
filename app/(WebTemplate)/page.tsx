import HeroBanner from "@components/heroBanner";
import BlockFeature from "@components/blockFeature";
import FooterPromoBanner from "@components/footerPromoBanner";
import Testimonials from "@components/testimonials";
import ListingCard from "@components/listingCard";

import { faqData } from "@utils/data";
import HomeFaqs from "@components/homeFaqs";
import HomeCounter from "@components/homeCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ListClusion - Pakistan's Premier Construction & Design Directory",
    template: "%s | ListClusion Directory",
  },
  description:
    "Connecting clients with top professionals in architecture, engineering, contracting, and furniture manufacturing across Pakistan. Register your business today.",
  keywords: [
    "Pakistan construction directory",
    "Karachi architects",
    "Lahore engineering consultants",
    "Islamabad contractors",
    "register construction business",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://listclusion.com",
    siteName: "ListClusion",
    title: "ListClusion - Pakistan's Construction Professionals Network",
    description:
      "Find vetted professionals for your construction and design projects across Pakistan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ListClusion Professional Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ListClusion - Pakistan's Construction Directory",
    description:
      "Source reliable contractors, consultants and manufacturers for your projects",
    images: ["/twitter-card.jpg"],
  },
};

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BlockFeature />
      <HomeCounter />
      <ListingCard />
      <Testimonials />
      {/* <HomeFaqs faqs={faqData} /> */}
      <FooterPromoBanner />
    </div>
  );
}
