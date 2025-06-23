"use client";

import Image from "next/image";
import Container from "./container";
import Paragraph from "./paragraph";
import Heading from "./heading";
import RotatingShape from "@public/template/shape/shape_62.svg";
import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className=" bg-white min-h-[500px] ">
     <Container className="mx-auto flex flex-col lg:flex-row items-center justify-between h-full min-h-[600px]">

        <div className="relative lg:w-[45%] h-full">
          <Paragraph className="uppercase tracking-widest mb-2">
            Client Feedback
          </Paragraph>
          <Heading className=" font-bold leading-snug mb-8">
            Rely on Clients, <br />
            Not Just Our Claims.
          </Heading>
          <div className="absolute flex flex-col right-10 -bottom-16 w-42 h-42 mt-4">
            <Image
              src={RotatingShape}
              alt="Rating"
              layout="fill"
              objectFit="contain"
              className="spin-slow filter invert-[30%] grayscale brightness-50 "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
              <p className="text-lg font-bold">9.3</p>
              <p className="text-sm">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
       <div className="relative lg:w-7/12 h-full border-l border-gray-300">
          <div className="bg-[url('/template/shape/shape_61.svg')]  px-16 py-4 bg-cover  bg-no-repeat w-full h-full ">
            <div className="w-18 h-18  bg-primary text-white flex items-center justify-center rounded-full ">
              <BsQuote className="text-3xl" />
            </div>
          </div>

          {/* Testimonial */}
          <Paragraph className="text-[44px] italic leading-snug text-gray-800  px-16 py-10">
            Quick solutions coupled with extraordinary{" "}
            <span className="text-primary font-medium">performance</span> a
            recommendation that&apos;s unequivocal.
          </Paragraph>

          {/* Client Info */}
          <div className="flex items-center gap-4 bg-[url('/diagonal-lines.png')] bg-repeat-x p-4 rounded-md">
            <Image
              src="/client-avatar.jpg" // Replace with your client image
              alt="Client"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg">Musa Delimuza</p>
              <span className="text-gray-500 text-sm">Miami, USA</span>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 mt-4">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="w-2 h-2 border border-black rounded-full"></span>
            <span className="w-2 h-2 border border-black rounded-full"></span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
