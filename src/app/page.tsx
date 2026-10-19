import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ProofOfWork } from "@/components/ProofOfWork";
import { Services } from "@/components/Services";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white text-charcoal">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero Section with Value Proposition & Architecture Visual */}
      <Hero />

      {/* 3. Trust Strip: Honest Credibility Pillars */}
      <TrustStrip />

      {/* 4. Featured Work: Selected Work & Interactive Case Studies */}
      <FeaturedWork />

      {/* 5. Proof of Work: Verifiable Evidence */}
      <ProofOfWork />

      {/* 6. Services: From Idea to Production */}
      <Services />

      {/* 7. Why Work With Me: Product Engineer Mindset */}
      <WhyWorkWithMe />

      {/* 8. Process: 4-Step System Pipeline */}
      <Process />

      {/* 9. About Section: Professional Story & Credentials */}
      <About />

      {/* 10. Tech Stack: Scannable Engineering Toolbox */}
      <TechStack />

      {/* 11. High-Contrast Final Call To Action */}
      <CTA />

      {/* 12. Contact: Project Inquiry Initiation Form */}
      <Contact />

      {/* 13. Minimal Editorial Footer */}
      <Footer />
    </main>
  );
}
