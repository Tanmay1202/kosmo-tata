import { Suspense } from "react";
import BookOnlinePage from "@/app/book-online/page";

export const metadata = {
  title: "Book Now | Kosmo Tata Jalandhar",
  description: "Exclusive vehicle booking form for new Tata Motors cars at Kosmo Tata. Priority delivery and immediate WhatsApp booking confirmation.",
};

export default function BookNowPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-32 text-center text-slate-500">Loading booking form...</div>}>
      <BookOnlinePage />
    </Suspense>
  );
}
