"use client";

import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThreeViewer360 from "@/components/showroom/ThreeViewer360";
import DynamicPricingWidget from "@/components/showroom/DynamicPricingWidget";
import { useState, useEffect, use } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const vehicle = vehicles.find((v) => v.slug === resolvedParams.slug);

  if (!vehicle) {
    notFound();
  }

  const [selectedColor, setSelectedColor] = useState(vehicle.colors?.[0]);

  // Hide the global MegaMenuNav on this page so we can use a custom one
  useEffect(() => {
    const globalNav = document.getElementById("global-mega-menu");
    if (globalNav) globalNav.style.display = "none";
    return () => {
      if (globalNav) globalNav.style.display = "block";
    };
  }, []);

  return (
    <div className="bg-[#f5f5f5] min-h-screen relative pb-24">
      {/* Model Specific Navbar replacing the global one */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#1e34d6] text-white h-[72px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-full flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold tracking-[0.15em] uppercase flex-shrink-0">
            Kosmo.Tata
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
            {["Overview", "Features", "Variants", "Specs", "Price"].map((item, i) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`hover:text-white/80 transition-colors ${i === 0 ? "border-b-2 border-white pb-1" : ""}`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-6 flex-shrink-0">
             <div className="hidden sm:block border-r border-white/30 pr-6">
               <Image 
                 src="/assets/images/icons/tata-blue-small-logo.png" 
                 alt="Tata Logo" 
                 width={40} 
                 height={40} 
                 className="brightness-0 invert object-contain" 
               />
             </div>
             <button aria-label="Search" className="hover:text-white/80 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
             </button>
             <button aria-label="Menu" className="hover:text-white/80 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
             </button>
          </div>
        </div>
      </header>

      {/* 360 Configurator - Very Top Section */}
      <section id="overview" className="w-full bg-[#f5f5f5] pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
          
          {/* Viewer */}
          <div className="w-full h-[300px] md:h-[500px] relative mb-8">
             <ThreeViewer360 
               colorHex={selectedColor?.hex || "#FFFFFF"}
               fallbackImage={vehicle.image}
               rotationArray={selectedColor?.rotationArray || vehicle.rotationArray}
               hasDayNight={selectedColor?.hasDayNight}
             />
          </div>

          {/* Drag to rotate instructions */}
          <div className="flex flex-col items-center mb-8 gap-2">
            <div className="flex items-center gap-4 text-slate-800">
              <ChevronLeft className="w-5 h-5" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10M9 11V14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14V10M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <ChevronRight className="w-5 h-5" />
            </div>
            <p className="font-semibold text-lg text-slate-900">Drag to rotate</p>
          </div>
          
          {/* Color Selector */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            {vehicle.colors?.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border border-gray-300 shadow-sm transition-transform flex items-center justify-center ${selectedColor?.name === color.name ? 'ring-2 ring-slate-900 scale-110' : 'hover:scale-105'}`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name}`}
                title={color.name}
              >
                {selectedColor?.name === color.name && (
                  <svg className="w-4 h-4 text-white drop-shadow-md mix-blend-difference" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                )}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Exterior Banner */}
      {vehicle.exteriorBanner && (
        <section className="w-full relative h-[40vh] md:h-[60vh]">
          <Image 
            src={vehicle.exteriorBanner}
            alt={`${vehicle.name} Exterior`}
            fill
            className="object-cover"
            priority
          />
        </section>
      )}

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="mb-16 text-center md:text-left">
            <h3 className="text-tata-blue font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-[2px] bg-tata-blue"></span>
              Distinctive Characteristics
            </h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-widest text-slate-900">
              Uniquely {vehicle.name}
            </h2>
            <p className="mt-6 text-slate-600 max-w-2xl text-lg">
              Every detail of the {vehicle.name} has been meticulously crafted to elevate your driving experience. Discover the signature features that set it apart.
            </p>
          </div>

          {vehicle.exclusiveFeatures && vehicle.exclusiveFeatures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[350px]">
              {vehicle.exclusiveFeatures.map((feature, idx) => {
                // Determine styling based on index to create a bento box layout
                const isLarge = idx === 0 || idx === 3;
                const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1";
                const rowSpan = isLarge ? "md:row-span-2" : "md:row-span-1";
                
                return (
                  <div 
                    key={idx} 
                    className={`group relative rounded-3xl overflow-hidden ${colSpan} ${rowSpan} bg-slate-100 border border-gray-200 shadow-sm`}
                  >
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-tata-blue font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        {feature.subtitle}
                      </h4>
                      <h3 className={`font-display font-bold text-white uppercase tracking-wider mb-4 ${isLarge ? 'text-4xl' : 'text-2xl'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-gray-300 leading-relaxed ${isLarge ? 'line-clamp-3 text-base' : 'line-clamp-2 text-sm'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-slate-500 py-12 bg-slate-50 rounded-3xl border border-gray-200">
              Detailed feature breakdown is currently being updated for this model.
            </div>
          )}
        </div>
      </section>

      {/* Variants Section */}
      <section id="variants" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-slate-500 font-bold tracking-widest uppercase mb-4 text-sm">Personas</h3>
            <h2 className="text-4xl font-bold uppercase tracking-widest text-slate-900">Choose Your {vehicle.name}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Smart", price: "From ₹ 8.10 Lakh*", desc: "The perfect start to your journey.", features: ["LED Headlamps", "6 Airbags", "ESP", "ISOFIX"] },
              { name: "Pure", price: "From ₹ 9.70 Lakh*", desc: "Purity of design and comfort.", features: ["7\" Touchscreen", "Auto AC", "Steering Controls", "Shark Fin Antenna"] },
              { name: "Adventure", price: "From ₹ 11.50 Lakh*", desc: "For the thrill seekers.", features: ["16\" Alloys", "Push Button Start", "Cruise Control", "Rear AC Vents"] },
              { name: "Accomplished", price: "From ₹ 13.00 Lakh*", desc: "The ultimate expression of luxury.", features: ["10.25\" Screen", "Ventilated Seats", "360° Camera", "Air Purifier"] }
            ].map((variant) => (
              <div key={variant.name} className="bg-[#f5f5f5] p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{variant.name}</h4>
                <p className="text-slate-500 mb-6 flex-grow">{variant.desc}</p>
                <div className="text-tata-blue font-bold text-lg mb-6">{variant.price}</div>
                <ul className="space-y-3 text-sm text-slate-700 mb-8">
                  {variant.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-colors mt-auto">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section id="specs" className="py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-gray-400 font-bold tracking-widest uppercase mb-4 text-sm">Specifications</h3>
            <h2 className="text-4xl font-bold uppercase tracking-widest text-white">Technical Details</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Discover the unparalleled engineering behind the {vehicle.name}. Everything you need to know about its performance, dimensions, and capability.</p>
          </div>
          
          {vehicle.detailedSpecs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
              
              {/* Engine */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-tata-blue mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">Engine & Transmission</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Displacement</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.engine.displacement}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Max Power</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.engine.maxPower}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Max Torque</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.engine.maxTorque}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Cylinders</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.engine.cylinders}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Transmission</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.engine.transmission}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Drive Modes</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.engine.driveModes}</span></li>
                </ul>
              </div>
              
              {/* Dimensions */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-tata-blue mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/></svg>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">Dimensions & Capacity</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Length</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.dimensions.length}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Width</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.dimensions.width}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Height</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.dimensions.height}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Wheelbase</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.dimensions.wheelbase}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Ground Clearance</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.dimensions.groundClearance}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Boot Space</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.dimensions.bootSpace}</span></li>
                </ul>
              </div>
              
              {/* Safety */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-tata-blue mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">Safety</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Airbags</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.safety.airbags}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>ABS with EBD</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.safety.absEbd}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>ESP</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.safety.esp}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>GNCAP Rating</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.safety.gncapRating}</span></li>
                </ul>
                
                <div className="flex items-center gap-4 text-tata-blue mb-4 mt-8">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">Suspension & Brakes</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Front Susp.</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.suspensionAndBrakes.frontSuspension}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Rear Susp.</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.suspensionAndBrakes.rearSuspension}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Front Brakes</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.suspensionAndBrakes.frontBrakes}</span></li>
                  <li className="flex justify-between border-b border-gray-800 pb-2"><span>Rear Brakes</span> <span className="text-white font-medium text-right">{vehicle.detailedSpecs.suspensionAndBrakes.rearBrakes}</span></li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="space-y-6 md:col-span-2 lg:col-span-3 border-t border-gray-800 pt-8 mt-4">
                <div className="flex items-center gap-4 text-tata-blue mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">Key Features</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                    <span className="block text-sm text-gray-400 mb-1">Infotainment</span>
                    <span className="text-white font-medium text-lg">{vehicle.detailedSpecs.keyFeatures.infotainment}</span>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                    <span className="block text-sm text-gray-400 mb-1">Instrument Cluster</span>
                    <span className="text-white font-medium text-lg">{vehicle.detailedSpecs.keyFeatures.instrumentCluster}</span>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                    <span className="block text-sm text-gray-400 mb-1">Sound System</span>
                    <span className="text-white font-medium text-lg">{vehicle.detailedSpecs.keyFeatures.soundSystem}</span>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                    <span className="block text-sm text-gray-400 mb-1">Comfort & Convenience</span>
                    <span className="text-white font-medium text-lg">{vehicle.detailedSpecs.keyFeatures.comfort}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
             <div className="text-center text-gray-400 py-12">Detailed specifications are currently being updated.</div>
          )}
        </div>
      </section>

      {/* Pricing section */}
      <section id="price" className="bg-[#f5f5f5] max-w-4xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center uppercase tracking-widest text-slate-900 mb-12">Finance Your {vehicle.name}</h2>
        <DynamicPricingWidget vehiclePrice={vehicle.price} vehicleName={vehicle.name} />
      </section>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#333333] z-50">
        <div className="max-w-[1400px] mx-auto flex h-[60px]">
          <Link 
            href={`/book-test-drive?model=${vehicle.slug}`} 
            className="flex-1 flex items-center justify-center gap-3 text-sm md:text-base font-medium text-white hover:bg-white/10 transition border-r border-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/></svg>
            Book a Test Drive
          </Link>
          <Link 
            href="/dealer-locator" 
            className="flex-1 flex items-center justify-center gap-3 text-sm md:text-base font-medium text-white hover:bg-white/10 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Find a Dealer
          </Link>
        </div>
      </div>
    </div>
  );
}


