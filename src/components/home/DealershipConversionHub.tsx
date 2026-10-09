"use client";

import Image from "next/image";
import { useDealership } from "@/context/DealershipContext";
import { Cloud, Wrench, Receipt, MapPin } from "lucide-react";

const hubItems = [
  {
    id: "test-drive",
    title: "Book a Test Drive",
    icon: Cloud,
    actionType: "test-drive",
  },
  {
    id: "service",
    title: "Book a Service",
    icon: Wrench,
    actionType: "service",
  },
  {
    id: "financing",
    title: "Car Financing",
    icon: Receipt,
    actionType: "financing",
  },
  {
    id: "dealer",
    title: "Dealer Locator",
    icon: MapPin,
    actionType: "dealer",
  },
];

export default function DealershipConversionHub() {
  const { openModal } = useDealership();

  return (
    <section className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hubItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start p-8 bg-[#f9f9f9] cursor-pointer hover:bg-gray-100 transition-colors h-[200px] justify-between"
              onClick={() => {
                if (item.actionType === "test-drive") openModal("test-drive");
              }}
            >
              <div className="text-[#1328E0]">
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-[#1328E0] font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

