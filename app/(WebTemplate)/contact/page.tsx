"use client";
import Container from "@components/container";
import Heading from "@components/heading";
import Paragraph from "@components/paragraph";
import React from "react";
import { FaLocationDot  } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BsFillChatQuoteFill } from "react-icons/bs";

import Form from "./components/form";

const ContactUs = () => {
  return (
    <div className="lg:pt-48   py-34">
      <Container className="container mx-auto px-4">
        <div className="text-center max-w-5xl  mx-auto lg:mb-16 mb-10 fade-in-up">
          <Heading isHeadingH1={true}>
            Questions? Feel Free to Reach Out Via Message.
          </Heading>
        </div>

        <div className="flex flex-wrap justify-center items-center  lg:justify-between gap-10 lg:gap-5 my-10 lg:my-20 lg:px-10  fade-in-up">
          <div className="flex items-center space-x-4 max-sm:w-full">
            <div className="lg:w-16 lg:h-16 h-14 w-14 rounded-full flex items-center justify-center bg-secondary">
              <FaLocationDot className="text-white lg:text-3xl text-2xl" />
            </div>
            <div>
              <Paragraph className="text-lg font-medium">
                We’re always happy to help.
              </Paragraph>
              <a
                href="mailto:info@listclusion.com"
                className=" hover:underline hover:text-primary transition-all duration-300 ease-in-out"
              >
                info@listclusion.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 max-sm:w-full">
            <div className="lg:w-16 lg:h-16 h-14 w-14 rounded-full flex items-center justify-center bg-secondary">
              <IoCall   className="text-white lg:text-3xl text-2xl" />
            </div>
            <div>
              <Paragraph className="text-lg font-medium">
                Our hotline number
              </Paragraph>
              <div className="flex space-x-1  ">
                <a
                  href="tel:+7576994478"
                  className=" hover:underline hover:text-primary transition-all duration-300 ease-in-out"
                >
                  +757 699 4478 ,
                </a>
                <a
                  href="tel:+9913779731"
                  className=" hover:underline hover:text-primary transition-all duration-300 ease-in-out"
                >
                  +991 377 9731
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 max-sm:w-full">
            <div className="lg:w-16 lg:h-16 h-14 w-14 rounded-full flex items-center justify-center bg-secondary">
              <BsFillChatQuoteFill className="text-white lg:text-3xl text-2xl" />
            </div>
            <div>
              <Paragraph className="text-lg font-medium">Live chat</Paragraph>
              <a
                href="https://www.homylivechat.com"
                target="_blank"
                className=" hover:underline hover:text-primary transition-all duration-300 ease-in-out"
              >
                www.homylivechat.com
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#f3f3f3]  mt-16 xl:mt-28 sm:mt-20">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full lg:w-2/5 min-h-[500px] ">
            <iframe
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
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
