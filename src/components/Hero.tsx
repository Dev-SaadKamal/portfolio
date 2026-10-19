"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { ProductArchitectureVisual } from "./ProductArchitectureVisual";

export function Hero() {
  const marqueeItems = [
    "MERN STACK",
    "REACT.JS",
    "NEXT.JS",
    "NODE.JS",
    "EXPRESS.JS",
    "MONGODB",
    "TYPESCRIPT",
    "TAILWIND CSS",
    "REST APIS",
    "JWT AUTHENTICATION",
    "FULL-STACK ARCHITECTURE",
  ];

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden editorial-grid border-b border-warm-border">
      {/* Background Ambience / Subtle Tone */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-dim rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-warm-surface border border-warm-border text-charcoal shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-signal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-signal" />
              </span>
              <span className="font-mono text-xs sm:text-xs tracking-wide text-charcoal/90">
                Available for freelance &amp; development opportunities
              </span>
            </div>

            {/* Primary Editorial Headline */}
            <div className="space-y-3">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
                <span>[ PRODUCT &amp; FULL-STACK ENGINEERING ]</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.12]">
                Building digital products that turn ideas into working businesses.
              </h1>
            </div>

            {/* Honest, Clear Supporting Narrative */}
            <p className="text-base sm:text-lg text-ash leading-relaxed max-w-2xl font-normal">
              I&apos;m <span className="font-semibold text-charcoal">Saad Kamal</span>, a MERN Stack Developer crafting clean, responsive, and interactive web applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#work"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all shadow-sm active:translate-y-0.5 group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal bg-warm-surface hover:bg-warm-border border border-warm-borderDark rounded-md transition-all active:translate-y-0.5"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-ash" />
              </a>
            </div>

            {/* Technical Sub-proof points */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-ash">
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-warm" />
                <span>DAE Software Engineering</span>
              </div>
              <div>·</div>
              <div>End-to-End MERN Stack</div>
              <div>·</div>
              <div>Production-Ready Code</div>
            </div>
          </div>

          {/* Right Column: Original Product Architecture Visual */}
          <div className="lg:col-span-5 relative">
            <ProductArchitectureVisual />
          </div>
        </div>
      </div>

      {/* Under-Hero Subtle Technical Marquee Strip */}
      <div className="mt-14 sm:mt-18 pt-5 pb-5 border-t border-b border-warm-border bg-warm-surface/70 overflow-hidden relative">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          <div className="flex items-center space-x-8 sm:space-x-12 px-4 shrink-0 font-mono text-xs sm:text-sm text-ash font-medium tracking-widest">
            {marqueeItems.map((item, idx) => (
              <span key={`first-${idx}`} className="flex items-center space-x-6">
                <span className="hover:text-charcoal transition-colors">{item}</span>
                <span className="text-emerald-signal/60">◆</span>
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-8 sm:space-x-12 px-4 shrink-0 font-mono text-xs sm:text-sm text-ash font-medium tracking-widest" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <span key={`second-${idx}`} className="flex items-center space-x-6">
                <span className="hover:text-charcoal transition-colors">{item}</span>
                <span className="text-emerald-signal/60">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
