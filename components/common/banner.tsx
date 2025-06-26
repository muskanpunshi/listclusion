"use client";

import Image from "next/image";
import BannerImage from "@public/template/shape/ils_07.svg";
import Breadcrumb from "@components/common/breadCrumb";
import Heading from "@components/heading";
import Container from "@components/container";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}

const Banner = ({ title, breadcrumbs }: BannerProps) => {
  return (
    <div className="relative bg-pink-50 text-center h-[70svh] mb-10 ">
      {/* Banner Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Container className="h-full flex flex-col items-center justify-center">
          <Heading isHeadingH1={true} className="mb-4">
            {title}
          </Heading>
          {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
        </Container>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src={BannerImage}
          alt="Banner Illustration"
          className="w-full h-auto object-contain object-center border-b border-black"
        />
      </div>
    </div>
  );
};

export default Banner;
