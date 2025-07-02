import Banner from "@components/common/banner";
import React from "react";
import { Metadata } from 'next'
import TermsInnerPage from "./components/termsInnerPage";

export const metadata: Metadata = {
  title: "Terms & Conditions - ListClusion",
};

const TermsAndConditions = () => {
  return (
    <>
      <Banner
        title="Terms & Conditions"
        breadcrumbs={[{ title: "Terms & Conditions", href: "/terms-and-conditions" }]}
      />
 <TermsInnerPage />
      
    </>
  );
};

export default TermsAndConditions;
