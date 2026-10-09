"use client";

import Image from "next/image";
import Link from "next/link";
import { useDealership } from "@/context/DealershipContext";

export default function HomeTestDriveSection() {
  const { openModal } = useDealership();

  return (
    <section className="w-full flex flex-col md:flex-row bg-[#FAFAFA]">
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
        <Image
          src="/assets/images/cars/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif"
          alt="Test Drive Experience"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-white">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6">Book a Test Drive</h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8">
            We know you'll love our vehicles which is why you can try them now for an hour, a day, or a weekend. When you decide this is the car for you, you can buy it online and it's yours.
          </p>
          <button 
            onClick={() => openModal('test-drive')}
            className="border-b-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest pb-1 hover:text-tata-blue hover:border-tata-blue transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
