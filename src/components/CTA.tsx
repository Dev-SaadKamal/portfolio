"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { GithubIcon } from "./Icons";

export function CTA() {
  const [copied, setCopied] = useState(false);
  const email = "saadkamal937@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="py-20 sm:py-28 bg-charcoal text-warm-white relative overflow-hidden editorial-grid-dark">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-dim rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-charcoal-subtle border border-charcoal-border text-xs font-mono text-emerald-signal">
          <span className="w-2 h-2 rounded-full bg-emerald-signal animate-pulse" />
          <span>CURRENT STATUS: ACCEPTING SELECT NEW PROJECTS</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warm-white leading-tight">
            Have an idea worth building?
          </h2>
          <p className="text-base sm:text-xl text-ash-light max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re validating a startup idea, improving an existing product, or need a full-stack developer for your next project, let&apos;s talk.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all shadow-md active:translate-y-0.5"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/Dev-SaadKamal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-warm-white bg-charcoal-subtle hover:bg-[#2C313C] border border-[#3A404E] rounded-md transition-all active:translate-y-0.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub</span>
          </a>
        </div>

        {/* Direct Email Pill with Copy Feature */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-[#111317] border border-[#2B303C] text-xs font-mono">
            <Mail className="w-4 h-4 text-emerald-signal" />
            <span className="text-warm-white select-all">{email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1 text-ash-light hover:text-warm-white transition-colors ml-1 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <span className="flex items-center text-emerald-signal text-[11px] font-sans">
                  <Check className="w-3.5 h-3.5 mr-1" /> Copied
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Supporting Assurance Microcopy */}
        <p className="text-xs font-mono text-ash-light pt-2">
          Open to freelance projects, collaborations, and software development opportunities.
        </p>
      </div>
    </section>
  );
}
