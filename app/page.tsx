import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProblemSection from "@/components/ProblemSection";
import PresetCategories from "@/components/PresetCategories";
import PresetPreview from "@/components/PresetPreview";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PerfectFor from "@/components/PerfectFor";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ProblemSection />
        <PresetCategories />
        <PresetPreview />
        <HowItWorks />
        <Features />
        <PerfectFor />
        <BeforeAfter />
        <Pricing />
        <FAQ />
        <Support />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
