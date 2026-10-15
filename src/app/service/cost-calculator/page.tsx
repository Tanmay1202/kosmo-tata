"use client";

import { useState } from "react";
import Link from "next/link";
import { openWhatsApp } from "@/utils/whatsapp";
import { Calculator, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

export default function ServiceCostCalculatorPage() {
  const [model, setModel] = useState("Harrier");
  const [interval, setInterval] = useState("20,000 km / 2 Years (Major)");
  const [fuel, setFuel] = useState("Diesel");

  // Estimation logic
  const getEstimatedCost = () => {
    let base = 3500;
    if (model === "Harrier" || model === "Safari") base = 5500;
    if (model === "Curvv" || model === "Sierra") base = 4800;
    if (model === "Punch" || model === "Tiago" || model === "Altroz") base = 3200;

    if (interval.includes("Major") || interval.includes("40,000") || interval.includes("60,000")) {
      base += 3200;
    }
    if (interval.includes("1st") || interval.includes("Free")) {
      base = 1200; // consumables only
    }
    return base;
  };

  const estimated = getEstimatedCost();

  const handleBookOnWhatsApp = () => {
    const waMessage = 
`🔧 *Service Cost Inquiry & Booking - Kosmo Tata*
---------------------------------------
🚘 *Model:* ${model} (${fuel})
⏱️ *Scheduled Interval:* ${interval}
💰 *Online Estimate:* approx. ₹${estimated.toLocaleString('en-IN')}

Hi Kosmo Tata, I'd like to confirm this service estimate and book an appointment for my vehicle.`;

    openWhatsApp(waMessage);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-tata-blue mb-2">
            Transparent Pricing
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Service Cost Calculator
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Get an instant estimate for your vehicle's scheduled periodic maintenance before stepping into our workshop.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Vehicle</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
              >
                <option value="Harrier">Harrier</option>
                <option value="Safari">Safari</option>
                <option value="Nexon">Nexon</option>
                <option value="Curvv">Curvv</option>
                <option value="Sierra">Sierra</option>
                <option value="Punch">Punch</option>
                <option value="Altroz">Altroz</option>
                <option value="Tiago">Tiago</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Fuel Type</label>
              <select
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
              >
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
                <option value="iCNG">iCNG</option>
                <option value="Electric">EV</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Service Interval</label>
              <select
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
              >
                <option value="1st Free Service (1,500 km / 2 Months)">1st Free Service (1,500 km)</option>
                <option value="10,000 km / 1 Year (Minor Service)">10,000 km / 1 Year</option>
                <option value="20,000 km / 2 Years (Major)">20,000 km / 2 Years</option>
                <option value="30,000 km / 3 Years (Minor)">30,000 km / 3 Years</option>
                <option value="40,000 km / 4 Years (Major)">40,000 km / 4 Years</option>
                <option value="50,000 km / 5 Years (Minor)">50,000 km / 5 Years</option>
                <option value="60,000 km / 6 Years (Major)">60,000 km / 6 Years</option>
              </select>
            </div>
          </div>

          {/* Estimate Display Card */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Estimated Maintenance Cost</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-white">₹{estimated.toLocaleString('en-IN')}</span>
                <span className="text-xs text-slate-400">*Excluding taxes & wear items</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Includes genuine synthetic oil, oil filter, multi-point digital inspection & standard scheduled labor.
              </p>
            </div>

            <button
              onClick={handleBookOnWhatsApp}
              type="button"
              className="w-full md:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap shrink-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Confirm on WhatsApp
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/service/book-service"
            className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-tata-blue transition"
          >
            Or fill out the complete Service Booking Form <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
