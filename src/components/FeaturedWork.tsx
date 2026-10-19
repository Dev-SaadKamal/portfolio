"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { Layers, ArrowUpRight } from "lucide-react";

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagshipProject = projects.find((p) => p.isFeaturedDominant) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== flagshipProject.id);

  return (
    <section id="work" className="py-20 sm:py-28 bg-warm-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-14 border-b border-warm-border gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5" />
              <span>[ SELECTED WORK &amp; CASE STUDIES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-ash leading-relaxed">
              A selection of products and applications I&apos;ve designed and developed across web development, business systems, and full-stack applications.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono text-ash shrink-0">
            <span>4 Production Deliverables</span>
            <span>·</span>
            <span className="text-charcoal font-semibold">100% Real Code</span>
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="pt-10 sm:pt-14 space-y-8 sm:space-y-12">
          
          {/* Dominant Full-Stack Flagship Project */}
          <div>
            <ProjectCard
              project={flagshipProject}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          </div>

          {/* Secondary Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Note & GitHub Link */}
        <div className="mt-12 sm:mt-16 p-6 rounded-xl bg-warm-surface border border-warm-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-charcoal">
              Want to see raw source code and repository structure?
            </h4>
            <p className="text-xs text-ash">
              All projects feature public repositories, commits, and modular full-stack code on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Dev-SaadKamal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-card hover:bg-warm-border border border-warm-borderDark rounded-md transition-all shrink-0"
          >
            <span>Visit @Dev-SaadKamal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
