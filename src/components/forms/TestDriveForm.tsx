"use client";

import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import { openWhatsApp, getWhatsAppUrl } from "@/utils/whatsapp";

export default function TestDriveForm({ preselectedModel = "" }: { preselectedModel?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    model: preselectedModel,
    date: "",
    time: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const selectedVehicle = vehicles.find(v => v.slug === formData.model)?.name || formData.model || "Tata Vehicle";
    
    // Construct rich WhatsApp message
    const waMessage = 
`🚗 *New Test Drive Booking - Kosmo Tata*
---------------------------------------
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🚘 *Vehicle Model:* ${selectedVehicle}
📍 *Address / Location:* ${formData.address}
📅 *Preferred Date:* ${formData.date}
⏰ *Time Slot:* ${formData.time}
${formData.message ? `💬 *Notes:* ${formData.message}` : ""}`;

    // Open WhatsApp
    const waUrl = openWhatsApp(waMessage);
    setLastWhatsAppUrl(waUrl);

    // Also send to backend
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          vehicleName: selectedVehicle,
          type: 'test_drive',
        }),
      });
    } catch (error) {
      console.warn("Backend log error (WhatsApp opened):", error);
    } finally {
      setStatus("success");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Test Drive Request Sent!</h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6">
          Thank you for choosing Kosmo Tata. We are connecting you directly with our dealership concierge on WhatsApp.
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
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
              model: preselectedModel,
              date: "",
              time: "",
              message: ""
            });
          }}
          className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition text-sm"
        >
          Book Another Test Drive
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          <label className="block text-sm font-medium text-slate-700 mb-2">Select Vehicle *</label>
          <select 
            name="model" 
            required 
            value={formData.model}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
          >
            <option value="">Choose a vehicle</option>
            {vehicles.map(v => (
              <option key={v.slug} value={v.slug}>{v.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Address Field */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Address / Doorstep Location *</label>
        <input 
          type="text" 
          name="address" 
          required 
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
          placeholder="House/Street, Landmark, City, Pincode"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
          <input 
            type="date" 
            name="date" 
            required 
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
          <select 
            name="time" 
            required 
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
          >
            <option value="">Choose time slot</option>
            <option value="morning">Morning (10 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 7 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Additional Message (Optional)</label>
        <textarea 
          name="message" 
          rows={3} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
          placeholder="Any specific variant or color you want to test drive?"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base shadow-md"
      >
        <svg className="w-5 h-5 fill-current text-[#25D366]" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        {status === "submitting" ? "Connecting to WhatsApp..." : "Book Test Drive via WhatsApp"}
      </button>
      
      <p className="text-xs text-slate-500 text-center mt-3">
        Submitting opens WhatsApp with your booking details for immediate confirmation with a Kosmo Tata representative.
      </p>
    </form>
  );
}
