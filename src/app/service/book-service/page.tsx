import ServiceBookingForm from "@/components/forms/ServiceBookingForm";
import Link from "next/link";
import { Wrench, ShieldCheck, Clock, Award } from "lucide-react";

export default function BookServicePage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-tata-blue mb-2">
            Kosmo Tata Authorized Care
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book a Service Appointment
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Give your vehicle the expert care it deserves. Scheduled maintenance, general repairs, and genuine Tata parts with doorstep pickup options.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          <div className="p-3.5 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-xs">
            <Wrench className="w-5 h-5 text-tata-blue shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-800">Master Technicians</span>
          </div>
          <div className="p-3.5 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-tata-blue shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-800">100% Genuine Spares</span>
          </div>
          <div className="p-3.5 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-xs">
            <Clock className="w-5 h-5 text-tata-blue shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-800">Quick Turnaround</span>
          </div>
          <div className="p-3.5 bg-white border border-gray-200 rounded-xl flex items-center gap-3 shadow-xs">
            <Award className="w-5 h-5 text-tata-blue shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-800">Warranty Protected</span>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-200 mb-8">
          <ServiceBookingForm />
        </div>

        {/* Emergency Assistance Callout */}
        <div className="text-center bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-slate-700">
            Need emergency roadside assistance or immediate breakdown support?{" "}
            <a href="tel:18002097979" className="font-bold text-tata-blue hover:underline">
              Call Tata 24x7 RSA: 1800 209 7979
            </a>
            {" "}or{" "}
            <Link href="/contact-us" className="font-bold text-slate-900 hover:underline">
              Contact Dealership
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
