"use client";

import { useDealership } from "@/context/DealershipContext";
import { Cloud, Wrench, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

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
    id: "dealer",
    title: "Dealer Locator",
    icon: MapPin,
    actionType: "dealer",
  },
];

export default function DealershipConversionHub() {
  const { openModal } = useDealership();
  const router = useRouter();

  return (
    <section className="w-full py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* 3 items: 1 col on xs, 3 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {hubItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 p-6 sm:p-8 bg-[#f9f9f9] hover:bg-gray-100 transition-colors text-left w-full sm:h-[180px] sm:justify-between focus-visible:outline-2 focus-visible:outline-tata-blue rounded-sm"
              onClick={() => {
                if (item.actionType === "dealer") {
                  router.push("/dealer-locator");
                } else if (item.actionType === "service") {
                  router.push("/service/book-service");
                } else {
                  openModal(item.actionType as "test-drive" | "trade-in" | "emi" | "service");
                }
              }}
            >
              <div className="text-[#1328E0] shrink-0">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl text-[#1328E0] font-medium">{item.title}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
