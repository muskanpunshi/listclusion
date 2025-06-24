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
import Button from "./Button";
import { FaArrowUpLong } from "react-icons/fa6";
import SliderButtons from "./sliderButtons";
import { useRef, useState } from "react";

const BLockFeatureTwo = ({ style }: any) => {
  const filteredData = feature_data.filter(
    (items) => items.page === "home_5_feature_1"
  );
  const swiperRef = useRef<any>({}) as any;
  const [slideIndex, setSlideIndex] = useState(0);
  const [lastSlide, setLastSlide] = useState<boolean>(false);

  const handleSlideChange = (params: any) => {
    setSlideIndex(params.activeIndex);
    if (swiperRef?.current?.swiper?.isEnd) {
      setLastSlide(true);
    } else {
      setLastSlide(false);
    }
  };

  return (
    <div className={`mt-[170px] xl:mt-[120px]`}>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-between text-center lg:text-left mb-10 xl:mb-8 lg:mb-5 animate-fadeInUp">
            <h3 className="text-[64px] font-[500] text-[#000000b3] pb-5">
              Most&nbsp;
              <span className="relative inline-block">
                Popular
                <Image
                  src={titleShape}
                  alt=""
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              </span>
            </h3>
            <div className="flex items-center gap-x-5">
              <Button
                className="hover:bg-primary px-8 py-4 rounded-none max-sm:mt-0 bg-black text-white"
                href="#"
              >
                Explore All <FaArrowUpLong className="rotate-45" />
              </Button>
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
