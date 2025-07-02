"use client";

import Image, { StaticImageData } from "next/image";
import BannerImage from "@public/template/shape/ils_07.svg";
import Breadcrumb from "@components/common/breadCrumb";
import Heading from "@components/common/heading";
import Container from "@components/container";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BannerProps {
  title: string;
  image?: StaticImageData;
}

const Banner = ({ title, image }: BannerProps) => {
  return (
    <div className="relative text-center h-[80svh]">
      {/* Image - base layer */}
      <Image
        src={image ?? BannerImage}
        alt="Banner Illustration"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 z-10 bg-white opacity-50"></div>

      {/* Text - top layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <Container>
          <Heading isHeadingH1={true} className="mb-4 text-shadow-lg">
            {title}
          </Heading>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
