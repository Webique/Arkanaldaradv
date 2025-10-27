"use client";

import { useTranslations } from "next-intl";


export default function HeroSection() {
  const t = useTranslations("IndexPage.HeroSection");

  return (
    <section className="max-w-screen relative h-[90vh] min-h-[500px] w-full overflow-hidden lg:h-screen lg:min-h-[600px]">
    </section>
  );
}
