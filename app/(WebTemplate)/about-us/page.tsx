import Banner from "@components/common/banner";
import React from "react";
import Introduction from "./components/introduction";
import HowItWorksSection from "./components/howItWorksSection";
import TeamSection from "./components/teamSection";
import Testimonials from "@components/testimonials";
import FeatureSection from "./components/featureSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Listclusion - Pakistan's Premier Construction & Interior Solutions Platform",
  description:
    "Discover how Listclusion connects architects, designers, and construction professionals with clients across Pakistan. Learn about our mission to simplify project sourcing.",
  keywords: [
    "About Listclusion",
    "construction directory Pakistan",
    "interior solutions platform",
    "architects network Pakistan",
    "Listclusion mission",
    "building professionals directory",
  ],

  openGraph: {
    title: "About Listclusion - Your Trusted Construction Network",
    description:
      "Learn about Pakistan's leading platform connecting construction and interior design professionals with clients and partners.",
    url: "https://listclusion.com/about-us",
    siteName: "Listclusion",
    images: [
      {
        url: "https://listclusion.com/images/og-about-us.jpg",
        width: 1200,
        height: 630,
        alt: "Listclusion About Us - Connecting Construction Professionals",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Listclusion - Pakistan's Construction Network",
    description:
      "Your one-stop platform for connecting with architects, contractors, and interior specialists across Pakistan",
    images: ["https://listclusion.com/images/twitter-about.jpg"],
  },

  alternates: {
    canonical: "https://listclusion.com/about-us",
  },

  other: {
    "contact:phone": "+92 336 4027555",
    "contact:address":
      "25 B1 31 Street Off Khayaban e Shamsheer DHA Phase V Ext Karachi, Pakistan",
  },
};

const About = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ListClusion",
    description:
      "Pakistan's premier platform connecting construction and interior design professionals",
    publisher: {
      "@type": "Organization",
      name: "ListClusion",
      logo: {
        "@type": "ImageObject",
        url: "https://listclusion.com/logo.png",
        width: 300,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-336-4027555",
        contactType: "customer service",
        areaServed: "PK",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "25 B1 31 Street Off Khayaban e Shamsheer",
        addressLocality: "DHA Phase V Ext",
        addressRegion: "Karachi",
        postalCode: "75500",
        addressCountry: "PK",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://listclusion.com/about-us",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner
        title={"About Us"}
        breadcrumbs={[{ title: "About Us", href: "/about-us" }]}
      />
      <Introduction />
      <HowItWorksSection />
      {/* <Testimonials /> */}
      {/* <FeatureSection /> */}
      <TeamSection />
    </>
  );
};

export default About;
