"use client";

import { ArrowRight, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("IndexPage.Hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -end-20 -top-20 h-96 w-96 rounded-full bg-[#1E488F]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 -start-20 h-96 w-96 rounded-full bg-[#001F3F]/20 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex min-h-screen items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mx-auto max-w-5xl text-center"
          >
            {/* License Badge */}
            <motion.div variants={itemVariants} className="mb-8 inline-flex">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-30 blur transition duration-300 group-hover:opacity-50" />
                <div className="relative flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg ring-1 ring-gray-100">
                  <Building2 className="h-5 w-5 text-[#1E488F]" />
                  <span className="text-sm font-semibold text-[#001F3F]">
                    رخصة فال: 1200040998 • FAL License
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl"
            >
              {t("title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mb-4 text-2xl font-semibold text-[#1E488F] md:text-3xl"
            >
              {t("subtitle")}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-[#1E488F]/80 md:text-xl"
            >
              {t("description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* Primary CTA */}
              <motion.a
                href={siteConfig.links.whatsapp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-70 blur transition duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] px-8 py-4 text-lg font-semibold text-white shadow-lg">
                  {t("cta")}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                </div>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-30" />
                <div className="relative rounded-full border-2 border-[#1E488F]/30 bg-white px-8 py-4 text-lg font-semibold text-[#001F3F] shadow-md transition-all hover:border-[#1E488F] hover:text-[#1E488F]">
                  {t("learnMore")}
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-[#1E488F]/70">
            اكتشف المزيد
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#1E488F]/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-2 w-2 rounded-full bg-[#1E488F]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
