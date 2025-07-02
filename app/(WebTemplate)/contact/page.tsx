import Container from "@components/container";
import Heading from "@components/common/heading";
import Paragraph from "@components/common/paragraph";
import React from "react";

import Form from "./components/form";
import contactData from "data/contactData";
import ContactInfo from "./components/contactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - ListClusion"
};

const ContactUs = () => {
  return (
    <div className="lg:pt-48   py-34">
      <Container className=" mx-auto px-4">
        <div className="text-center max-w-5xl  mx-auto lg:mb-16 mb-10 fade-in-up">
          <Heading isHeadingH1={true}>
            Questions? Feel Free to Reach Out Via Message.
          </Heading>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-between   gap-y-10 my-10 lg:my-20 lg:px-10 fade-in-up">
          {contactData.map((item, index) => (
            <ContactInfo
              key={index}
              icon={item.icon}
              title={item.title}
              links={item.links}
            />
          ))}
        </div>
      </Container>

      <div className="bg-[#f3f3f3]  mt-16 xl:mt-28 sm:mt-20">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full lg:w-2/5 min-h-[500px] ">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps?q=25%20B1%2031%20Street%20Off%20Khayaban%20e%20Shamsheer%20DHA%20Phase%20V%20Ext%20Karachi%20Pakistan&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full lg:w-[55%] py-16 px-10 fade-in-up">
            <Heading className=" text-5xl mb-6">Send Message</Heading>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
