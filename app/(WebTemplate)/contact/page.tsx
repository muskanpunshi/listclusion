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
           <iframe   className="w-full h-full border-0"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.7906687327227!2d67.03279868002781!3d24.802620521156747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d06f7998a55%3A0x55bb3bc73c7d11e0!2sKhayaban-e-Shamsheer%20%26%2031st%20St%2C%20DHA%20Phase%205%20Defence%20V%20Defence%20Housing%20Authority%2C%20Karachi%2C%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1751460824315!5m2!1sen!2s" width="600" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="w-full lg:w-[55%] py-16 md:px-10 px-6 fade-in-up">
            <Heading className=" text-5xl mb-6">Send Message</Heading>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
