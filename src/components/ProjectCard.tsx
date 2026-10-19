"use client";

import React from "react";
import { Project } from "@/types";
import { 
  ArrowUpRight, 
  CheckCircle, 
  Clock, 
  Terminal,
  Activity,
  Maximize2
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  if (project.isFeaturedDominant) {
    // Dominant Flagship Layout for Intern Management System
    return (
      <div className="relative rounded-2xl bg-warm-card border-2 border-charcoal/20 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-signal/60 group">
        {/* Dominant Banner Header */}
        <div className="px-6 sm:px-8 py-4 bg-charcoal text-warm-white flex flex-wrap items-center justify-between gap-3 border-b border-charcoal-border">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-emerald-signal bg-emerald-dim border border-emerald-signal/30 px-2 py-0.5 rounded">
              FLAGSHIP 01
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-ash-light">
              MERN Full-Stack System
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-ash-light">
            <span className="w-2 h-2 rounded-full bg-emerald-signal animate-pulse" />
            <span>Live in Production</span>
          </div>
        </div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
          
          {/* Left Column: Project Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="font-mono text-xs font-semibold text-emerald-signal uppercase tracking-wider">
                {project.category}
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight group-hover:text-charcoal-deep transition-colors">
                {project.title}
              </h3>

              <p className="text-base text-ash leading-relaxed">
                {project.description}
              </p>

              {/* Business & Technical Workflow Highlights */}
              <div className="pt-2 space-y-2.5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal flex items-center space-x-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-signal" />
                  <span>Architecture &amp; Roles</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/90">
                  <div className="p-2.5 rounded-lg bg-warm-surface border border-warm-border">
                    <span className="font-semibold text-charcoal block">Role-Based Auth</span>
                    <span className="text-ash text-[11px]">Admin oversight &amp; intern tasks</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-warm-surface border border-warm-border">
                    <span className="font-semibold text-charcoal block">Lifecycle Tracking</span>
                    <span className="text-ash text-[11px]">Submissions, approvals &amp; reviews</span>
                  </div>
                </div>
              </div>

              {/* Stack Badges */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-ash uppercase tracking-wider mb-2">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-mono bg-warm-surface border border-warm-borderDark text-charcoal rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-warm-border flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all shadow-xs active:translate-y-0.5"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-surface hover:bg-warm-border border border-warm-borderDark rounded-md transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>

              <button
                onClick={() => onOpenCaseStudy(project)}
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal/80 hover:text-charcoal transition-colors ml-auto cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-emerald-signal" />
                <span>Case Study Breakdown</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Dashboard Preview Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#13161C] border border-[#262B36] p-4 sm:p-5 text-warm-white shadow-xl">
              {/* Mockup Toolbar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#222733] mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-warm/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-signal/80" />
                  <span className="font-mono text-[11px] text-ash-light ml-2">
                    ims-portal.internal/dashboard
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-[#1E232E] text-emerald-signal px-2 py-0.5 rounded border border-emerald-signal/30">
                  JWT_VALID
                </span>
              </div>

              {/* Mockup Body: Admin Console View */}
              <div className="space-y-3.5 text-xs font-mono">
                {/* Metrics header */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded bg-[#1A1F29] border border-[#282F3E]">
                    <span className="text-[10px] text-ash-light block">Active Cohort</span>
                    <span className="text-sm font-bold text-warm-white mt-0.5 block">Summer &apos;24</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#1A1F29] border border-[#282F3E]">
                    <span className="text-[10px] text-ash-light block">Submissions</span>
                    <span className="text-sm font-bold text-emerald-signal mt-0.5 block">28 Completed</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#1A1F29] border border-[#282F3E]">
                    <span className="text-[10px] text-ash-light block">Pending Review</span>
                    <span className="text-sm font-bold text-amber-warm mt-0.5 block">4 Queue</span>
                  </div>
                </div>

                {/* Assignment Pipeline Simulation */}
                <div className="p-3 rounded bg-[#171B24] border border-[#262B38] space-y-2">
                  <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-[#242A37]">
                    <span className="text-warm-white font-semibold">Assignment: REST Auth Pipeline</span>
                    <span className="text-emerald-signal">Role: Admin</span>
                  </div>

                  <div className="space-y-1.5 pt-1 text-[11px]">
                    <div className="flex items-center justify-between p-2 rounded bg-[#1D222E]">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-signal" />
                        <span className="text-warm-white">Intern #104: Auth Middleware PR</span>
                      </div>
                      <span className="text-emerald-signal font-semibold">APPROVED</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-[#1D222E]">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3.5 h-3.5 text-amber-warm" />
                        <span className="text-warm-white">Intern #108: Task Schema Models</span>
                      </div>
                      <span className="text-amber-warm font-semibold">PENDING_REVIEW</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-[#1D222E]">
                      <div className="flex items-center space-x-2">
                        <Terminal className="w-3.5 h-3.5 text-ash" />
                        <span className="text-warm-white">Intern #112: Integration Test Suite</span>
                      </div>
                      <span className="text-ash-light">SUBMITTED</span>
                    </div>
                  </div>
                </div>

                {/* Schema validation snippet */}
                <div className="p-2.5 rounded bg-[#0E1015] border border-[#222733] text-[10px] text-ash-light flex items-center justify-between">
                  <span>Backend: Node/Express + Mongoose ODM</span>
                  <span className="text-emerald-signal">Auth: Bearer JWT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Secondary Card Layout (Helplytics AI, Quiz App, Todo App)
  return (
    <div className="relative rounded-2xl bg-warm-card border border-warm-border hover:border-warm-borderDark shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* Top Bar with Number & Category */}
      <div className="px-6 py-4 bg-warm-surface border-b border-warm-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs font-bold text-ash">
            {project.number}
          </span>
          <span className="font-mono text-xs text-charcoal/80 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <span className="text-[11px] font-mono text-emerald-signal">
          ● VERIFIED
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-7 space-y-4">
        {project.imageUrl && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-warm-border bg-warm-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight group-hover:text-charcoal-deep transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-ash leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stack Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-2 py-0.5 text-[11px] font-mono bg-warm-surface border border-warm-borderDark text-charcoal rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Key Feature Highlight */}
        <div className="p-3 rounded-lg bg-warm-surface/70 border border-warm-border text-xs text-charcoal/90 space-y-1">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ash">
            Core Implementation
          </div>
          <p className="text-xs text-charcoal/80">
            {project.keyFeatures[0]}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-4 bg-warm-surface/50 border-t border-warm-border flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded transition-all shadow-2xs"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-2.5 py-1.5 text-xs font-semibold text-ash hover:text-charcoal transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Code</span>
          </a>
        </div>

        <button
          onClick={() => onOpenCaseStudy(project)}
          className="text-xs font-mono font-medium text-charcoal/80 hover:text-emerald-signal transition-colors underline underline-offset-4 cursor-pointer"
        >
          Case Study →
        </button>
      </div>
    </div>
  );
}
