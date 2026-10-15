"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useDealership } from "@/context/DealershipContext";

export default function MegaMenuNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useDealership();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const links = [
    { name: "About", href: "/about", hasDropdown: true },
    { name: "Models", href: "/models", hasDropdown: true },
    { name: "Offers", href: "/offers" },
    { name: "Dealerships", href: "/dealer-locator" },
    { name: "Reviews", href: "/reviews" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      {/* Sticky Header */}
      <header id="global-mega-menu" className="sticky top-0 left-0 right-0 z-50 bg-tata-blue shadow-md text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Left — Logo (flex-1 balances the right spacer for true center alignment) */}
            <div className="flex-1 flex items-center">
              <Link
                href="/"
                className="font-display text-lg md:text-xl font-bold tracking-[0.15em] uppercase whitespace-nowrap"
              >
                tata.cars
              </Link>
            </div>

            {/* Center — Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
              {links.map((link) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-sm font-semibold tracking-wide hover:text-white/80 transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right — Hamburger on mobile / equal flex-1 spacer on desktop to keep nav centered */}
            <div className="flex-1 flex items-center justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className="lg:hidden hover:text-white/80 transition-colors p-2 -mr-2 touch-manipulation"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 top-16 md:top-[72px] bg-slate-900 text-white z-40 overflow-y-auto lg:hidden"
        >
          <nav className="px-4 py-8 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold tracking-wide uppercase border-b border-white/10 py-5 flex justify-between items-center"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-5 h-5 opacity-60" />}
              </Link>
            ))}
            <div className="pt-8 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal("test-drive");
                }}
                className="py-4 bg-white text-slate-900 text-center font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors rounded-sm"
              >
                Book Test Drive
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
