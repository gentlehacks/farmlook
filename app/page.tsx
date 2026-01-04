"use client"
import { FaqSection } from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWork from "@/components/HowItWork";
import MobileNav from "@/components/MobileNav";
import ProblemSection from "@/components/ProblemSection";
import Success from "@/components/Success";
import Target from "@/components/Target";
import Testimonials from "@/components/Testimonials";
import { useState } from "react";

const Home = () => {
  const [showMobilenav, setShowMobileNav] = useState(false);

  return (
    <div className="relative w-full flex flex-col text-gray-800 bg-green-50">
      {showMobilenav && (
        <MobileNav
          showMobileNav={showMobilenav}
          setShowMobileNav={setShowMobileNav}
        />
      )}
      <Header
        showMobileNav={showMobilenav}
        setShowMobileNav={setShowMobileNav}
      />

      <HeroSection />
      <ProblemSection />
      <HowItWork />
      <FeaturesSection />

      <Testimonials />
      <Success />
      <Target />
      <FaqSection />
      <Founders />
      <Footer />
    </div>
  );
};

export default Home;
