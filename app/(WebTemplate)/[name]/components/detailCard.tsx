'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


const DetailCategoryCard = ({ data }: { data: any }) => {
  return (
    <div className="flex mt-10 group card-pagination">
      <div className="bg-white rounded-2xl shadow-md w-full flex flex-col">
        <div className="p-4">
          <div className="relative rounded-2xl overflow-hidden">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="w-full h-full listing-slider"
            >
              {data.carousel_thumb?.map((imgItem:any, index:number) => (
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
            className="text-2xl font-medium  text-[#000000b3] group-hover:text-primary transition-all duration-300"
          >
            {data.name}
          </Link>
          <div className="text-sm text-gray-500">{data.phone}</div>
          <div className="text-sm text-gray-500">{data.email}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailCategoryCard;
