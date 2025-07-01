"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { feature_data } from "@utils/data";
import Link from "next/link";
import Image from "next/image";
import titleShape from "@public/template/shape/title_shape_03.svg";
import Container from "./container";
import SliderButtons from "./sliderButtons";
import { useMemo, useRef, useState } from "react";
import SearchSelectInput from "./ui/searchSelect";
import Heading from "./common/heading";

const BLockFeatureTwo = ({ style }: any) => {
  const filteredData = useMemo(() => {
    const mainData = feature_data.filter(
      (item) => item.page === "home_5_feature_1"
    );

    const flattened = mainData.flatMap((item: any) => {
      if (item.children && Array.isArray(item.children)) {
        return item.children.map((child) => ({
          ...child,
          parentTitle: item.title, // Optional if you want to show parent label
        }));
      }
      return item;
    });

    return flattened;
  }, []);
  const swiperRef = useRef<any>({}) as any;
  const [slideIndex, setSlideIndex] = useState(0);
  const [lastSlide, setLastSlide] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const handleSlideChange = (params: any) => {
    setSlideIndex(params.activeIndex);
    if (swiperRef?.current?.swiper?.isEnd) {
      setLastSlide(true);
    } else {
      setLastSlide(false);
    }
  };
  // Create dropdown items from data
  const dropdownItems = useMemo(() => {
    return filteredData.map((item) => ({
      value: item.title,
      label: item.title,
    }));
  }, [filteredData]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);

    const index = filteredData.findIndex((item) => item.title === value);

    // Slide to exact index (offset for looped swipers if needed)
    if (index !== -1 && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index); // slideToLoop handles looping properly
    }
  };
  return (
    <div className={`lg:mt-[170px] mt-[80px]  xl:mt-[120px]`}>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-between max-md:flex-col  text-center mb-12 lg:text-left animate-fadeInUp">
            <Heading className=" pb-5">
              Most&nbsp;
              <span className="relative inline-block">
                Popular
                <Image
                  src={titleShape}
                  alt=""
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              </span>
            </Heading>
            <div className="flex md:w-[40%] w-full  items-center gap-x-5">
              <SearchSelectInput
                value={selectedCategory}
                onChange={handleCategoryChange}
                placeHolder="Please Select A Category"
                items={dropdownItems}
              />
              <SliderButtons
                classes="flex gap-x-3 mb-0 justify-end max-md:justify-center"
                lastSlide={lastSlide}
                slideIndex={slideIndex}
                swiperRef={swiperRef}
                sliderLength={filteredData.length}
              />
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={handleSlideChange}
            speed={800}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className=" !pb-12"
          >
            {filteredData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="text-center animate-fadeInUp"
                  data-wow-delay={item.data_delay_time}
                >
                  <div
                    className={`relative z-10 rounded-full overflow-hidden mb-6 w-[270px] h-[270px] mx-auto ${item.item_bg}`}
                  >
                    <Link
                      href="/listing_04"
                      className="w-full h-full inset-0 z-20"
                    >
                      <Image
                        className="w-full h-full object-cover "
                        src={item.image}
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link
                    href="/listing_04"
                    className="no-underline text-black hover:text-orange-500 transition"
                  >
                    <h5 className="text-[24px] text-[#000000b3] font-medium">
                      {item.title}
                    </h5>
                  </Link>
                  {item.parentTitle && (
                    <p className="text-sm text-gray-400 italic">
                      Supplier Category
                    </p>
                  )}
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Explore Button */}
        </div>
      </Container>
    </div>
  );
};

export default BLockFeatureTwo;
