import Link from "next/link";
import Image from "next/image";

export default function OffersPage() {
  const offers = [
    {
      title: "Festive Bonanza",
      description: "Get benefits up to ₹1,50,000 on select Tata SUVs. Includes free insurance and exchange bonus.",
      validity: "Valid till 31st Oct",
      image: "/assets/images/lifestyle/safari-interior-lifestyle-resized-new.jpg", // placeholder
      models: ["Safari", "Harrier"]
    },
    {
      title: "EV Exchange Program",
      description: "Upgrade your old ICE vehicle to a Tata EV and get an exclusive exchange bonus of ₹50,000.",
      validity: "Valid till 30th Nov",
      image: "/assets/images/cars/aeris-i-petrol-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif",
      models: ["Nexon EV", "Aeris"]
    },
    {
      title: "Corporate Discount",
      description: "Special corporate pricing for employees of top MNCs and government officials.",
      validity: "Ongoing",
      image: "/assets/images/cars/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif",
      models: ["All Models"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Current Offers & Promotions</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the best deals on your favourite Tata cars at Kosmo Tata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image 
                  src={offer.image} 
                  alt={offer.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-slate-900 rounded-full">
                  {offer.validity}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3">
                  {offer.models.map(m => (
                    <span key={m} className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {m}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{offer.description}</p>
                
                <Link 
                  href="/contact-us?enquiryType=sales" 
                  className="w-full text-center py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition"
                >
                  Claim Offer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
