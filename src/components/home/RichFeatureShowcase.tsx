"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const features = [
  {
    id: "adas",
    title: "Advanced Driver Assistance",
    desc: "Level 2 ADAS with 10+ intelligent features including Adaptive Cruise Control and Auto Emergency Braking.",
    img: "/assets/_external/s7ap1.scene7.com/is/image/tatamotors/electronic-stability-program-esp-1_$IMG-474-248-D$_fit_crop_fmt_avif-alpha",
    colSpan: "col-span-1 md:col-span-2",
    hotspots: [
      { x: 35, y: 45, label: "Radar Sensor" },
      { x: 65, y: 35, label: "Stereo Camera" }
    ]
  },
  {
    id: "camera",
    title: "360° SVS Camera",
    desc: "High-definition surround view system with blind spot monitoring.",
    img: "/assets/_external/s7ap1.scene7.com/is/image/tatamotors/360-svs-hd-camera-with-multiple-3d-2d-views_$IMG-474-248-D$_fit_crop_fmt_avif-alpha",
    colSpan: "col-span-1",
    hotspots: [
      { x: 50, y: 60, label: "HD Wide Camera" }
    ]
  },
  {
    id: "interior",
    title: "Aero-Lux Ventilated Seats",
    desc: "Premium leatherette seating with multi-zone temperature control.",
    img: "/assets/_external/s7ap1.scene7.com/is/image/tatamotors/premium-ventilated-leatherette-seats-1_$IMG-474-248-D$_fit_crop_fmt_avif-alpha",
    colSpan: "col-span-1",
    hotspots: [
      { x: 45, y: 55, label: "Perforated Leatherette" },
      { x: 75, y: 40, label: "Ventilation Controls" }
    ]
  },
  {
    id: "connected",
    title: "iRA Connected Tech",
    desc: "Next-gen telematics with remote commands and smartwatch integration.",
    img: "/assets/_external/s7ap1.scene7.com/is/image/tatamotors/connected-vehicle-technology-with-ira_$IMG-474-248-D$_fit_crop_fmt_avif-alpha",
    colSpan: "col-span-1 md:col-span-2",
    hotspots: [
      { x: 55, y: 35, label: "10.25\" Touchscreen" },
      { x: 30, y: 65, label: "Digital Cluster" }
    ]
  },
];

export default function RichFeatureShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="relative w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-widest mb-4"
          >
            Engineering <span className="text-tata-blue">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 font-sans max-w-2xl mx-auto text-sm md:text-base tracking-wide"
          >
            Discover the state-of-the-art technology and uncompromising safety that define the new era of Tata Motors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm border border-gray-200 p-6 flex flex-col justify-end min-h-[300px] md:min-h-[400px] ${feature.colSpan}`}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Hotspots */}
              {feature.hotspots?.map((hotspot, idx) => {
                const hotspotId = `${feature.id}-hotspot-${idx}`;
                const isActive = activeHotspot === hotspotId;
                
                return (
                  <div 
                    key={idx}
                    className="absolute z-20 cursor-pointer flex items-center justify-center group/hotspot"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
                    onClick={() => setActiveHotspot(isActive ? null : hotspotId)}
                    onMouseEnter={() => setActiveHotspot(hotspotId)}
                  >
                    {/* Pulsating background */}
                    <div className="absolute inset-0 bg-tata-blue/40 rounded-full animate-ping" style={{ width: '2rem', height: '2rem' }} />
                    
                    {/* Dot */}
                    <div className="relative w-8 h-8 rounded-full bg-tata-blue flex items-center justify-center border-2 border-white shadow-[0_0_15px_rgba(0,82,204,0.6)] z-10 transition-transform duration-300 hover:scale-110">
                      <Plus className={`w-4 h-4 text-slate-900 transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`} />
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-2xl pointer-events-none"
                        >
                          {hotspot.label}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              
              <div className="relative z-10 pointer-events-none mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-wide font-display uppercase">{feature.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed max-w-md">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
