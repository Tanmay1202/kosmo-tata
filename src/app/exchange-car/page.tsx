"use client";

import { useState } from "react";
import { openWhatsApp } from "@/utils/whatsapp";
import { vehicles } from "@/data/vehicles";
import { ArrowRightLeft, ShieldCheck, Zap } from "lucide-react";

export default function ExchangeCarPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    currentMake: "",
    currentModel: "",
    year: "2019",
    odometer: "",
    condition: "Good Condition",
    desiredTataModel: "Harrier"
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const waMessage = 
`🔄 *Car Exchange & Valuation Request - Kosmo Tata*
---------------------------------------
👤 *Customer Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏙️ *City / Location:* ${formData.city}
📍 *Address:* ${formData.address}

🚘 *Current Car:* ${formData.currentMake} ${formData.currentModel} (${formData.year})
🛣️ *KMs Driven:* ${formData.odometer} km
⚙️ *Condition:* ${formData.condition}
🎯 *Upgrade Interested In:* Tata ${formData.desiredTataModel}`;

    const waUrl = openWhatsApp(waMessage);
    setLastWhatsAppUrl(waUrl);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, type: 'car_exchange' }),
    }).catch(() => {});

    setStatus("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-tata-blue mb-2">
            Kosmo Tata Motors Exchange
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Exchange Your Old Car for a New Tata
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Get the best market valuation for your pre-owned car with attractive exchange bonuses and hassle-free RC transfer.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
            <h3 className="text-2xl font-bold mb-2">Valuation Request Generated!</h3>
            <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm md:text-base">
              We are connecting you directly with our Kosmo Tata evaluation specialist on WhatsApp for a quick doorstep evaluation and price estimate.
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
              Evaluate Another Car
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5 text-tata-blue" />
                  Your Current Vehicle Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Car Brand / Make *</label>
                  <input
                    type="text"
                    name="currentMake"
                    required
                    value={formData.currentMake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="e.g. Maruti Suzuki, Hyundai, Honda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Model & Variant *</label>
                  <input
                    type="text"
                    name="currentModel"
                    required
                    value={formData.currentModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="e.g. Swift VXI, i20 Asta, City"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Year of Registration *</label>
                  <input
                    type="number"
                    name="year"
                    min="2000"
                    max="2026"
                    required
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Kilometers Driven *</label>
                  <input
                    type="number"
                    name="odometer"
                    required
                    value={formData.odometer}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="e.g. 45000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Overall Condition *</label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                  >
                    <option value="Excellent Condition">Excellent (No scratches, clean service record)</option>
                    <option value="Good Condition">Good (Normal wear & tear)</option>
                    <option value="Average Condition">Average (Minor dents / repainting)</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-4 my-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-tata-blue" />
                  Your Contact & Upgrade Preference
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Desired Tata Motors Car *</label>
                  <select
                    name="desiredTataModel"
                    value={formData.desiredTataModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                  >
                    {vehicles.map(v => (
                      <option key={v.slug} value={v.name}>{v.name} - {v.trim}</option>
                    ))}
                    <option value="Tata EV Range">Any Tata EV Model</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City / Area *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                    placeholder="e.g. Jalandhar, Ludhiana, Amritsar"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Full Name *</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
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

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Address / Doorstep Inspection Location *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
                  placeholder="Street, Landmark, City, Pincode"
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
                {status === "submitting" ? "Connecting to WhatsApp..." : "Get Instant Valuation on WhatsApp"}
              </button>

              <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Best Price Guarantee</span>
                <span className="flex items-center gap-1.5"><ArrowRightLeft className="w-4 h-4 text-emerald-600" /> Instant Exchange Bonus</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
