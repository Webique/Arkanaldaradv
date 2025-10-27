import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      {/* <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
      <VisionValuesSection />
      <GoalsStrategySection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection /> */}
      <WhatsAppFloat />
    </main>
  );
}
