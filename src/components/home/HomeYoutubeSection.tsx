"use client";

import Image from "next/image";

export default function HomeYoutubeSection() {
  return (
    <section className="w-full relative aspect-[21/9] max-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/_external/s7ap1.scene7.com/is/image/tatamotors/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha"
          alt="Tata Factory Worker"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end w-full">
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-sm transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-sm transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </button>
          </div>
          
          <a href="https://youtube.com/@tata.cars.official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white px-6 py-3 rounded-full backdrop-blur-sm transition">
            <span className="font-medium text-sm">Watch on</span>
            <svg viewBox="0 0 24 24" width="80" height="24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
