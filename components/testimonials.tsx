"use client";

import Image from "next/image";
import Container from "./container";
import Paragraph from "./paragraph";
import Heading from "./heading";
import RotatingShape from "@public/template/shape/shape_62.svg";
import { BsQuote } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials } from "@utils/data";

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

        <div className="relative lg:w-7/12 h-full border-l">
          <div className=" bg-[url('/template/shape/shape_61.svg')] bg-cover bg-no-repeat w-full h-full px-16 py-4 flex flex-col justify-between">
            <div className="w-18 h-18 bg-primary text-white flex items-center justify-center rounded-full mb-4">
              <BsQuote className="text-3xl" />
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop
            className="h-full testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="py-8 relative h-full">
                <Paragraph className="min-h-[200px] text-[30px] italic leading-snug text-gray-800 mb-6 px-16">
                  {testimonial.review}
                </Paragraph>

                {/* Client Info */}
                <div className="absolute bottom-0 left-0 w-full  pb-4">
                  <div className="bg-[url('/template/shape/shape_61.svg')] bg-cover bg-no-repeat w-full flex items-center justify-end gap-6 p-4 rounded-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <Paragraph className="font-semibold text-lg">
                        {testimonial.name}
                      </Paragraph>
                      <span className="text-gray-500 text-sm">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
