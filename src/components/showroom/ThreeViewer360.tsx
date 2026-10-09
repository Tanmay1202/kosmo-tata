"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface ThreeViewer360Props {
  fallbackImage: string;
  rotationArray?: string[]; // Array of 36 images
  hasDayNight?: boolean;
}

export default function ThreeViewer360({ fallbackImage, rotationArray, hasDayNight }: ThreeViewer360Props) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number, frame: number } | null>(null);
  
  const images = rotationArray && rotationArray.length > 0 ? rotationArray : [fallbackImage];
  const maxFrames = images.length;
  const showDayNight = maxFrames <= 1 && hasDayNight;

  // Preload images
  useEffect(() => {
    if (maxFrames > 1) {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, [images, maxFrames]);

  // Auto-rotate if not interacted
  useEffect(() => {
    if (hasInteracted || maxFrames <= 1) return;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % maxFrames);
    }, 150); // Rotate speed
    return () => clearInterval(interval);
  }, [hasInteracted, maxFrames]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (maxFrames <= 1) return;
    setIsDragging(true);
    setHasInteracted(true);
    dragStartRef.current = { x: e.clientX, frame: currentFrame };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !dragStartRef.current || maxFrames <= 1) return;
    
    const dx = e.clientX - dragStartRef.current.x;
    const sensitivity = 15; // 15 pixels of drag = 1 frame
    
    const framesToAdvance = Math.floor(dx / sensitivity);
    
    if (framesToAdvance !== 0) {
      // Invert direction for natural drag feel
      let next = dragStartRef.current.frame - framesToAdvance;
      // Handle wrapping cleanly
      next = ((next % maxFrames) + maxFrames) % maxFrames;
      setCurrentFrame(next);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (maxFrames <= 1) return;
    setIsDragging(false);
    dragStartRef.current = null;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none transition-colors duration-1000 ${nightMode ? 'bg-slate-900' : 'bg-transparent'}`}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onDragStart={(e) => e.preventDefault()}
      style={{ touchAction: 'none', WebkitUserSelect: 'none', userSelect: 'none', cursor: maxFrames > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
    >
      {nightMode && (
         <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-overlay z-0" />
      )}
      
      <div className="relative w-full h-[80%] pointer-events-none z-10">
        <Image 
          src={images[currentFrame]} 
          alt={`360 View Frame ${currentFrame}`}
          fill 
          priority
          draggable={false}
          className={`object-contain drop-shadow-2xl transition-all duration-1000 pointer-events-none select-none`} 
          style={{ 
             filter: nightMode ? `drop-shadow(0 20px 30px rgba(255,255,255,0.1)) brightness(0.4) contrast(1.3) sepia(0.3) hue-rotate(-30deg)` : `drop-shadow(0 20px 30px rgba(0,0,0,0.5))`,
          }}
          onDragStart={(e) => e.preventDefault()}
        />
        
        {/* Fake headlights glow when night mode is on */}
        <AnimatePresence>
          {nightMode && showDayNight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="absolute left-[15%] top-[45%] w-32 h-32 bg-white/40 blur-3xl rounded-full" />
              <div className="absolute right-[15%] top-[45%] w-32 h-32 bg-white/40 blur-3xl rounded-full" />
              {/* Beams */}
              <div className="absolute left-[10%] top-[45%] w-64 h-32 bg-yellow-100/10 blur-2xl rounded-full -rotate-12 transform -translate-x-1/2 origin-right" style={{ clipPath: 'polygon(0 0, 100% 40%, 100% 60%, 0 100%)' }} />
              <div className="absolute right-[10%] top-[45%] w-64 h-32 bg-yellow-100/10 blur-2xl rounded-full rotate-12 transform translate-x-1/2 origin-left" style={{ clipPath: 'polygon(100% 0, 0 40%, 0 60%, 100% 100%)' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Drag Cue Overlay */}
      <AnimatePresence>
        {!hasInteracted && maxFrames > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-20"
          >
            <div className="bg-white px-6 py-3 rounded-full flex items-center gap-3 border border-gray-200 shadow-xl">
              <MoveHorizontal className="w-5 h-5 text-slate-900 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-900 font-bold">Drag to rotate 360°</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Day / Night Toggle Slider */}
      {showDayNight && (
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200">
           <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${!nightMode ? 'text-tata-blue' : 'text-slate-400'}`}>Day</span>
           <button 
             onClick={(e) => { e.stopPropagation(); setNightMode(!nightMode); }}
             className={`w-14 h-7 rounded-full transition-colors relative flex items-center px-1 ${nightMode ? 'bg-slate-800' : 'bg-slate-200'}`}
           >
             <motion.div 
               className="w-5 h-5 rounded-full bg-white shadow-sm"
               animate={{ x: nightMode ? 28 : 0 }}
               transition={{ type: "spring", stiffness: 500, damping: 30 }}
             />
           </button>
           <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${nightMode ? 'text-slate-900' : 'text-slate-400'}`}>Night</span>
         </div>
      )}
    </div>
  );
}
