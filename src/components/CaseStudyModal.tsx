"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { 
  X, 
  ExternalLink, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Cloud, 
  CheckCircle2, 
  ArrowRight,
  Code2
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-charcoal-deep/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-warm-white text-charcoal rounded-2xl border border-warm-borderDark shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-warm-border bg-warm-surface/80">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-emerald-signal bg-emerald-dim border border-emerald-signal/30 px-2.5 py-1 rounded">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs text-ash uppercase tracking-wider hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-ash hover:text-charcoal hover:bg-warm-border transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8">
          
          {/* Title & Tagline */}
          <div className="space-y-3">
            <div className="font-mono text-[11px] font-semibold tracking-widest text-emerald-signal uppercase">
              {project.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-ash leading-relaxed">
              {project.description}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all shadow-xs"
              >
                <span>Launch Live Product</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-surface hover:bg-warm-border border border-warm-borderDark rounded-md transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View GitHub Source</span>
              </a>
            </div>
          </div>

          {/* Section: Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-warm-surface border border-warm-border">
              <div className="font-mono text-xs font-bold text-ash uppercase tracking-wider mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-warm" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-charcoal/90 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-dim/40 border border-emerald-signal/25">
              <div className="font-mono text-xs font-bold text-emerald-signal uppercase tracking-wider mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-signal" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-charcoal/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Section: My Role & Direct Implementation */}
          <div className="p-5 rounded-xl bg-warm-card border border-warm-border">
            <div className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider mb-2 flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-emerald-signal" />
              <span>My Role &amp; Technical Execution</span>
            </div>
            <p className="text-sm text-ash leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* Section: Technical Architecture Breakdown */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ash">
              Technical Architecture &amp; System Decisions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-warm-surface border border-warm-border">
                <div className="flex items-center space-x-2 text-charcoal font-semibold text-xs mb-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-signal" />
                  <span>Frontend</span>
                </div>
                <p className="text-xs text-ash leading-relaxed">
                  {project.architecture.frontend}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-warm-surface border border-warm-border">
                <div className="flex items-center space-x-2 text-charcoal font-semibold text-xs mb-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-signal" />
                  <span>Backend &amp; API</span>
                </div>
                <p className="text-xs text-ash leading-relaxed">
                  {project.architecture.backend}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-warm-surface border border-warm-border">
                <div className="flex items-center space-x-2 text-charcoal font-semibold text-xs mb-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-signal" />
                  <span>Database Layer</span>
                </div>
                <p className="text-xs text-ash leading-relaxed">
                  {project.architecture.database}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-warm-surface border border-warm-border">
                <div className="flex items-center space-x-2 text-charcoal font-semibold text-xs mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-signal" />
                  <span>Authentication</span>
                </div>
                <p className="text-xs text-ash leading-relaxed">
                  {project.architecture.auth}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-warm-surface border border-warm-border sm:col-span-2 lg:col-span-2">
                <div className="flex items-center space-x-2 text-charcoal font-semibold text-xs mb-1.5">
                  <Cloud className="w-3.5 h-3.5 text-emerald-signal" />
                  <span>Deployment &amp; Hosting</span>
                </div>
                <p className="text-xs text-ash leading-relaxed">
                  {project.architecture.deployment}
                </p>
              </div>
            </div>
          </div>

          {/* Section: Key Features */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ash">
              Core Implemented Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-lg bg-warm-surface border border-warm-border text-xs text-charcoal"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-signal shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technologies Used */}
          <div className="space-y-3 pt-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ash">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-mono bg-warm-card border border-warm-borderDark text-charcoal rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-t border-warm-border bg-warm-surface/80">
          <span className="text-xs font-mono text-ash">
            Saad Kamal Case Study Archive
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-ash hover:text-charcoal uppercase tracking-wider transition-colors"
            >
              Close
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all shadow-xs"
            >
              <span>Explore Live</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
