"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const foodImages = [
  {
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    title: "Delicious Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    title: "Italian Pizza",
  },
  {
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    title: "Grilled Steak",
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    title: "Fresh Pasta",
  },
];

export default function Slider() {
  return (
    <div className="w-full max-w-7xl px-4 mt-10 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}

        loop
        className="rounded-2xl overflow-hidden"
      >
        {foodImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-60 md:h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="bg-linear-to-r text-transparent bg-clip-text from-orange-500 to-red-600 text-3xl md:text-5xl font-bold tracking-wide">
                  {item.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
