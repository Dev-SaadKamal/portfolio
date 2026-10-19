import React from "react";
import { GraduationCap, Code2, Layers, Cpu } from "lucide-react";

export function TrustStrip() {
  const credibilityPillars = [
    {
      number: "01",
      title: "DAE Software Engineering",
      subtitle: "Formal Technical Foundation",
      description: "Rigorous diploma foundation in software engineering, algorithms, and computing fundamentals.",
      icon: GraduationCap,
    },
    {
      number: "02",
      title: "MERN Stack Developer",
      subtitle: "Specialized Stack Expertise",
      description: "Dedicated focus across React, Node.js, Express, and MongoDB to engineer unified web solutions.",
      icon: Code2,
    },
    {
      number: "03",
      title: "Full-Stack Web Applications",
      subtitle: "Production-Grade Delivery",
      description: "Building from database models and RESTful routing up to responsive, accessible client interfaces.",
      icon: Layers,
    },
    {
      number: "04",
      title: "SaaS & Business Systems",
      subtitle: "Operational Workflow Logic",
      description: "Engineering platforms for role-based administrative control, approvals, and user task execution.",
      icon: Cpu,
    },
  ];

  return (
    <section className="border-b border-warm-border bg-warm-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-warm-border">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ash">
            CORE FOUNDATIONS &amp; CREDIBILITY
          </span>
          <span className="font-mono text-[11px] text-emerald-signal font-semibold">
            ● HONEST POSITIONING
          </span>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
          {credibilityPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-6 rounded-xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-ash/80 group-hover:text-emerald-signal transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-warm-surface border border-warm-border flex items-center justify-center text-charcoal group-hover:text-emerald-signal group-hover:border-emerald-signal/30 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-charcoal tracking-tight group-hover:text-charcoal-deep">
                  {pillar.title}
                </h3>
                
                <p className="text-xs font-mono text-emerald-signal font-medium mt-1 uppercase tracking-wider">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-ash mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
