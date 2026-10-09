"use client";

import { motion } from "framer-motion";

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

interface ColorVariantSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onSelect: (colorId: string) => void;
}

export default function ColorVariantSelector({ colors, selectedColor, onSelect }: ColorVariantSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-slate-600 font-medium">
        Paint Finish: <span className="text-slate-900 font-bold">{colors.find(c => c.id === selectedColor)?.name}</span>
      </p>
      
      <div className="flex items-center gap-4 bg-white-light/60 backdrop-blur-xl px-4 py-3 rounded-full border border-gray-200 shadow-2xl">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color.id)}
            className="relative flex items-center justify-center rounded-full transition-transform hover:scale-110 focus:outline-none"
            aria-label={`Select ${color.name}`}
          >
            {selectedColor === color.id && (
              <motion.div
                layoutId="color-ring"
                className="absolute inset-[-6px] rounded-full border-2 border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
            <div
              className="w-10 h-10 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-gray-200"
              style={{ backgroundColor: color.hex }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
