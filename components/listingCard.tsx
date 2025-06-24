"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import titleShape from "@public/template/shape/shape_03.svg";
import { Pagination } from "swiper/modules";
import property_data from "@utils/data";
import Link from "next/link";
import Container from "./container";

const ListingCard = () => {
  return (
    <section className="bg-[#e5e5e5] pt-16 xl:pt-28 lg:pt-20 pb-24 xl:pb-28 lg:pb-24">
      <Container>
        <div className="relative">
          <div className="text-center lg:text-left mb-12 xl:mb-8 lg:mb-5">
            <h3 className="text-[64px] font-bold">
              New{" "}
              <span className="relative inline-block">
                Listings
                <Image
                  src={titleShape}
                  alt=""
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16"
                />
              </span>
            </h3>
            <p className="text-lg mt-2 text-gray-600">
              Explore latest & featured Consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {property_data
              .filter((items) => items.page === "home_1")
              .map((item) => (
                <div key={item.id} className="flex mt-10 group card-pagination">
                  <div className="bg-white rounded-2xl shadow-md w-full flex flex-col">
                    <div className="p-4">
                      <div className="relative rounded-2xl overflow-hidden">
                        <Swiper
                          modules={[Pagination]}
                          pagination={{ clickable: true }}
                          className="w-full h-full listing-slider"
                        >
                          {item.carousel_thumb.map((imgItem, index) => (
                            <SwiperSlide key={index}>
                              <Link href="/listing_details_01">
                                <Image
                                  src={imgItem.img}
                                  alt={`Listing Image ${index + 1}`}
                                  className="w-full h-auto object-cover"
                                />
                              </Link>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-2">
                      <Link
                        href="/listing_details_01"
                        className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-all duration-300"
                      >
                        {item.title}
                      </Link>
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
