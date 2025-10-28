"use client";

import { Building2, CheckCircle2, Info, Shield } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.About");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -start-20 top-1/4 h-96 w-96 rounded-full bg-[#1E488F]/5 blur-3xl" />
        <div className="absolute -end-20 bottom-1/4 h-96 w-96 rounded-full bg-[#001F3F]/5 blur-3xl" />
      </div>

      <div className="layout relative px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <m.div variants={itemVariants} className="mb-16 text-center">
            <m.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center justify-center"
            >
              <div className="rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] p-3 shadow-lg">
                <Info className="h-6 w-6 text-white" />
              </div>
            </m.div>
            <h2 className="mb-4 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E488F]/80 md:text-xl">
              {t("subtitle")}
            </p>
          </m.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Left Column - Info Cards */}
            <m.div
              variants={itemVariants}
              className="flex flex-col justify-center space-y-6"
            >
              {/* About Card */}
              <m.div
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />
                <div className="relative flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-xl">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-10 blur-md" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#001F3F]/10 to-[#1E488F]/10 transition-all group-hover:scale-110">
                      <Building2 className="h-6 w-6 text-[#001F3F] transition-colors group-hover:text-[#1E488F]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-[#001F3F] transition-colors group-hover:text-[#1E488F]">
                      {t("title")}
                    </h3>
                    <p className="leading-relaxed text-[#1E488F]/80">
                      {t("description")}
                    </p>
                  </div>
                </div>
              </m.div>

              {/* Independence Card */}
              <m.div
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />
                <div className="relative flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-xl">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-10 blur-md" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#001F3F]/10 to-[#1E488F]/10 transition-all group-hover:scale-110">
                      <Shield className="h-6 w-6 text-[#001F3F] transition-colors group-hover:text-[#1E488F]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="leading-relaxed text-[#1E488F]/80">
                      {t("independence")}
                    </p>
                  </div>
                </div>
              </m.div>

              {/* Compliance Card */}
              <m.div
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />
                <div className="relative flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-xl">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-10 blur-md" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#001F3F]/10 to-[#1E488F]/10 transition-all group-hover:scale-110">
                      <CheckCircle2 className="h-6 w-6 text-[#001F3F] transition-colors group-hover:text-[#1E488F]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="leading-relaxed text-[#1E488F]/80">
                      {t("compliance")}
                    </p>
                  </div>
                </div>
              </m.div>
            </m.div>

            {/* Right Column - License Card */}
            <m.div variants={itemVariants} className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-75 blur-xl transition duration-300 group-hover:opacity-100" />

              <m.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-2xl md:h-[500px]"
              >
                <div className="absolute inset-0 bg-[url('/images/building-pattern.svg')] opacity-5" />

                {/* Decorative circles */}
                <div className="absolute start-10 top-10 h-32 w-32 rounded-full bg-white/5" />
                <div className="absolute bottom-10 end-10 h-40 w-40 rounded-full bg-white/5" />

                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center text-white">
                    <m.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {/* Building Icon */}
                      <div className="mb-6">
                        <div className="relative mx-auto inline-flex">
                          <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
                          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/30 backdrop-blur-sm">
                            <Building2 className="h-10 w-10 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* License Number */}
                      <div className="mb-6 text-5xl font-bold md:text-6xl">
                        1200040998
                      </div>

                      {/* License Text */}
                      <p className="mb-2 text-xl font-semibold md:text-2xl">
                        رخصة فال • FAL License
                      </p>

                      {/* Divider */}
                      <div className="mt-6 flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-white/30" />
                        <span className="text-sm text-white/80">
                          الهيئة العامة للعقار
                        </span>
                        <div className="h-px w-12 bg-white/30" />
                      </div>
                    </m.div>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
