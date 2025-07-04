"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const DetailCategoryCard = ({ data }: { data: any }) => {
  return (
    <div className="flex lg:my-6 my-3 group card-pagination">
      <div className="bg-white rounded-md shadow-md w-full flex flex-col">
        <div className="p-4">
          <div className="relative rounded-md overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={true}
              loop={true}
              speed={1000}
              className="w-full h-full listing-slider"
            >
              {data.listing_thumb?.map((imgItem: any, index: number) => (
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

        <div className="px-6 pt-3 pb-6  flex flex-col gap-2">
          {/* <Link
            href="/listing_details_01"
            className="text-xl font-medium  text-[#000000b3] group-hover:text-primary transition-all duration-300"
          >
            {data.name}
          </Link> */}
          <span className="text-xl font-medium cursor-pointer text-[#000000b3] group-hover:text-primary transition-all duration-300">
            {data.name}
          </span>
          {/* <div className="text-sm text-gray-500">{data.tel}</div>
          <div className="text-sm text-gray-500">{data.email}</div>
          <div className="text-sm text-gray-500">{data.address}</div>
          <div className="text-sm text-gray-500">{data.workingHours}</div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailCategoryCard;
