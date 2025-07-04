"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import titleShape from "@public/template/shape/title_shape_03.svg";
import { Pagination } from "swiper/modules";
import { property_data } from "@utils/data";
import Link from "next/link";
import Container from "./container";
import Heading from "./common/heading";

const ListingCard = () => {
  return (
    <section className="bg-[#f3f3f3] mt-8 xl:mt-16 pt-8 xl:pt-16 lg:pt-20 pb-24 xl:pb-28 lg:pb-24">
      <Container>
        <div className="relative">
          <div className="text-center lg:text-left mb-5 xl:mb-8 lg:mb-5">
            <Heading className="text-[64px] font-[500] text-[#000000b3]">
              New{" "}
              <span className="relative inline-block">
                Listings
                <Image
                  src={titleShape}
                  alt=""
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              </span>
            </Heading>
            <p className="text-[22px] text-[#00000080] mt-2">
              Explore latest & featured Consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {property_data
              .filter((items) => items.page === "home_1")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex lg:mt-10 mt-5 group card-pagination"
                >
                  <div className="bg-white rounded-md shadow-md w-full flex flex-col">
                    <div className="p-4">
                      <div className="relative rounded-md overflow-hidden">
                        <Swiper
                          modules={[Pagination]}
                          pagination={{ clickable: true }}
                          className="w-full h-full listing-slider"
                        >
                          {item.carousel_thumb.map((imgItem, index) => (
                            <SwiperSlide key={index}>
                              {/* <Link href="/listing_details_01">
                                <Image
                                  src={imgItem.img}
                                  alt={`Listing Image ${index + 1}`}
                                  className="w-full h-auto object-cover"
                                />
                              </Link> */}
                              <Image
                                src={imgItem.img}
                                alt={`Listing Image ${index + 1}`}
                                className="w-full h-auto object-cover"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>

                    <div className="px-6 pb-6 flex flex-col gap-2">
                      {/* <Link
                        href="/listing_details_01"
                        className=" text-xl font-medium  text-[#000000b3] group-hover:text-primary transition-all duration-300"
                      >
                        {item.title}
                      </Link> */}
                      <span className=" text-xl font-medium cursor-pointer text-[#000000b3] group-hover:text-primary transition-all duration-300">
                        {item.title}
                      </span>
                      <div className="text-sm text-gray-500">
                        {item.address}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ListingCard;
