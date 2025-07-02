"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


import React, { useState } from "react";
import Heading from "@components/common/heading";
import Container from "@components/container";
import Image from "next/image";
import titleShape from "@public/template/shape/title_shape_03.svg";
import Paragraph from "@components/common/paragraph";
import categoryDetails from "data/categoryDetail";

const agents = [
  {
    name: "Mark Filo",
    role: "CEO & Founder",
    img: "/template/agent/img_01.jpg"
  },
  {
    name: "Chris Matial",
    role: "Retailer",
    img: "/template/agent/img_02.jpg"
  },
  {
    name: "Jubayer Al Hasan",
    role: "Marketing Expert",
    img: "/template/agent/img_03.jpg"
  },
  {
    name: "Jannatul Ferdaus",
    role: "Broker",
    img: "/template/agent/img_04.jpg"
  },
  {
    name: "Chris Matial",
    role: "Broker",
    img: "/template/agent/img_05.jpg"
  }
];

const TeamSection =()=> {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative z-[1] lg:py-32 py-14  ">
      <Container className="container mx-auto px-4">
        <div className="relative mb-[50px] text-center">
          <Heading>
            Our{" "}
            <span className="relative inline-block">
              Consultants
              <Image
                src={titleShape}
                alt=""
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
              />
            </span>
          </Heading>
          <Paragraph className="mt-4">
           Meet the experts who bring vision, strategy, and innovation to every project.
          </Paragraph>
        </div>
        <div className="px-4 relative before:absolute before:top-[-15px] before:right-[-12px] before:left-[-12px] before:h-[45%] before:-z-10 before:bg-[url('/template/shape/shape_05.svg')] before:bg-cover">
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2,spaceBetween:10 },
              1024: { slidesPerView: 3,spaceBetween:10 },
              1280: { slidesPerView: 4, spaceBetween: 24 }
            }}
          
          >
            {categoryDetails.map((agent, idx) => (
              <SwiperSlide key={idx} className="">
                <div className="relative pt-8 ">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={agent.categoryBannerImage}
                      alt={agent.name}
                      width={260}
                      
                      className=" h-[380px] w-full max-lg:h-[320px] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="text-center mt-4 pb-4">
                    <Paragraph className="text-xl font-medium mb-1">
                      {agent.name}
                    </Paragraph>
                    <Paragraph>{agent.category}</Paragraph>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center gap-2 mt-8 button-line">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => swiperInstance?.slideToLoop(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300  ${
                  currentSlide % 3 === i ? "bg-primary" : "bg-secondary"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TeamSection