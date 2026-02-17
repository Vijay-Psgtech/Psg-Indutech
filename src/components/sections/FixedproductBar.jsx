import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { productsData } from "../data/ProductsData";

const FixedProductBar = () => {
  return (
    <div
      className="fixed top-[70px] left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-white/40 shadow-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={1000}
          className="w-full"
          breakpoints={{
            480: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 24 },
            1024: { slidesPerView: 6, spaceBetween: 30 },
            1280: { slidesPerView: 7, spaceBetween: 30 },
          }}
        >
          {productsData.map((prod, i) => (
            <SwiperSlide key={i} className="py-2">
              <div className="group flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-transparent">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2 flex items-center justify-center bg-slate-50 rounded-lg p-2 group-hover:bg-indigo-50 transition-colors duration-300">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-center text-slate-600 group-hover:text-indigo-700 transition-colors duration-300 line-clamp-2 leading-tight px-1">
                  {prod.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* View all products cta*/}
      <a href="/products" target="_blank" className="absolute right-4 bottom-2 sm:bottom-4 z-50 text-indigo-900 font-semibold text-sm hover:underline">
        View All Products
      </a>
    </div>
  );
};

export default FixedProductBar;

