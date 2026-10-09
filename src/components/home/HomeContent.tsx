"use client";

import Link from "next/link";
import Image from "next/image";
import { vehicles } from "@/data/vehicles";
import { ChevronRight } from "lucide-react";

export default function HomeContent() {
  return (
    <div className="bg-white">
      {/* Intro text */}
      <section className="max-w-[1200px] mx-auto px-4 py-24 text-center">
        <p className="text-slate-900 text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
          At Kosmo Tata, we believe progress is about going beyond what's expected and making what once seemed distant, possible. For generations, Tata Motors has pushed boundaries through engineering, technology and human ingenuity, creating cars that move with the changing aspirations of India. From everyday journeys to ambitions that take us further, every Tata car is built to expand what's possible. Because wherever you want to go, Nothing's Too Far.
        </p>
      </section>

      {/* Meet our cars */}
      <section className="max-w-[1400px] mx-auto px-4 py-12 text-center border-t border-gray-100">
        <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">THE TATA CARS</p>
        <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 mb-16">Meet our cars</h2>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar gap-8 md:gap-12 justify-start lg:justify-center items-end">
          {vehicles.map((vehicle) => (
            <div key={vehicle.slug} className="snap-center shrink-0 w-[280px] md:w-[320px] flex flex-col items-center group">
              <Link href={`/models/${vehicle.slug}`} className="block relative w-full h-[180px] mb-8">
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <h3 className="text-2xl text-slate-900 mb-2">{vehicle.name}</h3>
              <Link 
                href={`/models/${vehicle.slug}`}
                className="flex items-center gap-1 text-[#2437F3] font-medium hover:underline"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* Remove previous specific components and use only what matches tata.cars layout */}
    </div>
  );
}
