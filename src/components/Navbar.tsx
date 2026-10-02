"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5DFD7]/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="#hero" className="flex flex-col group focus:outline-none">
          <span className="font-serif text-2xl font-semibold tracking-tight text-[#272A2B] group-hover:text-[#3B5249] transition-colors">
            Dr. Maya Reynolds<span className="text-[#3B5249] font-normal font-sans text-lg">, PsyD</span>
          </span>
          <span className="text-xs uppercase tracking-wider text-[#5D6467] font-medium">
            Licensed Clinical Psychologist • Santa Monica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5D6467]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#3B5249] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#3B5249] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#3B5249] border border-[#3B5249]/30 rounded-full hover:bg-[#3B5249] hover:text-white transition-all duration-300 shadow-sm hover:shadow active:scale-95"
          >
            Schedule a Consultation
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#272A2B] focus:outline-none rounded-lg hover:bg-[#E8EFEA] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E5DFD7] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-[#272A2B]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-1.5 hover:text-[#3B5249] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-3 bg-[#3B5249] text-white text-sm font-semibold rounded-full shadow hover:bg-[#2D3F38] transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
