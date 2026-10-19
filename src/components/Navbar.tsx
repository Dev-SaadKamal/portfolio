"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-warm-white/95 backdrop-blur-md border-b border-warm-border shadow-xs"
          : "py-5 sm:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex items-center space-x-2 text-charcoal tracking-tight"
          >
            <span className="font-bold text-lg sm:text-xl tracking-tight uppercase group-hover:text-emerald-signal transition-colors">
              Saad Kamal
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono uppercase bg-warm-surface border border-warm-border text-ash rounded">
              MERN
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-charcoal hover:underline decoration-emerald-signal decoration-2 underline-offset-8 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all duration-200 shadow-sm active:translate-y-0.5"
            >
              <span>Let&apos;s Build Something</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="#contact"
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-charcoal-deep bg-emerald-signal rounded-md"
            >
              Let&apos;s Talk
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-charcoal-subtle focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 bg-warm-card border border-warm-border rounded-xl shadow-lg space-y-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-charcoal hover:text-emerald-signal transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-warm-border flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md text-center"
              >
                <span>Let&apos;s Build Something</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-between text-xs font-mono text-ash pt-1">
                <span>DAE Software Engineering</span>
                <span className="text-emerald-signal font-semibold">● Available Now</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
