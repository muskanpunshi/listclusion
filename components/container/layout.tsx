"use client";
import React from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import "@styles/globals.css";

// import Image from "next/image";
// import logoIcon from "@public/template/logo-icon.svg";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative w-full h-screen  `}>
      <Header />
      <div className="overflow-hidden ">{children}</div>
      <Footer />
    </div>
  );
}
