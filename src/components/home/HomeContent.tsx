"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { vehicles } from "@/data/vehicles";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function HomeContent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // 5px threshold to account for subpixel rounding differences across browsers
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLDivElement>(".car-slider-card");
    const cardWidth = firstCard ? firstCard.offsetWidth : 300;
    // Scroll by roughly 2 cards at a time
    const scrollAmount = (cardWidth + 24) * 2;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white">
      {/* Intro text */}
      <section className="max-w-[1200px] mx-auto px-4 py-16 md:py-24 text-center">
        <p className="text-slate-900 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
          At Kosmo Tata, we believe progress is about going beyond what&apos;s expected and making what once seemed distant, possible. For generations, Tata Motors has pushed boundaries through engineering, technology and human ingenuity, creating cars that move with the changing aspirations of India. From everyday journeys to ambitions that take us further, every Tata car is built to expand what&apos;s possible. Because wherever you want to go, Nothing&apos;s Too Far.
        </p>
      </section>

      {/* Meet our cars */}
      <section className="max-w-[1400px] mx-auto px-4 py-10 md:py-16 text-center border-t border-gray-100">
        <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">THE TATA CARS</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-slate-900 mb-10 md:mb-16">Meet our cars</h2>

        {/* Slider with arrows on either side */}
        <div className="relative group/slider px-0 sm:px-6">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute left-0 sm:left-1 top-[35%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none touch-manipulation`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </button>

          {/* Horizontal scroll carousel — strictly justify-start so items on the left are never clipped */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-6 hide-scrollbar gap-6 md:gap-12 justify-start items-end px-4 scroll-smooth"
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.slug}
                className="car-slider-card snap-center shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] flex flex-col items-center group"
              >
                <Link href={`/models/${vehicle.slug}`} className="block relative w-full h-[140px] sm:h-[160px] md:h-[180px] mb-4 md:mb-8">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 320px"
                  />
                </Link>
                <h3 className="text-lg md:text-2xl text-slate-900 mb-2">{vehicle.name}</h3>
                <Link
                  href={`/models/${vehicle.slug}`}
                  className="flex items-center gap-1 text-[#2437F3] font-medium hover:underline text-sm md:text-base"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute right-0 sm:right-1 top-[35%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none touch-manipulation`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </button>
        </div>
      </section>
    </div>
  );
}
