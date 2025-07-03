"use client";
import React from "react";
import DetailCategoryCard from "./detailCard";

const InnerCategoryDetail = ({ data }: { data: any }) => {
  return (
    <div className=" mx-auto md:px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-6 ">
        {data?.child?.map((item: any, index: number) => (
          <DetailCategoryCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default InnerCategoryDetail;
