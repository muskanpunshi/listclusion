"use client";

import React from "react";
import policyData from "../../../../data/policyData"; // adjust path as needed
import Container from "@components/container";
import Paragraph from "@components/common/paragraph";
import Heading from "@components/heading";

const PrivacyPolicyInnerPage = () => {
  return (
    <div className="sm:py-12">
      <Container className="lg:w-[80%]  ">
        <div>
          <Heading className="text-4xl py-2 text-secondary uppercase ">
            Privacy Policy
          </Heading>
          {policyData.map((category) => (
            <div
              key={category.id}
              className="mt-5 mb-5 py-3   border-b border-t border-dashed border-primary "
            >
              <div className="">
                {category.data.map((item, index) => (
                  <div key={index} className="py-6 ">
                    <Paragraph className="font-medium text-2xl max-sm:text-xl text-primary mb-2">
                      {item.heading}
                    </Paragraph>
                    <Paragraph
                      className=" text-secondary"
                      htmlText={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicyInnerPage;
