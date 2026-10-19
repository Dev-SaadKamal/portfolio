import React from "react";
import { principles } from "@/data/services";
import { Briefcase, Compass, Network, Code, MessageSquare } from "lucide-react";

export function WhyWorkWithMe() {
  const icons = [Briefcase, Network, Code, MessageSquare];

  return (
    <section className="py-20 sm:py-28 bg-warm-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 sm:pb-16 border-b border-warm-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
            <Compass className="w-3.5 h-3.5" />
            <span>[ PRODUCT ENGINEERING ETHOS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight">
            Built with the mindset of a product engineer.
          </h2>
          <p className="text-base sm:text-lg text-ash leading-relaxed">
            I approach software from the perspective of both engineering longevity and real product utility.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {principles.map((item, idx) => {
            const Icon = icons[idx] || Code;
            return (
              <div
                key={item.number}
                className="relative p-6 sm:p-7 rounded-2xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-warm-border">
                    <span className="font-mono text-xs font-bold text-ash group-hover:text-emerald-signal transition-colors">
                      PRINCIPLE {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-warm-surface border border-warm-border flex items-center justify-center text-charcoal group-hover:text-emerald-signal transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-charcoal/90 leading-snug">
                    {item.description}
                  </p>

                  <p className="text-xs text-ash leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-border text-[11px] font-mono text-emerald-signal font-semibold">
                  ✓ NO SHORTCUTS
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
