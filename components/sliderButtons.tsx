import { PiTagChevronFill } from "react-icons/pi";
import React, { useEffect, useState } from "react";
import { Swiper as SwiperRef } from "swiper";

const SliderButtons = ({
  swiperRef,
  slideIndex,
  lastSlide,
  classes,
  sliderLength,
}: {
  swiperRef: { current: { swiper: SwiperRef } };
  slideIndex: number;
  lastSlide: boolean;
  classes: string;
  sliderLength?: number;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentBreakPoint =
      swiperRef?.current?.swiper?.currentBreakpoint || 1;
    const slidesPerView: number =
      (swiperRef?.current?.swiper?.originalParams?.breakpoints?.[
        currentBreakPoint
      ]?.slidesPerView as number) || 1;
    setIsVisible((sliderLength as number) > slidesPerView);
  }, [swiperRef]);

  if (!isVisible) return <></>;
  return (
    <div className={classes}>
      <div className="flex">
        <button
          onClick={() => {
            swiperRef?.current?.swiper?.slidePrev();
          }}
          className={`group relative flex justify-center items-center border-[2px] border-black hover:border-primary rounded-full  mr-3 max-sm:mr-2 cursor-pointer w-10 h-10 max-sm:w-9 max-sm:h-9 transition-all duration-300 ease-in-out hover:scale-110 `}
        >
          <PiTagChevronFill
            className={`group-hover:text-primary rotate-180 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary-color font-[20px] w-[18px]  h-[18px] transition-all duration-300 ease-in-out `}
          />
        </button>
        <button
          onClick={() => {
            swiperRef?.current?.swiper?.slideNext();
          }}
          className={` group relative flex justify-center items-center border-[2px] border-black hover:border-primary rounded-full cursor-pointer w-10 h-10 max-sm:w-9 max-sm:h-9  transition-all duration-300 ease-in-out hover:scale-110 `}
        >
          <PiTagChevronFill
            className={` group-hover:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary-color font-[20px] w-[18px]  h-[18px] transition-all duration-300 ease-in-out `}
          />
        </button>
      </div>
    </div>
  );
};

export default SliderButtons;
