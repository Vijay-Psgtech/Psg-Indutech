import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const slides = [
  {
    img: "/banner1.jpg",
    title: "Innovation in Industrial Textiles",
    desc: "Driving excellence through research and technology",
  },
  {
    img: "/banner2.jpg",
    title: "Advanced Testing Facilities",
    desc: "State-of-the-art equipment for material testing and analysis",
  },
  {
    img: "/banner3.jpg",
    title: "Empowering the Textile Industry",
    desc: "Training, workshops, and industrial collaboration programs",
  },
];

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="mt-[72px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slide.title}
              </motion.h2>
              <motion.p
                className="max-w-2xl text-sm md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slide.desc}
              </motion.p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
