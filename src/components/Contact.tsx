"use client";

import React, { useState } from "react";
import { 
  Send, 
  Mail, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectScope: "",
    projectType: "Full-Stack Web Application",
    budget: "$1,000 – $3,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = "saadkamal937@gmail.com";

  const projectTypes = [
    "Full-Stack Web Application",
    "SaaS MVP & Prototype",
    "Business Management System",
    "E-Commerce & Storefront",
    "Internal Dashboard / Portal",
    "Other Custom Software",
  ];

  const budgetRanges = [
    "< $1,000",
    "$1,000 – $3,000",
    "$3,000 – $5,000",
    "$5,000+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Build mailto URI as direct fallback for instant transmission
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
What I'm Building: ${formData.projectScope}

Project Details:
${formData.message}`
    );

    // Trigger mailto client
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-warm-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 sm:pb-16 border-b border-warm-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>[ PROJECT INITIATION ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Let&apos;s build something useful.
          </h2>
          <p className="text-base sm:text-lg text-ash leading-relaxed">
            Tell me about your product requirements, business workflow, or development goals.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details vs Project Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-12 sm:pt-16">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-charcoal">
                Direct Channels
              </h3>
              <p className="text-sm text-ash leading-relaxed">
                If you prefer contacting directly without filling out the project questionnaire, feel free to drop an email or connect on professional networks.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="p-4 rounded-xl bg-warm-card border border-warm-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-surface border border-warm-border flex items-center justify-center text-emerald-signal">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-ash block uppercase">Direct Email</span>
                    <a
                      href={`mailto:${directEmail}`}
                      className="font-sans font-semibold text-charcoal hover:text-emerald-signal transition-colors text-sm"
                    >
                      {directEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-[11px] bg-warm-surface hover:bg-warm-border text-ash hover:text-charcoal rounded border border-warm-borderDark transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/i-muhammadsaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-surface border border-warm-border flex items-center justify-center text-[#0077b5]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-ash block uppercase">Professional Network</span>
                    <span className="font-sans font-semibold text-charcoal group-hover:text-emerald-signal transition-colors text-sm">
                      linkedin.com/in/i-muhammadsaad
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ash group-hover:text-charcoal" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Dev-SaadKamal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-surface border border-warm-border flex items-center justify-center text-charcoal">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-ash block uppercase">Source Code &amp; Repositories</span>
                    <span className="font-sans font-semibold text-charcoal group-hover:text-emerald-signal transition-colors text-sm">
                      github.com/Dev-SaadKamal
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ash group-hover:text-charcoal" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dev_saadkamal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-surface border border-warm-border flex items-center justify-center text-[#E4405F]">
                    <span className="text-xs font-bold">IG</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-ash block uppercase">Instagram</span>
                    <span className="font-sans font-semibold text-charcoal group-hover:text-emerald-signal transition-colors text-sm">
                      @dev_saadkamal
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ash group-hover:text-charcoal" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/DevSaadKamal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-surface border border-warm-border flex items-center justify-center text-[#1877F2]">
                    <span className="text-xs font-bold">FB</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-ash block uppercase">Facebook</span>
                    <span className="font-sans font-semibold text-charcoal group-hover:text-emerald-signal transition-colors text-sm">
                      DevSaadKamal
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ash group-hover:text-charcoal" />
              </a>
            </div>

            {/* Reassuring note */}
            <div className="p-4 rounded-xl bg-warm-surface border border-warm-border text-xs text-ash leading-relaxed">
              <span className="font-semibold text-charcoal block mb-1">
                Collaborative Approach:
              </span>
              Usually the first conversation is simply about understanding the idea, determining feasibility, and exploring technical pathways.
            </div>
          </div>

          {/* Right Column: Structured Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-warm-card border border-warm-border shadow-xs">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-dim border border-emerald-signal/40 flex items-center justify-center text-emerald-signal mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-sm text-ash max-w-md mx-auto">
                    Your email client should have opened with your project inquiry details pre-filled. If it did not, you can copy your message or email directly at <strong className="text-charcoal">{directEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-surface hover:bg-warm-border border border-warm-borderDark rounded-md transition-colors cursor-pointer"
                  >
                    Edit Inquiry Details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-semibold">
                        Your Name <span className="text-emerald-signal">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border focus:border-emerald-signal focus:outline-hidden text-sm text-charcoal transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-semibold">
                        Work Email <span className="text-emerald-signal">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border focus:border-emerald-signal focus:outline-hidden text-sm text-charcoal transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-semibold">
                      Project Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-2 text-xs rounded-lg text-left transition-all border cursor-pointer ${
                            formData.projectType === type
                              ? "bg-emerald-dim text-charcoal font-semibold border-emerald-signal/60"
                              : "bg-warm-surface text-ash hover:text-charcoal border-warm-border"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range Selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-semibold">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`px-2.5 py-2 text-xs rounded-lg text-center transition-all border font-mono cursor-pointer ${
                            formData.budget === range
                              ? "bg-emerald-dim text-charcoal font-semibold border-emerald-signal/60"
                              : "bg-warm-surface text-ash hover:text-charcoal border-warm-border"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* What are you building? */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-semibold">
                      What are you building? (Brief Headline)
                    </label>
                    <input
                      type="text"
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      placeholder="e.g. Internal operations portal for our logistics team"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border focus:border-emerald-signal focus:outline-hidden text-sm text-charcoal transition-colors"
                    />
                  </div>

                  {/* Detailed Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal font-semibold">
                      Project Details &amp; Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your target users, timeline expectations, must-have features, or current challenges..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border focus:border-emerald-signal focus:outline-hidden text-sm text-charcoal transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button & Microcopy */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all shadow-sm active:translate-y-0.5 cursor-pointer"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <p className="text-center text-[11px] font-mono text-ash">
                      Usually the first conversation is simply about understanding the idea.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
