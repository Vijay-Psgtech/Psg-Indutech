import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { productsData } from "../data/ProductsData";

const FixedProductBar = () => {
  return (
    <div
      className={`fixed top-[72px] left-0 right-0 z-40 bg-white backdrop-blur-md border-b border-slate-100 shadow-sm`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000}
          freeMode={true}
          className="overflow-hidden"
          breakpoints={{
            480: { slidesPerView: 3.5 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {productsData.map((prod, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center justify-center group">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  loading="lazy"
                />
                <p className="mt-1 text-xs sm:text-sm font-black font-bold text-center group-hover:text-slate-800 transition-colors duration-300">
                  {prod.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FixedProductBar;
