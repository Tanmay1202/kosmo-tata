"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Car, ArrowRightLeft, MapPin, Calendar, Clock, User, Phone, Wrench } from "lucide-react";
import { useDealership, ModalMode } from "@/context/DealershipContext";
import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/utils/whatsapp";

export default function LeadCaptureModal() {
  const { isModalOpen, closeModal, modalMode, preselectedVehicle } = useDealership();
  
  const [activeTab, setActiveTab] = useState<ModalMode>(modalMode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [isError, setIsError] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>("");

  // Sync tab with modalMode when opened
  useEffect(() => {
    if (isModalOpen) {
      setActiveTab(modalMode);
      setIsSuccess(false);
      setIsError(false);
    }
  }, [isModalOpen, modalMode]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    let waMessage = "";
    if (activeTab === "test-drive") {
      const vehicleName = vehicles.find(v => v.slug === data.model)?.name || data.model || selectedVehicleData.name;
      waMessage = 
`🚗 *VIP Test Drive Booking - Kosmo Tata*
---------------------------------------
👤 *Name:* ${data.name}
📱 *Phone:* ${data.phone}
🚘 *Vehicle Model:* ${vehicleName}
📍 *Address:* ${data.address || ""}${data.pincode ? ` (${data.pincode})` : ""}
📅 *Preferred Date:* ${data.date}
⏰ *Time Slot:* ${data.time}`;
    } else if (activeTab === "service") {
      waMessage = 
`🔧 *Service Booking Request - Kosmo Tata*
---------------------------------------
👤 *Name:* ${data.name}
📱 *Phone:* ${data.phone}
🚘 *Vehicle:* ${data.model}
🔢 *Reg No:* ${data.regNumber || ""}
🛠️ *Service Type:* ${data.serviceType || "Periodic Maintenance"}
📍 *Address:* ${data.address || ""}
📅 *Preferred Date:* ${data.date}
⏰ *Time Slot:* ${data.time}`;
    } else {
      waMessage = 
`🔄 *Trade-In Valuation Request - Kosmo Tata*
---------------------------------------
👤 *Name:* ${data.name}
📱 *Phone:* ${data.phone}
🚘 *Current Vehicle:* ${data.make} ${data.model}
📅 *Year:* ${data.year}
🛣️ *Odometer:* ${data.odometer} km
⚙️ *Condition:* ${data.condition}
📍 *Address / Location:* ${data.address || ""}`;
    }

    // Open WhatsApp
    const waUrl = openWhatsApp(waMessage);
    setLastWhatsAppUrl(waUrl);
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type: 'lead_capture',
          leadType: activeTab
        }),
      });
    } catch (error) {
      console.warn("Backend log error (WhatsApp opened):", error);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setBookingId(`TML-${Math.random().toString(36).substr(2, 6).toUpperCase()}`);
    }
  };

  const selectedVehicleData = vehicles.find((v) => v.slug === preselectedVehicle) || vehicles[0];

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-[#0B0F17]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white border border-gray-200 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[90dvh] md:max-h-none overflow-y-auto md:overflow-visible"
          >
            {/* Left Panel: Vehicle Showcase */}
            <div className="hidden md:flex md:w-2/5 relative bg-gradient-to-br from-tata-blue/20 to-obsidian border-r border-white/5 p-8 flex-col justify-between">
              <div>
                <Image src="/assets/images/icons/tata-blue-small-logo.png" alt="Tata" width={32} height={32} className="mb-6 w-auto h-auto" />
                <h3 className="font-display text-3xl text-slate-900 uppercase tracking-widest leading-tight whitespace-pre-line">
                  {activeTab === "test-drive" ? "VIP Home\nTest Drive" : activeTab === "service" ? "Certified\nService Care" : "Instant\nTrade-In\nOffer"}
                </h3>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                  {activeTab === "test-drive" 
                    ? "Experience Tata Motors engineering from the comfort of your home. Doorstep delivery available." 
                    : activeTab === "service"
                    ? "Schedule routine maintenance or repairs with certified technicians and genuine Tata parts."
                    : "Upgrade to a new era of luxury. Get the best market value for your current vehicle instantly."}
                </p>
              </div>

              {activeTab === "test-drive" && (
                <div className="mt-8">
                  <div className="relative w-full h-32">
                    <Image src={selectedVehicleData.image} alt={selectedVehicleData.name} fill sizes="200px" className="object-contain" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-slate-900 font-display text-xl uppercase tracking-widest">{selectedVehicleData.name}</p>
                    <p className="text-tata-blue text-xs tracking-widest uppercase">{selectedVehicleData.trim}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel: Forms */}
            <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col">
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-slate-600 hover:text-slate-900 transition-colors bg-white border border-gray-200 shadow-sm p-2 rounded-full z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-8"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-display text-2xl text-slate-900 uppercase tracking-widest mb-2">
                    Request Received!
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm">
                    We are connecting you directly with Kosmo Tata on WhatsApp with your booking details.
                  </p>
                  
                  <div className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-xl mb-6">
                    <p className="text-[10px] text-metallic-dark uppercase tracking-widest mb-1">Booking Reference</p>
                    <p className="text-xl text-tata-blue font-bold tracking-widest">{bookingId}</p>
                  </div>

                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 mb-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      Open in WhatsApp
                    </a>
                  )}

                  <button 
                    onClick={closeModal}
                    className="w-full py-3 bg-white border border-gray-200 shadow-xs hover:bg-gray-50 text-slate-900 font-bold uppercase tracking-wider rounded-lg transition-colors text-xs"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Tabs */}
                  <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
                    <button
                      onClick={() => setActiveTab("test-drive")}
                      className={`flex-1 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
                        activeTab === "test-drive" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <Car className="w-3.5 h-3.5" /> Test Drive
                    </button>
                    <button
                      onClick={() => setActiveTab("service")}
                      className={`flex-1 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
                        activeTab === "service" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <Wrench className="w-3.5 h-3.5" /> Service
                    </button>
                    <button
                      onClick={() => setActiveTab("trade-in")}
                      className={`flex-1 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
                        activeTab === "trade-in" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <ArrowRightLeft className="w-3.5 h-3.5" /> Trade-In
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1">
                    {activeTab === "test-drive" && (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Select Model</label>
                          <select name="model" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors appearance-none" defaultValue={preselectedVehicle || ""}>
                            <option value="" disabled>Choose a vehicle...</option>
                            {vehicles.map(v => (
                              <option key={v.slug} value={v.slug}>{v.name} - {v.trim}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1 relative">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Preferred Date</label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input name="date" type="date" required className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors [color-scheme:light]" />
                            </div>
                          </div>
                          <div className="space-y-1 relative">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Time Slot</label>
                            <div className="relative">
                              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <select name="time" required className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors appearance-none">
                                <option value="morning">Morning (9AM - 12PM)</option>
                                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                <option value="evening">Evening (4PM - 7PM)</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Address Field */}
                        <div className="space-y-1 relative">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Doorstep Address / Location *</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input name="address" type="text" placeholder="Street, City, Pincode" required className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                          </div>
                        </div>
                      </>
                    )}

                    {activeTab === "service" && (
                      <>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Vehicle Model</label>
                            <input name="model" type="text" placeholder="e.g. Harrier, Nexon" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Registration No</label>
                            <input name="regNumber" type="text" placeholder="PB 08 AB 1234" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors uppercase placeholder:text-slate-400" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Service Type</label>
                          <select name="serviceType" className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors appearance-none">
                            <option value="Periodic Maintenance Service">Periodic Maintenance Service</option>
                            <option value="General Repair / Oil Change">General Repair / Oil Change</option>
                            <option value="Brake / Clutch Check">Brake / Clutch Check</option>
                            <option value="AC Servicing">AC Servicing</option>
                            <option value="Accidental & Body Shop">Accidental & Body Shop</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1 relative">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Preferred Date</label>
                            <input name="date" type="date" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors [color-scheme:light]" />
                          </div>
                          <div className="space-y-1 relative">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Preferred Slot</label>
                            <select name="time" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors appearance-none">
                              <option value="morning">Morning (9AM - 12PM)</option>
                              <option value="afternoon">Afternoon (12PM - 3PM)</option>
                              <option value="evening">Evening (3PM - 6PM)</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1 relative">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Your Address / City *</label>
                          <input name="address" type="text" placeholder="Street, Area, City" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                        </div>
                      </>
                    )}

                    {activeTab === "trade-in" && (
                      <>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Make / Brand</label>
                            <input name="make" type="text" placeholder="e.g. Maruti, Hyundai" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Model & Variant</label>
                            <input name="model" type="text" placeholder="e.g. Swift VXI" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Year of Mfr</label>
                            <input name="year" type="number" placeholder="2018" required min="2000" max="2026" className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Odometer (KMs)</label>
                            <input name="odometer" type="number" placeholder="45000" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Condition</label>
                          <select name="condition" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors appearance-none">
                            <option value="excellent">Excellent (Like new, no scratches)</option>
                            <option value="good">Good (Minor wear and tear)</option>
                            <option value="fair">Fair (Needs some repair)</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">City / Location *</label>
                          <input name="address" type="text" placeholder="City, Punjab" required className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                        </div>
                      </>
                    )}

                    {/* Common Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                      <div className="space-y-1 relative">
                        <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input name="name" type="text" placeholder="John Doe" required className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Mobile Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input name="phone" type="tel" placeholder="+91 98765 43210" required className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      isDisabled={isSubmitting}
                      intent="primary"
                      className="mt-4 w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      {isSubmitting ? "Connecting to WhatsApp..." : "Submit & Open WhatsApp"}
                    </Button>
                    {isError && (
                      <p className="text-red-600 text-center text-xs mt-1 font-medium">Failed to submit request. Please try again.</p>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
