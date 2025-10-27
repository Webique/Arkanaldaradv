"use client";

import { Building2, CheckCircle2, Shield } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.About");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F6F7ED] py-20 md:py-32"
    >
      <div className="layout px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          <m.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#001F3F] md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-lg text-[#1E488F] md:text-xl">{t("subtitle")}</p>
          </m.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <m.div
              variants={itemVariants}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1E488F]/10">
                  <Building2 className="h-6 w-6 text-[#1E488F]" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#001F3F]">
                    {t("title")}
                  </h3>
                  <p className="leading-relaxed text-[#1E488F]">
                    {t("description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#74C365]/10">
                  <Shield className="h-6 w-6 text-[#00804C]" />
                </div>
                <div>
                  <p className="leading-relaxed text-[#1E488F]">
                    {t("independence")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#DBE64C]/20">
                  <CheckCircle2 className="h-6 w-6 text-[#00804C]" />
                </div>
                <div>
                  <p className="leading-relaxed text-[#1E488F]">
                    {t("compliance")}
                  </p>
                </div>
              </div>
            </m.div>

            <m.div
              variants={itemVariants}
              className="relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-2xl md:h-[500px]"
            >
              <div className="absolute inset-0 bg-[url('/images/building-pattern.svg')] opacity-10" />

              {/* Decorative elements */}
              <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-[#74C365]/10 blur-xl" />
              <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-[#DBE64C]/10 blur-xl" />

              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center text-[#F6F7ED]">
                  <m.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="mb-4 text-5xl md:text-6xl">🏢</div>
                    <div className="mb-6 text-5xl font-bold md:text-6xl">
                      1200040998
                    </div>
                    <p className="text-xl font-semibold md:text-2xl">
                      رخصة فال • FAL License
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <div className="h-px w-12 bg-[#74C365]/50" />
                      <span className="text-sm text-[#DBE64C]">
                        الهيئة العامة للعقار
                      </span>
                      <div className="h-px w-12 bg-[#74C365]/50" />
                    </div>
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
