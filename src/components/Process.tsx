import React from "react";
import { processSteps } from "@/data/services";
import { GitCommit, CheckCircle2, Workflow } from "lucide-react";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-warm-surface/60 border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 sm:pb-16 border-b border-warm-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>[ SYSTEM PIPELINE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Execution Pipeline
          </h2>
          <p className="text-base sm:text-lg text-ash leading-relaxed">
            A structured, repeatable methodology from requirements gathering to production release.
          </p>
        </div>

        {/* System Pipeline Timeline Flow */}
        <div className="pt-12 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="relative rounded-2xl bg-warm-card border border-warm-border hover:border-warm-borderDark p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Step Header with Node Indicator */}
                  <div className="flex items-center justify-between pb-3 border-b border-warm-border">
                    <span className="font-mono text-xs font-bold text-ash group-hover:text-emerald-signal transition-colors">
                      STAGE {step.number}
                    </span>
                    <span className="font-mono text-xs text-charcoal/70 bg-warm-surface px-2 py-0.5 rounded border border-warm-border">
                      NODE 0{idx + 1}
                    </span>
                  </div>

                  {/* Stage Name & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-charcoal tracking-tight">
                      {step.name}
                    </h3>
                    <p className="text-xs font-mono text-emerald-signal font-medium uppercase tracking-wider">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-ash leading-relaxed">
                    {step.summary}
                  </p>

                  {/* Key Activities List */}
                  <div className="pt-2 space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ash">
                      Key Deliverables
                    </div>
                    {step.activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start space-x-2 text-xs text-charcoal/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-signal shrink-0 mt-0.5" />
                        <span className="leading-snug">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pipeline Progression indicator */}
                <div className="pt-4 border-t border-warm-border flex items-center justify-between text-[11px] font-mono text-ash">
                  <span>{idx === 3 ? "PRODUCTION READY" : "NEXT →"}</span>
                  <GitCommit className="w-4 h-4 text-emerald-signal" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Guarantee Microcopy */}
        <div className="mt-12 p-4 rounded-xl bg-warm-card border border-warm-border text-center text-xs font-mono text-ash">
          <span className="text-emerald-signal font-semibold mr-2">● RELIABILITY PRINCIPLE:</span>
          Continuous testing, staged reviews, and direct communication at every step of the journey.
        </div>
      </div>
    </section>
  );
}
