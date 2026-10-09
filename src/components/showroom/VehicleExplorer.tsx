"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThreeViewer360 from "./ThreeViewer360";
import ColorVariantSelector, { ColorOption } from "./ColorVariantSelector";
import { vehicles } from "@/data/vehicles";
import ShowroomStockWidget from "@/components/conversion/ShowroomStockWidget";


const TATA_COLORS: ColorOption[] = [
  { id: "pristine-white", name: "Pristine White", hex: "#F4F4F4" },
  { id: "daytona-grey", name: "Daytona Grey", hex: "#4A4D54" },
  { id: "oberon-black", name: "Oberon #DARK", hex: "#111111" },
  { id: "flame-red", name: "Flame Red", hex: "#B71C1C" },
  { id: "empowered-oxide", name: "Empowered Oxide", hex: "#8D948D" },
];

const SHOWROOM_MODELS = vehicles.map(v => v.slug);

export default function VehicleExplorer() {
  const [activeModelId, setActiveModelId] = useState("curvv");
  const [activeColorId, setActiveColorId] = useState("pristine-white");

  const activeVehicle = vehicles.find((v) => v.slug === activeModelId) || vehicles[0];
  
  useEffect(() => {
    if (activeVehicle.colors && activeVehicle.colors.length > 0) {
      setActiveColorId(activeVehicle.colors[0].name.toLowerCase().replace(/\s+/g, '-'));
    }
  }, [activeVehicle]);

  const activeColorObj = activeVehicle.colors.find((c) => c.name.toLowerCase().replace(/\s+/g, '-') === activeColorId) || activeVehicle.colors[0];
  const activeColorHex = activeColorObj?.hex || "#F4F4F4";

  const specs = {
    engine: activeVehicle.engineSpecs.engineOrBattery,
    power: activeVehicle.engineSpecs.power,
    acc: activeVehicle.engineSpecs.groundClearance, // Repurposed for ground clearance temporarily, or we could change label
    mileage: activeVehicle.engineSpecs.bootCapacity, // Repurposed for boot capacity
  };

  

  return (
    <section id="showroom-360" className="relative w-full min-h-[90vh] bg-gray-50 py-24 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header & Tabs */}
        <div className="text-center mb-12 w-full">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 uppercase tracking-widest mb-10 drop-shadow-lg">
            Interactive <span className="text-tata-blue">360°</span> Showroom
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-white rounded-full max-w-fit mx-auto border border-gray-200 shadow-md">
            {SHOWROOM_MODELS.map((modelId) => {
              const v = vehicles.find((x) => x.slug === modelId);
              if (!v) return null;
              const isActive = activeModelId === modelId;
              
              return (
                <button
                  key={modelId}
                  onClick={() => setActiveModelId(modelId)}
                  className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-tata-blue rounded-full shadow-[0_0_20px_rgba(0,82,204,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{v.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 360 Viewer Canvas Area */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mb-12 rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          {/* We use a unique key to force remount the canvas and re-run entrance animations when the model changes */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeModelId}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <ThreeViewer360 
                colorHex={activeColorHex} 
                fallbackImage={activeVehicle.image} 
                rotationArray={activeColorObj?.rotationArray || []}
                hasDayNight={activeColorObj?.hasDayNight || false}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Specs Banner Overlay */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto flex flex-col items-center gap-3 z-10 pointer-events-none">
            <ShowroomStockWidget variant="badge" statusText={activeVehicle.availability} />
            <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl flex flex-wrap justify-center gap-6 md:gap-12 shadow-lg border border-gray-100 pointer-events-auto">
              {[
                { label: "Engine / Battery", val: specs.engine },
                { label: "Max Power", val: specs.power },
                { label: "Ground Clearance", val: specs.acc },
                { label: "Boot Capacity", val: specs.mileage },
              ].map((spec, i) => (
                <div key={i} className="text-center">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">{spec.label}</p>
                  <p className="text-slate-900 font-display font-bold tracking-wide whitespace-nowrap">{spec.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color Configurator */}
        <ColorVariantSelector 
          colors={activeVehicle.colors.map(c => ({ id: c.name.toLowerCase().replace(/\s+/g, '-'), name: c.name, hex: c.hex }))} 
          selectedColor={activeColorId} 
          onSelect={setActiveColorId} 
        />

        <div className="mt-8 mb-16">
          <Link 
            href={`/models/${activeModelId}`}
            className="px-8 py-4 bg-tata-blue text-white rounded-full uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(0,82,204,0.4)] hover:bg-blue-600 transition flex items-center gap-2"
          >
            Explore {activeVehicle.name} in Detail
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        
        
      </div>
    </section>
  );
}

