import React from "react";
import { 
  Code2, 
  Clock, 
  FileText, 
  ArrowUpRight, 
  Terminal, 
  CheckCircle2,
  FolderGit2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function About() {
  const credentials = [
    {
      title: "1+ Year Coding Experience",
      label: "Applied Practice",
      desc: "Daily hands-on software development building real web applications, APIs, and client-side systems.",
      icon: Clock,
    },
    {
      title: "10+ Projects Built",
      label: "Shipped Deliverables",
      desc: "End-to-end full-stack MERN platforms, interactive utilities, and responsive production apps.",
      icon: FolderGit2,
    },
    {
      title: "MERN Stack Specialization",
      label: "Core Engineering",
      desc: "Unified full-stack development covering React, Next.js, Node.js, Express, and MongoDB.",
      icon: Code2,
    },
  ];

  const traits = [
    "Problem Solver",
    "UI Enthusiast",
    "Full-Stack Mind",
    "Always Learning",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-warm-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 sm:pb-16 border-b border-warm-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-signal flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>[ PROFESSIONAL BACKGROUND ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
            Turning Ideas into Interfaces that Feel Alive
          </h2>
          <p className="text-base sm:text-lg text-ash leading-relaxed">
            A software engineer focused on building practical, dependable, and high-performance digital products.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-12 sm:pt-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-neutral max-w-none space-y-5 text-base sm:text-lg text-ash leading-relaxed">
              <p>
                I&apos;m <span className="text-charcoal font-semibold">Saad Kamal</span>, a passionate <span className="text-charcoal font-semibold">MERN Stack Developer</span> with a strong foundation in modern web development technologies, including HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js. I enjoy transforming ideas into clean, responsive, and interactive web applications that provide seamless user experiences across different devices.
              </p>
              <p>
                My focus is on writing maintainable code, creating intuitive user interfaces, and building applications that are both visually appealing and highly functional.
              </p>
              <p>
                Currently, I am expanding my backend development expertise by working with <span className="text-charcoal font-semibold">Node.js, Express.js, and MongoDB</span> through hands-on projects and continuous learning. As a dedicated learner, I am always looking for opportunities to contribute to real-world projects, collaborate with other developers, and grow into a skilled full-stack engineer capable of building complete, scalable web solutions.
              </p>
            </div>

            {/* Trait Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-warm-surface border border-warm-borderDark text-charcoal font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Dev-SaadKamal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-surface hover:bg-warm-border border border-warm-borderDark rounded-md transition-all shadow-2xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-ash" />
              </a>

              <a
                href="https://www.linkedin.com/in/i-muhammadsaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-warm-surface hover:bg-warm-border border border-warm-borderDark rounded-md transition-all shadow-2xs"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-ash" />
              </a>

              <a
                href="mailto:saadkamal937@gmail.com?subject=Resume%20Inquiry%20-%20Saad%20Kamal"
                className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal-deep bg-emerald-signal hover:bg-emerald-hover rounded-md transition-all shadow-2xs"
              >
                <FileText className="w-4 h-4" />
                <span>Request Resume / CV</span>
              </a>
            </div>
          </div>

          {/* Credentials & Fact Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-1 rounded-2xl bg-warm-surface border border-warm-border space-y-2">
              {/* Profile Card Header with Saad's Portrait */}
              <div className="px-5 py-4 border-b border-warm-border flex items-center space-x-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-signal/60 shrink-0 bg-warm-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://z-cdn-media.chatglm.cn/files/7b65cdcc-c363-4367-a4ce-30442327646e.jpg?auth_key=1882473905-7453c75454f64c97a894b2ac87528823-0-7bf8cccd0424de8f067dc34350c3f81a"
                    alt="Saad Kamal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-charcoal">Saad Kamal</h4>
                  <span className="font-mono text-[11px] text-emerald-signal block font-medium">
                    MERN Stack Developer · Karachi, PK
                  </span>
                </div>
              </div>

              <div className="p-3 space-y-3">
                {credentials.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-warm-card border border-warm-border hover:border-warm-borderDark transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-emerald-signal uppercase tracking-wider">
                          {item.label}
                        </span>
                        <Icon className="w-4 h-4 text-ash" />
                      </div>
                      <h4 className="text-base font-bold text-charcoal">
                        {item.title}
                      </h4>
                      <p className="text-xs text-ash leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-warm-card border border-warm-border flex items-center space-x-3 text-xs text-ash">
              <CheckCircle2 className="w-4 h-4 text-emerald-signal shrink-0" />
              <span>Available for full-stack client engagements, MVP sprints, and technical collaborations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
