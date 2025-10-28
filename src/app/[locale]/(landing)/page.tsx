import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import ContactSection from "./components/contact-section";
import CTASection from "./components/cta-section";
import GoalsStrategySection from "./components/goals-strategy-section";
import StatsSection from "./components/stats-section";
import TestimonialsSection from "./components/testimonials-section";
import VisionValuesSection from "./components/vision-values-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      {/* <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />*/}
      <CTASection />
      <VisionValuesSection />
      <GoalsStrategySection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
