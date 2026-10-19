import React from "react";
import { techToolbox } from "@/data/services";
import { Wrench } from "lucide-react";

export function TechStack() {
  return (
    <section className="py-20 sm:py-28 bg-warm-surface/50 border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 sm:pb-16 border-b border-warm-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>[ ENGINEERING TOOLBOX ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            The Technical Stack
          </h2>
          <p className="text-base sm:text-lg text-ash leading-relaxed">
            The core technologies, libraries, and infrastructure tools I use daily to build robust production applications.
          </p>
        </div>

        {/* 4 Tool Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 sm:pt-16">
          {techToolbox.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all duration-300 space-y-5 shadow-xs"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between pb-4 border-b border-warm-border">
                <div>
                  <h3 className="text-xl font-bold text-charcoal tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-ash mt-1">
                    {group.description}
                  </p>
                </div>
                <span className="font-mono text-xs text-ash bg-warm-surface px-2 py-0.5 rounded border border-warm-border">
                  0{idx + 1}
                </span>
              </div>

              {/* Technologies List */}
              <div className="space-y-3">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-warm-surface border border-warm-border/80 hover:border-warm-borderDark transition-colors"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="font-mono text-xs font-bold text-charcoal">
                        {tech.name}
                      </span>
                      {tech.highlight && (
                        <span className="text-[10px] font-mono bg-emerald-dim text-emerald-signal border border-emerald-signal/30 px-1.5 py-0.2 rounded">
                          CORE
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-ash text-right max-w-[240px] truncate hidden sm:inline">
                      {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No arbitrary skill percentages note */}
        <div className="mt-12 p-4 rounded-xl bg-warm-card border border-warm-border flex items-center justify-between text-xs font-mono text-ash">
          <span>Engineered with functional composition, type safety, and clean separation of concerns.</span>
          <span className="text-emerald-signal font-semibold hidden sm:inline">● Real Codebases Only</span>
        </div>
      </div>
    </section>
  );
}
