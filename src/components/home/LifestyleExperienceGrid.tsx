"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lifestyleImages = [
  {
    src: "/assets/images/lifestyle/harrier-product-lifestyle-resized.jpg",
    alt: "Harrier Lifestyle",
    span: "col-span-12 md:col-span-8 row-span-2",
    title: "Born of Pedigree",
    subtitle: "The All-New Harrier"
  },
  {
    src: "/assets/images/lifestyle/new-punch-lifestyle-first.png",
    alt: "Punch Lifestyle",
    span: "col-span-12 md:col-span-4 row-span-1",
    title: "Vibes with You",
    subtitle: "Tata Punch"
  },
  {
    src: "/assets/images/lifestyle/safari-interior-lifestyle-resized-new.jpg",
    alt: "Safari Interior",
    span: "col-span-12 md:col-span-4 row-span-1",
    title: "Reclaim Your Life",
    subtitle: "Premium Safari Interior"
  },
  {
    src: "/assets/images/lifestyle/lifestyle-1.jpg",
    alt: "Curvv Lifestyle",
    span: "col-span-12 md:col-span-6 row-span-1",
    title: "Shape Your Future",
    subtitle: "Tata Curvv"
  },
  {
    src: "/assets/images/lifestyle/terrain-repsonse.jpg",
    alt: "Terrain Response",
    span: "col-span-12 md:col-span-6 row-span-1",
    title: "Conquer Any Terrain",
    subtitle: "Advanced Capabilities"
  }
];

export default function LifestyleExperienceGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-widest mb-4"
          >
            The Tata <span className="text-tata-blue">Lifestyle</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 font-sans max-w-2xl mx-auto text-sm md:text-base tracking-wide"
          >
            Experience the thrill of the open road and the comfort of premium design. Every journey is a story waiting to be told.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {lifestyleImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              className={`relative group overflow-hidden rounded-2xl md:rounded-3xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-tata-blue text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {img.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wider text-slate-900">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
