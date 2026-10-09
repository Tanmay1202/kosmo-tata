"use client";

import { useDealership } from "@/context/DealershipContext";
import { Cloud, Wrench, Receipt, MapPin } from "lucide-react";
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
    <section className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hubItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start p-8 bg-[#f9f9f9] cursor-pointer hover:bg-gray-100 transition-colors h-[200px] justify-between"
              onClick={() => {
                if (item.actionType === "dealer") {
                  router.push("/dealer-locator");
                } else if (item.actionType === "service") {
                  router.push("/service/book-service");
                } else {
                  openModal(item.actionType as any);
                }
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
