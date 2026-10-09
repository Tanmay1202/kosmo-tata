"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Car, ArrowRightLeft, MapPin, Calendar, Clock, User, Phone, FileText } from "lucide-react";
import { useDealership, ModalMode } from "@/context/DealershipContext";
import { vehicles } from "@/data/vehicles";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LeadCaptureModal() {
  const { isModalOpen, closeModal, modalMode, preselectedVehicle } = useDealership();
  
  const [activeTab, setActiveTab] = useState<ModalMode>(modalMode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Sync tab with modalMode when opened
  useEffect(() => {
    if (isModalOpen) {
      setActiveTab(modalMode);
      setIsSuccess(false);
    }
  }, [isModalOpen, modalMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setBookingId(`TML-${Math.random().toString(36).substr(2, 6).toUpperCase()}`);
    }, 1500);
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
            className="relative w-full max-w-4xl bg-white border border-gray-200 shadow-sm border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Panel: Vehicle Showcase */}
            <div className="hidden md:flex md:w-2/5 relative bg-gradient-to-br from-tata-blue/20 to-obsidian border-r border-white/5 p-8 flex-col justify-between">
              <div>
                <Image src="/assets/images/icons/tata-blue-small-logo.png" alt="Tata" width={32} height={32} className="mb-6 w-auto h-auto" />
                <h3 className="font-display text-3xl text-slate-900 uppercase tracking-widest leading-tight">
                  {activeTab === "test-drive" ? "VIP Home\nTest Drive" : "Instant\nTrade-In\nOffer"}
                </h3>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                  {activeTab === "test-drive" 
                    ? "Experience Tata Motors engineering from the comfort of your home. Doorstep delivery available." 
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
                  className="flex-1 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="font-display text-3xl text-slate-900 uppercase tracking-widest mb-4">
                    Request Confirmed
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {activeTab === "test-drive" ? "Your VIP Test Drive has been successfully scheduled. A Tata Motors concierge will contact you shortly." 
                    : "Your Trade-In Evaluation has been successfully scheduled. A Tata Motors concierge will contact you shortly."}
                  </p>
                  
                  <div className="bg-white border border-gray-200 shadow-sm px-6 py-4 rounded-xl mb-8">
                    <p className="text-[10px] text-metallic-dark uppercase tracking-widest mb-1">Booking Reference ID</p>
                    <p className="text-2xl text-tata-blue font-bold tracking-widest">{bookingId}</p>
                  </div>

                  
                  <button 
                    onClick={closeModal}
                    className="w-full py-4 bg-white border border-gray-200 shadow-sm hover:bg-white/10 text-slate-900 font-bold uppercase tracking-widest rounded transition-colors"
                  >
                    Return to Showroom
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Tabs */}
                  <div className="flex gap-2 mb-8 bg-white p-1.5 rounded-xl border border-white/5">
                    <button
                      onClick={() => setActiveTab("test-drive")}
                      className={`flex-1 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
                        activeTab === "test-drive" ? "bg-white/10 text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <Car className="w-3 h-3 sm:w-4 sm:h-4" /> Test Drive
                    </button>
                    <button
                      onClick={() => setActiveTab("trade-in")}
                      className={`flex-1 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${
                        activeTab === "trade-in" ? "bg-white/10 text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <ArrowRightLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Trade-In
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar">
                    {activeTab === "test-drive" ? (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Select Model</label>
                          <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors appearance-none" defaultValue={preselectedVehicle || ""}>
                            <option value="" disabled>Choose a vehicle...</option>
                            {vehicles.map(v => (
                              <option key={v.slug} value={v.slug}>{v.name} - {v.trim}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1 relative">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Preferred Date</label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input type="date" required className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors [color-scheme:dark]" />
                            </div>
                          </div>
                          <div className="space-y-1 relative">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Time Slot</label>
                            <div className="relative">
                              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <select required className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors appearance-none">
                                <option value="">Select time...</option>
                                <option value="morning">Morning (9AM - 12PM)</option>
                                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                <option value="evening">Evening (4PM - 7PM)</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1 relative">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Doorstep Location (Pincode)</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input type="text" placeholder="e.g. 400001" required className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-600" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Make / Brand</label>
                            <input type="text" placeholder="e.g. Maruti Suzuki" required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-600" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Model & Variant</label>
                            <input type="text" placeholder="e.g. Swift VXI" required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-600" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Year of Mfr</label>
                            <input type="number" placeholder="2018" required min="2000" max="2025" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-600" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Odometer (KMs)</label>
                            <input type="number" placeholder="45000" required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-600" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Condition</label>
                          <select required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors appearance-none">
                            <option value="excellent">Excellent (Like new, no scratches)</option>
                            <option value="good">Good (Minor wear and tear)</option>
                            <option value="fair">Fair (Needs some repair)</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Common Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 mt-2">
                      <div className="space-y-1 relative">
                        <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input type="text" placeholder="John Doe" required className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-600" />
                        </div>
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[10px] text-slate-600 uppercase tracking-widest ml-1">Mobile Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input type="tel" placeholder="+91 99999 99999" required className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-slate-900 focus:outline-none focus:border-tata-blue transition-colors placeholder:text-slate-600" />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      isDisabled={isSubmitting}
                      intent="primary"
                      className="mt-6 w-full py-4 bg-gradient-to-r from-tata-blue to-blue-600 hover:from-blue-500 hover:to-blue-400 text-slate-900 font-bold uppercase tracking-[0.15em] rounded-lg shadow-[0_0_15px_rgba(0,82,204,0.4)] transition-all flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        activeTab === "test-drive" ? "Confirm Booking" : "Get Instant Valuation"
                      )}
                    </Button>
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
