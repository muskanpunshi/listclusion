"use client";
import React from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import "@styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ListClusion",
    url: "https://listclusion.com",
    description:
      "Pakistan's premier directory for construction and design professionals",
    applicationCategory: "BusinessDirectory",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      category: "BusinessDirectoryService",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "ListClusion",
      logo: {
        "@type": "ImageObject",
        url: "https://listclusion.com/logo1.png",
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`relative w-full h-screen  `}>
        <Header />
        <div className="overflow-hidden ">{children}</div>
        <Footer />
      </div>
    </>
  );
}
