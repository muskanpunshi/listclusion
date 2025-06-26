"use client";

import Container from "@components/container";
import Heading from "@components/heading";
import Paragraph from "@components/paragraph";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="py-48 ">
      <Container className="container mx-auto px-4">
        <div className="text-center max-w-5xl  mx-auto lg:mb-16 mb-10 fade-in-up">
          <Heading isHeadingH1={true}>
            Questions? Feel Free to Reach Out Via Message.
          </Heading>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-6 mt-16 lg:mt-10 fade-in-up">
          <div className="relative z-10 mt-6 w-full max-w-md">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary">
                <FaLocationDot className="text-secondary text-2xl" />
              </div>
              <div>
                <Paragraph className="text-lg font-medium">
                  We’re always happy to help.
                </Paragraph>
                <a
                  href="mailto:info@listclusion.com"
                  className=" hover:underline hover:text-primary"
                >
                   info@listclusion.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative z-10 mt-6 w-full max-w-md">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary">
                <FaLocationDot className="text-secondary text-2xl" />
              </div>
              <div>
                <Paragraph className="font-medium">
                  Our hotline number
                </Paragraph>
                <div className="flex flex-col">
                  <a
                    href="tel:+7576994478"
                    className=" hover:underline hover:text-primary"
                  >
                    +757 699 4478
                  </a>
                  <a
                    href="tel:+9913779731"
                    className=" hover:underline hover:text-primary"
                  >
                    +991 377 9731
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Live Chat */}
          <div className="relative z-10 mt-6 w-full max-w-md">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary">
                <FaLocationDot className="text-secondary text-2xl" />
              </div>
              <div>
                <Paragraph className="text-lg font-medium">Live chat</Paragraph>
                <a
                  href="https://www.homylivechat.com"
                  target="_blank"
                  className=" hover:underline hover:text-primary"
                >
                  www.homylivechat.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Map */}
        <div className="bg-pink-100 mt-36 xl:mt-28 md:mt-20">
          <div className="flex flex-wrap">
            {/* Form */}
            <div className="w-full lg:w-1/2 p-6 animate-fadeInUp">
              <form className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">Name*</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name*"
                      className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email*</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email Address*"
                      className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Message*</label>
                    <textarea
                      name="message"
                      placeholder="Your message*"
                      className="w-full border border-gray-300 rounded px-4 py-2 h-32"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded uppercase"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="w-full lg:w-1/2 h-[500px]">
              <iframe
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
