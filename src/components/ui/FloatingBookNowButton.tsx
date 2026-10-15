"use client";

import { useDealership } from "@/context/DealershipContext";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FloatingBookNowButton() {
  const { openModal } = useDealership();
  const pathname = usePathname();
  const isModelDetail = Boolean(pathname?.startsWith("/models/") && pathname !== "/models");

  return (
    <div className={`fixed ${isModelDetail ? "bottom-20 sm:bottom-20" : "bottom-5 sm:bottom-7"} right-4 sm:right-7 z-40 group`}>
      {/* Outer ambient glow ring */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />

      {/* Main floating button */}
      <button
        onClick={() => openModal("book-now")}
        type="button"
        aria-label="Book a Tata Vehicle Now"
        className="relative flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 bg-gradient-to-r from-[#1328E0] to-blue-600 hover:from-blue-600 hover:to-[#1328E0] text-white font-bold text-sm sm:text-base rounded-full shadow-[0_8px_25px_rgba(19,40,224,0.5)] border border-white/25 hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation focus:outline-none focus:ring-4 focus:ring-blue-400/50"
      >
        {/* Pulsing live availability dot */}
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-400 shadow-xs" />
        </span>

        {/* Button Label */}
        <span className="tracking-wide uppercase text-xs sm:text-sm font-extrabold whitespace-nowrap drop-shadow-sm">
          Book Now
        </span>

        {/* Animated Sparkle Icon */}
        <Sparkles className="w-4 h-4 text-amber-300 animate-[spin_4s_linear_infinite]" />
      </button>
    </div>
  );
}
