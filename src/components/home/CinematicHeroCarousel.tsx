"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SlideData {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: "aeris",
    name: "A E R I S",
    tagline: "DEFEAT BORING",
    price: "5.29",
    image: "/assets/images/cars/aeris-i-petrol-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif",
  },
  {
    id: "sierra",
    name: "S I E R R A",
    tagline: "Powered Tailgate with Gesture Control",
    price: "13.99",
    image: "/assets/images/cars/sierrakv-14-1_$TT-614-400-D$_fit_crop_fmt_avif-alpha.avif",
  },
  {
    id: "harrier",
    name: "H A R R I E R",
    tagline: "Above All.",
    price: "15.49",
    image: "/assets/images/cars/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif",
  }
];

export default function CinematicHeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-screen bg-[#000] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Main Background Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-[0.1em] mb-2 drop-shadow-lg">
                {slide.name}
              </h2>
              <p className="text-xl md:text-3xl font-light tracking-wide mb-6 drop-shadow-md">
                {slide.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Link 
                  href={`/book-test-drive?model=${slide.id}`}
                  className="flex-1 text-center py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
                >
                  Book Test Drive
                </Link>
                <Link 
                  href={`/models/${slide.id}`}
                  className="flex-1 text-center py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors"
                >
                  Explore {slide.name}
                </Link>
              </div>
            </div>
            
            <div className="absolute bottom-12 right-4 md:right-8 text-right hidden sm:block">
               <p className="text-white/80 text-sm uppercase tracking-widest mb-1">Price starts at</p>
               <p className="text-white text-2xl font-bold">₹{slide.price} Lakh*</p>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === current ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
