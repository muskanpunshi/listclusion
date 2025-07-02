import Banner from "@components/common/banner";
import React from "react";
import InnerFaqs from "./components/privacyPolicyInnerPage";
import { Metadata } from 'next'
import PrivacyPolicyInnerPage from "./components/privacyPolicyInnerPage";

export const metadata: Metadata = {
  title: "Privacy Policy - ListClusion",
};

const PrivacyPolicy = () => {
  return (
    <>
      <Banner
        title="Privacy Policy"
        breadcrumbs={[{ title: "Privacy Policy", href: "/privacy-policy" }]}
      />
 
      <PrivacyPolicyInnerPage />
    </>
  );
};

export default PrivacyPolicy;
