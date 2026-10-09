"use client";

import { useState } from "react";
import { vehicles } from "@/data/vehicles";

export default function TestDriveForm({ preselectedModel = "" }: { preselectedModel?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: preselectedModel,
    date: "",
    time: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call to customercare@kosmotata.in
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        model: preselectedModel,
        date: "",
        time: "",
        message: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
        <p className="text-slate-600">Thank you for choosing Kosmo Tata. Our executive will call you shortly to confirm your test drive appointment.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
        >
          Book Another
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
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 bg-white text-slate-900"
          placeholder="Any specific variant or colour you want to test drive?"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting Request..." : "Confirm Test Drive Booking"}
      </button>
      
      <p className="text-xs text-slate-500 text-center mt-4">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
        A Kosmo Tata representative will contact you to confirm the appointment.
      </p>
    </form>
  );
}
