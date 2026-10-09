"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function DynamicPricingWidget({ vehiclePrice = "5,29,990", vehicleName = "Vehicle" }: { vehiclePrice?: string, vehicleName?: string }) {
  // Parse base price
  const basePriceNum = parseInt(vehiclePrice.replace(/[^0-9]/g, "")) || 529990;
  
  const [downPayment, setDownPayment] = useState(100000);
  const [tenure, setTenure] = useState(60); // months
  const interestRate = 9.5; // Annual

  const principal = Math.max(0, basePriceNum - downPayment);
  
  const calculateEMI = () => {
    if (principal <= 0) return 0;
    const r = (interestRate / 12) / 100;
    const n = tenure;
    const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-8 rounded-3xl bg-white border border-gray-200 shadow-sm border border-gray-200 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-tata-blue/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        
        {/* Left Side: Pricing Info */}
        <div className="flex-1 w-full space-y-6">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-tata-blue" />
            <h3 className="text-2xl font-display uppercase tracking-widest text-slate-900">Smart Financing</h3>
          </div>
          
          <div className="space-y-2">
            <p className="text-slate-600 text-sm uppercase tracking-wider">Estimated On-Road Price</p>
            <p className="text-4xl md:text-5xl font-display text-slate-900">
              ₹ {basePriceNum.toLocaleString("en-IN")}
              <span className="text-sm text-slate-500 font-sans ml-2">*Mumbai</span>
            </p>
          </div>

          {/* Sliders */}
          <div className="space-y-6 pt-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-700">Down Payment</span>
                <span className="text-slate-900 font-bold tracking-wider">₹ {downPayment.toLocaleString("en-IN")}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={Math.min(basePriceNum, 1000000)} 
                step="10000" 
                value={downPayment} 
                onChange={(e) => setDownPayment(parseInt(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-tata-blue"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-700">Tenure (Months)</span>
                <span className="text-slate-900 font-bold tracking-wider">{tenure} Months</span>
              </div>
              <div className="flex justify-between gap-2">
                {[12, 24, 36, 48, 60].map(t => (
                  <button 
                    key={t}
                    onClick={() => setTenure(t)}
                    className={`flex-1 py-2 text-xs md:text-sm font-bold uppercase rounded-lg transition-colors border ${
                      tenure === t 
                      ? "bg-tata-blue border-tata-blue text-white shadow-[0_0_15px_rgba(0,82,204,0.3)]" 
                      : "bg-white/5 border-gray-200 text-slate-600 hover:bg-white/10"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: EMI Result */}
        <div className="flex-1 w-full bg-black/40 rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center text-center">
          <p className="text-tata-blue text-sm uppercase tracking-[0.2em] mb-4 font-bold">Estimated EMI</p>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-5xl md:text-6xl font-display text-slate-900 tracking-wider">₹{emi.toLocaleString("en-IN")}</span>
            <span className="text-slate-600 text-sm">/mo</span>
          </div>
          
          <ul className="text-sm text-slate-600 space-y-2 mb-8 text-left w-full max-w-[250px]">
            <li className="flex justify-between">
              <span>Principal:</span>
              <span className="text-slate-900">₹{principal.toLocaleString("en-IN")}</span>
            </li>
            <li className="flex justify-between">
              <span>Interest Rate:</span>
              <span className="text-slate-900">{interestRate}% p.a.</span>
            </li>
          </ul>

          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-none hover:bg-slate-200 transition-colors">
            Apply for Loan
          </button>
        </div>

      </div>
    </div>
  );
}
