"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, AlertTriangle, CarFront } from "lucide-react";

interface ShowroomStockWidgetProps {
  statusText: string;
  variant?: "badge" | "card";
  className?: string;
}

export default function ShowroomStockWidget({ statusText, variant = "badge", className = "" }: ShowroomStockWidgetProps) {
  // Simple heuristic to determine badge theme based on the text
  const isHighDemand = statusText.toLowerCase().includes("high demand") || statusText.toLowerCase().includes("pre-book");
  const isLimited = statusText.toLowerCase().includes("units available");
  
  const theme = isHighDemand 
    ? { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", icon: TrendingUp, dot: "bg-amber-500" } 
    : isLimited
      ? { color: "text-tata-blue", bg: "bg-tata-blue/10", border: "border-tata-blue/20", icon: AlertTriangle, dot: "bg-tata-blue" }
      : { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", icon: CheckCircle2, dot: "bg-emerald-500" };

  const Icon = theme.icon;

  if (variant === "card") {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white border border-gray-200 shadow-sm p-4 rounded-xl border ${theme.border} flex items-start gap-4 ${className}`}
      >
        <div className={`p-3 rounded-full ${theme.bg}`}>
          <CarFront className={`w-6 h-6 ${theme.color}`} />
        </div>
        <div>
          <h4 className="text-slate-900 font-medium text-sm tracking-wide mb-1 uppercase">Showroom Availability</h4>
          <p className={`text-xs font-bold tracking-widest uppercase flex items-center gap-2 ${theme.color}`}>
            <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse shadow-[0_0_8px_currentColor]`} />
            {statusText}
          </p>
        </div>
      </motion.div>
    );
  }

  // Default Badge Variant
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border ${theme.border} ${theme.bg} ${theme.color} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`} />
      {statusText}
    </div>
  );
}
