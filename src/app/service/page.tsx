import Link from "next/link";
import { Wrench, ShieldCheck, Clock, Award, PhoneCall, Calculator, ArrowRight } from "lucide-react";

export default function ServiceOverviewPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-tata-blue mb-3">
            Authorized Service & Genuine Care
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Kosmo Tata After-Sales & Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Keep your vehicle running at peak performance. Our factory-trained technicians, advanced diagnostic bays, and 100% genuine Tata spare parts ensure lasting peace of mind.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/service/book-service"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Wrench className="w-5 h-5 text-tata-blue" />
              Book a Service Now
            </Link>
            <Link
              href="/contact-us"
              className="px-8 py-4 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold rounded-lg transition-all"
            >
              Contact Workshop Desk
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-tata-blue transition">
            <div className="w-12 h-12 bg-blue-100 text-tata-blue rounded-xl flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Periodic Maintenance</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Standard 10,000 km / annual scheduled inspection, engine oil replacement, brake checks, and computer diagnostics to safeguard your warranty.
            </p>
            <Link href="/service/book-service" className="text-tata-blue font-bold text-sm flex items-center gap-1 hover:underline">
              Schedule Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-tata-blue transition">
            <div className="w-12 h-12 bg-blue-100 text-tata-blue rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Accidental & Body Shop</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Cashless insurance claims with all leading insurers, automated paint booth matching, and precision structural alignment back to OEM standards.
            </p>
            <Link href="/service/book-service" className="text-tata-blue font-bold text-sm flex items-center gap-1 hover:underline">
              Request Repair Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-tata-blue transition">
            <div className="w-12 h-12 bg-blue-100 text-tata-blue rounded-xl flex items-center justify-center mb-6">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">24x7 Roadside Assistance</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Flat tire change, emergency fuel delivery, jump start, and flatbed towing across Punjab and nationwide whenever you need immediate help.
            </p>
            <a href="tel:18002097979" className="text-tata-blue font-bold text-sm flex items-center gap-1 hover:underline">
              Emergency RSA: 1800 209 7979 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Why Kosmo Tata Care */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Why Service at Kosmo Tata?</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              We operate state-of-the-art service infrastructure across Jalandhar and Punjab, backed by certified Tata Motors master mechanics and digital job card tracking.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
            <div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Genuine Parts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">50,000+</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Cars Serviced</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">90 Min</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Express Service</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">4.8 / 5</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Customer Rating</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
