"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-warm-surface/80 border-t border-warm-border text-charcoal py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-warm-border">
          
          {/* Identity & Statement */}
          <div className="space-y-2 max-w-md">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight uppercase hover:text-emerald-signal transition-colors"
            >
              Saad Kamal
            </Link>
            <p className="text-xs font-mono text-emerald-signal uppercase tracking-wider font-semibold">
              MERN Stack Developer
            </p>
            <p className="text-xs text-ash leading-relaxed">
              Building modern web applications, SaaS products, and scalable business systems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-charcoal/80">
            <a href="#work" className="hover:text-emerald-signal transition-colors">
              Work
            </a>
            <a href="#services" className="hover:text-emerald-signal transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-emerald-signal transition-colors">
              About
            </a>
            <a href="#process" className="hover:text-emerald-signal transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-emerald-signal transition-colors">
              Contact
            </a>
            <a
              href="https://github.com/Dev-SaadKamal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-signal transition-colors flex items-center space-x-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/i-muhammadsaad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-signal transition-colors flex items-center space-x-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/dev_saadkamal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-signal transition-colors"
            >
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/DevSaadKamal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-signal transition-colors"
            >
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ash">
          <div className="flex items-center space-x-3">
            <span>© {new Date().getFullYear()} Saad Kamal. All rights reserved.</span>
            <span>·</span>
            <span className="text-emerald-signal">Built with Next.js &amp; Tailwind</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-xs text-charcoal hover:text-emerald-signal transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
