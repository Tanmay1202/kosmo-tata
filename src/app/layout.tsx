import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MegaMenuNav from "@/components/layout/MegaMenuNav";
import { DealershipProvider } from "@/context/DealershipContext";
import LeadCaptureModal from "@/components/conversion/LeadCaptureModal";
import FloatingBookNowButton from "@/components/ui/FloatingBookNowButton";
import Footer from "@/components/layout/Footer";

// â”€â”€â”€ Brand Fonts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// ParallelDisplay â€” cinematic display / heading typeface
const parallelDisplay = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ParallelDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ParallelDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ParallelDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-parallel-display",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

// Supreme â€” clean sans-serif for UI body copy and labels
const supreme = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Supreme-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Supreme-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Supreme-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Supreme-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// â”€â”€â”€ Metadata â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const metadata: Metadata = {
  title: "Tata Motors Flagship Digital Dealership | VIP Experience & 360° Showroom",
  description: "Explore the full Tata Motors lineup with our interactive 360° digital configurator, instant trade-in valuation, and VIP doorstep test drive booking.",
  keywords: ["Tata Motors", "luxury dealership", "SUV", "EV", "Sierra", "Harrier", "Curvv", "test drive", "360° showroom", "trade-in"],
  openGraph: {
    siteName: "Tata Motors Flagship Digital Dealership",
    locale: "en_IN",
    type: "website",
    title: "Tata Motors Flagship Digital Dealership | VIP Experience & 360° Showroom",
    description: "Explore the full Tata Motors lineup with our interactive 360° digital configurator, instant trade-in valuation, and VIP doorstep test drive booking.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// Viewport export ensures proper mobile meta viewport is set by Next.js
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
  themeColor: "#2334f5",
};

// â”€â”€â”€ Root Layout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${parallelDisplay.variable}
        ${supreme.variable}
        h-full antialiased scroll-smooth bg-[#2f3032]
      `}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-supreme">
        <DealershipProvider>
          <MegaMenuNav />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <LeadCaptureModal />
          <FloatingBookNowButton />
        </DealershipProvider>
      </body>
    </html>
  );
}

