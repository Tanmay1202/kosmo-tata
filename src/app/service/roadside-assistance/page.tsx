"use client";

import Link from "next/link";
import { openWhatsApp } from "@/utils/whatsapp";
import { PhoneCall, Truck, BatteryCharging, AlertCircle, Wrench, Shield, CheckCircle } from "lucide-react";

export default function RoadsideAssistancePage() {
  const handleRequestRSAWhatsApp = () => {
    const waMessage = 
`🚨 *URGENT: Roadside Assistance Request - Kosmo Tata*
---------------------------------------
Hi Kosmo Tata RSA Team, I require immediate roadside / breakdown assistance for my vehicle.

📍 *My Current Location:* (Sharing live GPS location)
🚘 *Vehicle:* Tata Motors
⚠️ *Issue:* Breakdown / Towing / Battery / Flat Tyre

Please connect me with the nearest emergency rescue response immediately.`;

    openWhatsApp(waMessage);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-2">
            24 Hours • 365 Days • Nationwide Coverage
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tata Motors Roadside Assistance
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Never stranded on the road. Immediate breakdown support, flatbed towing, and quick rescue services across Punjab and all of India.
          </p>
        </div>

        {/* Emergency Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-red-50 border-2 border-red-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-red-900 mb-2">Toll-Free RSA Helpline</h2>
              <p className="text-slate-600 text-sm mb-6">
                Direct nationwide Tata Motors RSA dispatch center. Accessible 24 hours a day, 7 days a week.
              </p>
            </div>
            <a
              href="tel:18002097979"
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-lg"
            >
              <PhoneCall className="w-5 h-5" />
              Call 1800 209 7979
            </a>
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-[#25D366] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-emerald-950 mb-2">Dealership WhatsApp RSA</h2>
              <p className="text-slate-600 text-sm mb-6">
                Share your live location and vehicle status directly with Kosmo Tata emergency dispatch on WhatsApp.
              </p>
            </div>
            <button
              onClick={handleRequestRSAWhatsApp}
              type="button"
              className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-lg"
            >
              Request RSA via WhatsApp
            </button>
          </div>
        </div>

        {/* What's Covered */}
        <div className="border border-gray-200 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Roadside Assistance Services Included:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-tata-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-slate-900">Flatbed Towing Assistance</p>
                <p className="text-xs text-slate-500">Safe recovery to nearest authorized workshop</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BatteryCharging className="w-5 h-5 text-tata-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-slate-900">Battery Jump Start</p>
                <p className="text-xs text-slate-500">On-site jump-start service for discharged batteries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wrench className="w-5 h-5 text-tata-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-slate-900">Flat Tyre Replacement</p>
                <p className="text-xs text-slate-500">Assistance in replacing flat tyre with spare</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-tata-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-slate-900">Emergency Fuel Delivery</p>
                <p className="text-xs text-slate-500">Up to 5 litres delivered when fuel runs empty</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-tata-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-slate-900">Locked-In Key Assistance</p>
                <p className="text-xs text-slate-500">Safe retrieval support for keys locked inside</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-tata-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-slate-900">Minor On-Site Mechanical Repairs</p>
                <p className="text-xs text-slate-500">Quick fixes to get you safely back moving</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/service/book-service"
            className="text-sm font-bold text-tata-blue hover:underline"
          >
            Looking to schedule standard periodic maintenance instead? Book a Service &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
