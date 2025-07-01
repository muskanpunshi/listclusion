import Banner from "@components/common/banner";
import React from "react";
import InnerFaqs from "./components/innerFaqs";

const Faqs = () => {
  return (
    <>
      <Banner
        title="Question & Answers"
        breadcrumbs={[{ title: "Faq’s", href: "/faqs" }]}
      />
 
      <InnerFaqs />
    </>
  );
};

export default Faqs;
