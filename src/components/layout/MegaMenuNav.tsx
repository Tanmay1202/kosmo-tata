"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useDealership } from "@/context/DealershipContext";

export default function MegaMenuNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useDealership();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About Kosmo Tata", href: "/about", hasDropdown: true },
    { name: "Models", href: "/models", hasDropdown: true },
    { name: "Offers", href: "/offers" },
    { name: "Reviews", href: "/reviews" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      {/* Sticky Header matching tata.cars */}
      <header id="global-mega-menu" className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-tata-blue shadow-md text-white`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-display text-xl font-bold tracking-[0.15em] uppercase">
                Kosmo.Tata
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {links.map((link) => (
                <div key={link.name} className="flex items-center">
                  <Link 
                    href={link.href}
                    className="text-sm font-semibold tracking-wide hover:text-white/80 transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <div className="hidden sm:block border-r border-white/30 pr-6">
                <Image 
                  src="/assets/images/icons/tata-blue-small-logo.png" 
                  alt="Tata Logo" 
                  width={40} 
                  height={40} 
                  className="brightness-0 invert object-contain" 
                />
              </div>
              <button aria-label="Search" className="hover:text-white/80 transition-colors">
                <Search className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu" 
                className="hover:text-white/80 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-slate-900 text-white z-40 overflow-y-auto">
          <div className="px-4 py-8 flex flex-col space-y-6">
            {links.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold tracking-wide uppercase border-b border-white/10 pb-4 flex justify-between items-center"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-6 h-6" />}
              </Link>
            ))}
            <div className="pt-8 flex flex-col gap-4">
              <Link 
                href="/dealer-locator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 border border-white text-center font-bold tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-colors"
              >
                Find a Dealer
              </Link>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); openModal('test-drive'); }}
                className="py-4 bg-white text-slate-900 text-center font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors"
              >
                Book Test Drive
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
