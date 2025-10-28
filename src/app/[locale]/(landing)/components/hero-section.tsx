"use client";

import { ArrowRight, Building2 } from "lucide-react";
import { motion } from "motion/react";
import ExportedImage from "next-image-export-optimizer";
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
        delayChildren: 0.3
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
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden lg:min-h-[700px]">
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <ExportedImage
          src="/images/hero.jpg"
          alt="Real Estate Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#001F3F]/60 via-[#001F3F]/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Animated Light Orbs */}
      <div className="absolute inset-0 z-10 mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#1E488F]/30 blur-[100px] sm:h-96 sm:w-96"
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#1E488F]/25 blur-[100px] sm:h-96 sm:w-96"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 pb-24 pt-20 text-center text-white sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-5xl"
        >
          {/* License Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/30 to-white/10 opacity-50 blur transition duration-300 group-hover:opacity-70" />
              <div className="relative flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 shadow-2xl backdrop-blur-sm">
                <Building2 className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  {t("license")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xl font-semibold text-white/95 drop-shadow-lg sm:text-2xl md:text-3xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:text-xl"
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
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-70 blur transition duration-300 group-hover:opacity-100" />
              <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] px-8 py-4 text-base font-bold text-white shadow-2xl sm:px-10 sm:py-5 sm:text-lg">
                {t("cta")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </div>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-full bg-white/20 opacity-0 blur transition duration-300 group-hover:opacity-50" />
              <div className="relative rounded-full border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-bold text-white shadow-2xl backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 sm:px-10 sm:py-5 sm:text-lg">
                {t("learnMore")}
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 sm:bottom-10"
      >
        <motion.a href="#about" className="flex flex-col items-center gap-2">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-xs font-medium uppercase tracking-widest text-white/80 sm:text-sm"
          >
            اكتشف المزيد
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1 backdrop-blur-sm hover:border-white"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
}
