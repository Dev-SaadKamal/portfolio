import React from "react";
import { services } from "@/data/services";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-warm-surface/50 border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 sm:pb-16 border-b border-warm-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ WHAT I BUILD ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            From Idea to Production
          </h2>
          <p className="text-base sm:text-lg text-ash leading-relaxed">
            I help businesses and startups turn requirements into reliable web products.
          </p>
        </div>

        {/* 4 Premium Service Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 sm:pt-16">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-2xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 group shadow-xs hover:shadow-md"
            >
              <div className="space-y-5">
                {/* Service Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-warm-border">
                  <span className="font-mono text-xs font-bold text-ash group-hover:text-emerald-signal transition-colors">
                    SERVICE {service.number}
                  </span>
                  <span className="font-mono text-[11px] text-charcoal/80 bg-warm-surface px-2.5 py-1 rounded border border-warm-border">
                    {service.tech}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-charcoal tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-signal">
                    {service.headline}
                  </p>
                </div>

                {/* Suited For Tags */}
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ash mb-2">
                    Suited For:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.suitedFor.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 text-xs bg-warm-surface text-charcoal/90 rounded border border-warm-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem & Solution Breakdown */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-lg bg-warm-surface border border-warm-border text-xs">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-warm block mb-1">
                      The Challenge
                    </span>
                    <p className="text-ash leading-relaxed">
                      {service.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-emerald-dim/30 border border-emerald-signal/20 text-xs">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-signal block mb-1">
                      The Engineered Solution
                    </span>
                    <p className="text-charcoal leading-relaxed font-medium">
                      {service.solution}
                    </p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ash">
                    Key Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-charcoal/80"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-signal shrink-0" />
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Bottom CTA */}
              <div className="pt-4 border-t border-warm-border">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-emerald-signal transition-colors"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
