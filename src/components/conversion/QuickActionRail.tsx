"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useDealership } from "@/context/DealershipContext";

interface ActionItem {
  id: string;
  label: string;
  iconPath: string;
  href: string;
  color: string;
}

const actions: ActionItem[] = [
  {
    id: "test-drive",
    label: "VIP Test Drive",
    iconPath: "/assets/images/icons/Reserve.svg",
    href: "#",
    color: "group-hover:text-amber-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:bg-amber-500/20",
  },
  {
    id: "trade-in",
    label: "Exchange Valuation",
    iconPath: "/assets/images/icons/car-preowned.svg",
    href: "#",
    color: "group-hover:text-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] group-hover:bg-emerald-400/20",
  },
  {
    id: "stock",
    label: "Showroom Stock",
    iconPath: "/assets/images/icons/find-dealer-icon.svg",
    href: "/dealer-locator",
    color: "group-hover:text-purple-400 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] group-hover:bg-purple-400/20",
  },
];

export default function QuickActionRail() {
  const { openModal } = useDealership();

  const handleActionClick = (e: React.MouseEvent, action: ActionItem) => {
    if (action.id === "test-drive" || action.id === "trade-in") {
      e.preventDefault();
      openModal(action.id as any);
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {actions.map((action, index) => (
        <motion.div
          key={action.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          className="relative group flex items-center justify-end"
        >
          {/* Tooltip Label (Expandable on hover) */}
          <div className="absolute right-14 pr-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pr-4 transition-all duration-300">
            <div className="bg-white-light/90 backdrop-blur-md border border-gray-200 text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded shadow-xl whitespace-nowrap">
              {action.label}
            </div>
          </div>

          {/* Action Button */}
          <Link
            href={action.href}
            onClick={(e) => handleActionClick(e, action)}
            className={`w-12 h-12 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-full text-slate-700 transition-all duration-300 border border-gray-200 bg-white-light/60 hover:bg-white relative overflow-hidden ${action.color}`}
            aria-label={action.label}
          >
            <Image 
              src={action.iconPath} 
              alt={action.label} 
              width={20} 
              height={20} 
              className="w-5 h-5 transition-transform group-hover:scale-110 invert brightness-200" 
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
