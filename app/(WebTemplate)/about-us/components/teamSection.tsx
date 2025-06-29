'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "@components/common/heading";
import Container from "@components/container";
import Image from "next/image";
import titleShape from "@public/template/shape/title_shape_03.svg";

const agents = [
  {
    name: "Mark Filo",
    role: "CEO & Founder",
    img: "/_next/static/media/img_01.d7744e58.jpg",
  },
  {
    name: "Chris Matial",
    role: "Retailer",
    img: "/_next/static/media/img_02.e5e232ea.jpg",
  },
  {
    name: "Jubayer Al Hasan",
    role: "Marketing Expert",
    img: "/_next/static/media/img_03.92ffc8ed.jpg",
  },
  {
    name: "Jannatul Ferdaus",
    role: "Broker",
    img: "/_next/static/media/img_04.baddfb45.jpg",
  },
  {
    name: "Chris Matial",
    role: "Broker",
    img: "/_next/static/media/img_05.5cb43cd4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="relative z-[1] lg:py-32 py-10">
      <Container className="container mx-auto px-4">
        <div className="relative mb-[85px] lg:mb-[50px] text-center">
          <Heading >
            Our <span className="relative inline-block">Agents
              <Image
                  src={titleShape}
                  alt=""
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                />
            </span>
          </Heading>
          <p className="text-lg mt-4 text-gray-600">
            Lorem is placeholder text commonly used graphic
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-center bg-cover"
        >
          {agents.map((agent, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative shadow-md rounded-2xl overflow-hidden">
                <div className="border-2 rounded-2xl overflow-hidden">
                  <Image
                    src={agent.img}
                    alt={agent.name}
                    width={330}
                    height={400}
                    className="w-full h-auto object-cover transition duration-300"
                  />
                </div>
                <div className="text-center mt-4 pb-4">
                  <h6 className="text-xl font-semibold">{agent.name}</h6>
                  <a
                    href="/agent_details"
                    className="text-blue-600 hover:underline block mt-1"
                  >
                    {agent.role}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-[60px]">
          <a
            href="/agent"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Meet Entire Team
          </a>
        </div>
      </Container>
    </section>
  );
}
