"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

export default function MegaMenuNav() {
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
    <header id="global-mega-menu" className="sticky top-0 left-0 right-0 z-50 bg-tata-blue shadow-md text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Left — Logo (flex-1 balances the right section for true center alignment) */}
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

          {/* Right — Kosmo Tata Logo & Three Lines Menu Icon (leads to /models) */}
          <div className="flex-1 flex items-center justify-end gap-2.5 sm:gap-3.5">
            <Link
              href="/"
              className="flex items-center group touch-manipulation"
              title="Kosmo Tata"
              aria-label="Kosmo Tata"
            >
              <div className="relative h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="Kosmo Tata Logo"
                  fill
                  className="object-contain brightness-110 drop-shadow-sm group-hover:scale-105 transition-transform"
                  sizes="44px"
                  priority
                />
              </div>
            </Link>

            {/* Three lines icon leading to models page */}
            <Link
              href="/models"
              className="hover:text-white/80 transition-colors p-1.5 sm:p-2 -mr-1 sm:-mr-2 touch-manipulation flex items-center text-white"
              aria-label="Explore all models"
              title="Explore all models"
            >
              <Menu className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
