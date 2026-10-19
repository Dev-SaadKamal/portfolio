import React from "react";
import { 
  ExternalLink, 
  ShieldCheck, 
  Cpu,
  ArrowUpRight 
} from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProofOfWork() {
  const proofItems = [
    {
      title: "Public GitHub Repositories",
      tagline: "Verifiable Code Integrity",
      desc: "Every project features transparent, public Git repositories where you can inspect component modularity, API controllers, and commit history.",
      icon: GithubIcon,
      metric: "Open Source",
      link: "https://github.com/Dev-SaadKamal",
      linkText: "Inspect Repositories",
    },
    {
      title: "Live Production Environments",
      tagline: "Deployed & Accessible",
      desc: "All featured products are hosted on active cloud infrastructure (Vercel, Netlify) with continuous integration and verified uptime.",
      icon: ExternalLink,
      metric: "Live & Interactive",
      link: "https://intern-management-system-eight.vercel.app/",
      linkText: "Test Live Portal",
    },
    {
      title: "Role-Based Security & JWT",
      tagline: "Real Business Logic",
      desc: "Working implementations of JSON Web Token authentication, bcrypt password hashing, and role-based permissions preventing unauthorized mutations.",
      icon: ShieldCheck,
      metric: "Authenticated",
      link: "#work",
      linkText: "View Case Study",
    },
    {
      title: "MERN Stack Architectural Cohesion",
      tagline: "Client to Database",
      desc: "Hands-on implementation of the full software lifecycle: React UI state → Express endpoints → Mongoose document schemas.",
      icon: Cpu,
      metric: "Unified Stack",
      link: "#process",
      linkText: "View Pipeline",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-warm-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 sm:pb-16 border-b border-warm-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>[ VERIFIABLE EVIDENCE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Proof of Work
          </h2>
          <p className="text-base sm:text-lg text-ash leading-relaxed">
            No manufactured statistics or fake client quotes. Real codebases, live deployed applications, and transparent architecture.
          </p>
        </div>

        {/* 4 Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 sm:pt-16">
          {proofItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-warm-border">
                    <span className="font-mono text-xs font-bold text-ash group-hover:text-emerald-signal transition-colors">
                      EVIDENCE 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-emerald-signal bg-emerald-dim border border-emerald-signal/30 px-2.5 py-0.5 rounded flex items-center space-x-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.metric}</span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-charcoal tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-ash uppercase tracking-wider">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-ash leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-border">
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-emerald-signal transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
