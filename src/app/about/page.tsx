import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Award, Users, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-gray-100">
        <div className="absolute inset-0 z-0">
          {/* We'll use a generic tata showroom or lifestyle image here */}
          <Image
            src="/assets/images/lifestyle/harrier-product-lifestyle-resized.jpg"
            alt="Kosmo Tata Dealership"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-tata-blue font-bold tracking-[0.2em] uppercase mb-4 block">About Us</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-widest text-white mb-6 drop-shadow-md">
              Kosmo Tata
            </h1>
            <p className="text-xl font-light text-slate-200 tracking-wide mb-8">
              Jalandhar's Premier Destination for Tata Motors. Delivering excellence, trust, and a seamless car buying experience.
            </p>
          </div>
        </div>
      </section>

      {/* MD Message Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <Users className="w-24 h-24 text-slate-400 opacity-50" />
                <span className="absolute bottom-4 left-4 text-slate-500 font-medium">Mr. Raghav Ahuja</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest text-slate-900">
              Message from our MD
            </h2>
            <div className="w-16 h-1 bg-tata-blue"></div>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              "At Kosmo Tata, our mission is to provide an unparalleled automotive experience. We believe that buying a car is more than just a transaction; it's the beginning of a lifelong relationship. Our state-of-the-art flagship dealership in Jalandhar is designed to offer you comfort, transparency, and a premium environment as you explore the safest and most advanced cars in India."
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-bold">
              â€” Mr. Raghav Ahuja, Managing Director
            </p>
            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-tata-blue text-white font-bold uppercase tracking-widest rounded hover:bg-blue-700 transition">
                Visit Our Showroom <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dealership Info */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-tata-blue group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Head Branch</h3>
              <p className="text-slate-600 mb-4">Jalandhar, Punjab</p>
              <p className="text-sm text-slate-500">Visit our massive digital showroom featuring the complete Tata Motors lineup.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-tata-blue group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Premium Service</h3>
              <p className="text-slate-600 mb-4">Certified Technicians</p>
              <p className="text-sm text-slate-500">Our after-sales service ensures your Tata vehicle remains in pristine condition.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-tata-blue group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Customer First</h3>
              <p className="text-slate-600 mb-4">customercare@kosmotata.in</p>
              <p className="text-sm text-slate-500">We are dedicated to resolving your queries and ensuring 100% satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
