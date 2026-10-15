"use client";

import { useState, useEffect, useRef } from "react";
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
  const touchStartXRef = useRef<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    // 50px swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    /* Fits viewport cleanly on desktop; compact snug layout on mobile with zero voids */
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[375px] min-[390px]:h-[395px] sm:h-[460px] md:h-[calc(100vh-72px)] md:min-h-[520px] bg-[#000] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col md:block ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Subtle ambient glow behind image on mobile so there are no stark voids */}
          <div className="absolute inset-0 z-0 md:hidden overflow-hidden pointer-events-none">
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover blur-3xl opacity-30 scale-125"
              aria-hidden="true"
            />
          </div>

          {/* Foreground Car Image — natural aspect ratio on mobile so it starts flush at the top with zero voids; full-bleed cover on desktop */}
          <div className="relative w-full aspect-[2/1] sm:aspect-[21/9] md:aspect-auto md:absolute md:inset-0 md:w-full md:h-full z-10 shrink-0">
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              className="object-contain md:object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </div>

          {/* Content Overlay — placed snugly below the car on mobile, anchored to bottom on desktop */}
          <div className="w-full shrink-0 z-20 px-4 pt-1 sm:pt-2 pb-6 text-center md:text-left md:absolute md:inset-0 md:max-w-[1400px] md:mx-auto md:px-8 md:flex md:flex-col md:justify-end md:pb-16 lg:pb-20">
            <div className="max-w-xl mx-auto md:mx-0 text-white">
              <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-[0.08em] sm:tracking-[0.1em] mb-1 drop-shadow-lg leading-tight whitespace-nowrap">
                {slide.name}
              </h1>
              <p className="text-xs min-[380px]:text-sm sm:text-lg md:text-2xl font-light tracking-wide mb-3 sm:mb-6 drop-shadow-md line-clamp-1 sm:line-clamp-2 text-white/90">
                {slide.tagline}
              </p>

              {/* Buttons — side-by-side with responsive text */}
              <div className="flex flex-row gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-md mx-auto md:mx-0">
                <Link
                  href={`/book-test-drive?model=${slide.id}`}
                  className="flex-1 text-center py-2 sm:py-3.5 md:py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base rounded-sm shadow-md"
                >
                  Book Test Drive
                </Link>
                <Link
                  href={`/models/${slide.id}`}
                  className="flex-1 text-center py-2 sm:py-3.5 md:py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors text-xs sm:text-sm md:text-base rounded-sm"
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
        className="absolute left-2 sm:left-4 md:left-6 top-[27%] sm:top-[28%] md:top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white shadow-lg touch-manipulation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Slide Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        type="button"
        className="absolute right-2 sm:right-4 md:right-6 top-[27%] sm:top-[28%] md:top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white shadow-lg touch-manipulation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-5 left-0 right-0 z-30 flex justify-center gap-2 sm:gap-3">
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
