"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import BG1 from "@/assets/slider-1-bg.png";
import DawnIcon from "@/assets/dawn-icon.png";

import "swiper/css";

export default function HomeSlider() {
  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide className="w-full px-16 pt-16 pb-8 rounded-3xl overflow-hidden">
        <div className="w-full h-full pt-48">
          <div className="bg-gradient-to-b from-black/0 to-black/80 absolute top-0 left-0 right-0 bottom-0 -z-[5]"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 ">
            <Image src={BG1} alt="Slider 1" className="w-full object-cover " />
          </div>
          <div className="flex gap-3 items-center min-w-80 mb-6">
            <Image
              src={DawnIcon}
              alt={`slider background`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="uppercase text-sm text-white font-semibold">DAWN</p>
          </div>
          <p className="text-white text-2xl font-semibold mb-4">
            T-Bills attract $175m foreign investment in july
          </p>
          <p className="text-white text-base max-w-2xl">
            Manage your investments with confidence using our seamless platform.
            Stay informed with personalized market updates,
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
