"use client";
import { useState } from "react";
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
import PaymentModal from "@/components/PaymentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onBuyClick={() => setModalOpen(true)} />
      <main>
        <Hero onBuyClick={() => setModalOpen(true)} />
        <Benefits />
        <ProblemSection />
        <PresetCategories />
        <PresetPreview />
        <HowItWorks />
        <Features />
        <PerfectFor />
        <BeforeAfter />
        <Pricing onBuyClick={() => setModalOpen(true)} />
        <FAQ />
        <Support />
        <FinalCTA onBuyClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <PaymentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
