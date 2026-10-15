"use client";

import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import { openWhatsApp } from "@/utils/whatsapp";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function BookOnlinePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    model: "harrier",
    fuelType: "Petrol / Diesel",
    color: "",
    address: "",
    comments: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>("");

  const selectedVehicle = vehicles.find(v => v.slug === formData.model) || vehicles[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const waMessage = 
`💳 *New Online Car Booking - Kosmo Tata*
---------------------------------------
👤 *Customer Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🚘 *Vehicle Model:* ${selectedVehicle.name} (${selectedVehicle.trim})
⛽ *Fuel / Powertrain:* ${formData.fuelType}
🎨 *Preferred Color:* ${formData.color || "Standard"}
📍 *Delivery Address:* ${formData.address}
${formData.comments ? `📝 *Notes:* ${formData.comments}` : ""}`;

    const waUrl = openWhatsApp(waMessage);
    setLastWhatsAppUrl(waUrl);

    // Optional backend log
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, vehicleName: selectedVehicle.name, type: 'online_booking' }),
    }).catch(() => {});

    setStatus("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-tata-blue mb-2">
            Kosmo Tata Official Booking
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book Your Tata Vehicle Online
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Reserve your preferred Tata car online with priority allocation and immediate dealership WhatsApp confirmation.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
            <h3 className="text-2xl font-bold mb-2">Booking Request Submitted!</h3>
            <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm md:text-base">
              We are connecting you directly with Kosmo Tata sales on WhatsApp to finalize your booking voucher and priority queue.
            </p>

            {lastWhatsAppUrl && (
              <div className="mb-6">
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-lg shadow-md transition-all text-sm md:text-base"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Open in WhatsApp
                </a>
              </div>
            )}

            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition"
            >
              Book Another Car
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Tata Model *</label>
                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    required
                  >
                    {vehicles.map(v => (
                      <option key={v.slug} value={v.slug}>{v.name} ({v.trim})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Fuel / Powertrain *</label>
                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    required
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="iCNG">iCNG (Dual Cylinder)</option>
                    <option value="Electric (EV)">Electric (EV)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Exterior Color</label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="e.g. Daytona Grey, Dark Edition, Pristine White"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Delivery Address / Location *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                  placeholder="Street, Area, City, Pincode"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests or Finance / Exchange Queries</label>
                <textarea
                  name="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                  placeholder="Let us know if you want car exchange evaluation or loan assistance..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition disabled:opacity-70 flex items-center justify-center gap-2 text-base shadow-md"
              >
                <svg className="w-5 h-5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                {status === "submitting" ? "Connecting to WhatsApp..." : "Confirm Booking via WhatsApp"}
              </button>

              <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Authorized Dealership</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transparent Pricing</span>
                <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-emerald-600" /> Priority Delivery</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
