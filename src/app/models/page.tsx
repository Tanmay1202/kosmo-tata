import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ModelsPage() {
  const categories = ["SUVs", "EVs", "Hatchbacks & Sedans"];

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Cars</h1>
          <p className="mt-4 text-lg text-slate-600">Explore the complete range of Tata Motors vehicles at Kosmo Tata.</p>
        </div>

        {categories.map((category) => {
          const categoryVehicles = vehicles.filter(v => v.category === category);
          
          if (categoryVehicles.length === 0) return null;

          return (
            <section key={category} className="mb-20">
              <h2 className="text-2xl font-semibold text-slate-900 mb-8 border-b pb-4">{category}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <Link href={`/models/${vehicle.slug}`} className="block relative aspect-[16/9] bg-slate-50 p-6 overflow-hidden">
                      <Image 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        fill 
                        className="object-contain group-hover:scale-105 transition-transform duration-500" 
                      />
                      {vehicle.isNew && (
                        <span className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                    </Link>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
                          <p className="text-sm text-slate-500">{vehicle.trim}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-500">Starting from</p>
                          <p className="text-lg font-bold text-slate-900">{vehicle.price}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600 flex-grow">
                        <div>
                          <span className="block text-xs text-slate-400">Power</span>
                          <span className="font-medium text-slate-900">{vehicle.engineSpecs.power}</span>
                        </div>
                        <div>
                          <span className="block text-xs text-slate-400">Engine/Battery</span>
                          <span className="font-medium text-slate-900">{vehicle.engineSpecs.engineOrBattery}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-auto">
                        <Link 
                          href={`/models/${vehicle.slug}`}
                          className="w-full text-center py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                        >
                          Explore
                        </Link>
                        <div className="flex gap-3">
                          <Link 
                            href={`/book-test-drive?model=${vehicle.slug}`}
                            className="flex-1 text-center py-3 border border-slate-200 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            Test Drive
                          </Link>
                          <Link 
                            href={`/contact-us?model=${vehicle.slug}`}
                            className="flex-1 text-center py-3 border border-slate-200 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
