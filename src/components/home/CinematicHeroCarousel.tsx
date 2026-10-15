"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: "aeris",
    name: "A E R I S",
    tagline: "DEFEAT BORING",
    image: "/assets/images/cars/aeris-i-petrol-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif",
  },
  {
    id: "sierra",
    name: "S I E R R A",
    tagline: "Powered Tailgate with Gesture Control",
    image: "/assets/images/cars/sierra-horses_$B-1228-488-D$_fit_crop_fmt_avif-alpha.avif",
  },
  {
    id: "harrier",
    name: "H A R R I E R",
    tagline: "Above All.",
    image: "/assets/images/cars/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif",
  },
];

export default function CinematicHeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    /* Fits the viewport completely by subtracting the sticky header height (64px mobile, 72px desktop) */
    <div className="relative w-full h-[calc(100vh-64px)] md:h-[calc(100vh-72px)] h-[calc(100dvh-64px)] md:h-[calc(100dvh-72px)] min-h-[460px] bg-[#000] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-10" />
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
          />

          {/* Content Overlay — sized and padded to stay strictly inside viewport */}
          <div className="absolute inset-0 z-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-end pb-12 sm:pb-14 md:pb-16 lg:pb-20">
            <div className="max-w-xl text-white">
              <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-[0.08em] sm:tracking-[0.1em] mb-1.5 sm:mb-2 drop-shadow-lg leading-tight whitespace-nowrap">
                {slide.name}
              </h1>
              <p className="text-sm sm:text-lg md:text-2xl font-light tracking-wide mb-4 sm:mb-6 drop-shadow-md line-clamp-2">
                {slide.tagline}
              </p>

              {/* Buttons — stacked on xs, side-by-side on sm+ */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-md">
                <Link
                  href={`/book-test-drive?model=${slide.id}`}
                  className="flex-1 text-center py-2.5 sm:py-3.5 md:py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base rounded-sm shadow-md"
                >
                  Book Test Drive
                </Link>
                <Link
                  href={`/models/${slide.id}`}
                  className="flex-1 text-center py-2.5 sm:py-3.5 md:py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors text-xs sm:text-sm md:text-base rounded-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous Slide Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        type="button"
        className="absolute left-2.5 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Slide Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        type="button"
        className="absolute right-2.5 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-0 right-0 z-30 flex justify-center gap-2.5 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === current ? "w-8 sm:w-10 bg-white" : "w-3 sm:w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
