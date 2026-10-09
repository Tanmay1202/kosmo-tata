import Image from "next/image";

export default function GalleryPage() {
  const images = [
    { src: "/assets/_external/tata.cars/content/dam/tml/pv/products/lifestyle-images/safari-interior-lifestyle-resized-new.jpg", category: "Showroom" },
    { src: "/assets/_external/tata.cars/content/dam/tml/pv/products/lifestyle-images/terrain-repsonse.jpg", category: "Vehicles" },
    { src: "/assets/images/cars/premium-ventilated-leatherette-seats-1_$IMG-474-248-D$_fit_crop_fmt_avif-alpha", category: "Vehicles" },
    { src: "/assets/images/cars/aeris-i-petrol-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha", category: "Deliveries" },
    { src: "/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha", category: "Showroom" },
    { src: "/assets/images/cars/sierrakv-14-1_$TT-614-400-D$_fit_crop_fmt_avif-alpha", category: "Events" }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Gallery</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Glimpses of our showroom, happy customers, and stunning Tata vehicles.
          </p>
        </div>

        {/* Filters (Visual only for now, can be made functional later) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Showroom", "Vehicles", "Deliveries", "Events"].map(filter => (
            <button key={filter} className="px-6 py-2 rounded-full border border-gray-200 text-sm font-semibold text-slate-700 hover:bg-slate-900 hover:text-white transition-colors focus:bg-slate-900 focus:text-white">
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 group cursor-pointer border border-gray-200">
              <Image 
                src={img.src} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest border border-white px-4 py-2 rounded-lg">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
