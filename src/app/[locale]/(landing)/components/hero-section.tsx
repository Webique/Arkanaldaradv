"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("IndexPage.Hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F6F7ED] via-white to-[#DBE64C]/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#74C365]/20 to-[#00804C]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#1E488F]/20 to-[#DBE64C]/20 blur-3xl"
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
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8 inline-flex">
              <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg">
                <Sparkles className="h-5 w-5 text-[#DBE64C]" />
                <span className="text-sm font-semibold text-[#001F3F]">
                  رخصة فال: 1200040998 • FAL License
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-5xl font-bold leading-tight text-[#001F3F] md:text-6xl lg:text-7xl"
            >
              {t("title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mb-4 text-2xl font-semibold text-[#00804C] md:text-3xl"
            >
              {t("subtitle")}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-[#1E488F] md:text-xl"
            >
              {t("description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] px-8 py-4 text-lg font-semibold text-[#F6F7ED] shadow-lg transition-shadow hover:shadow-xl"
              >
                {t("cta")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-[#74C365] bg-white px-8 py-4 text-lg font-semibold text-[#001F3F] shadow-md transition-all hover:border-[#00804C] hover:text-[#00804C]"
              >
                {t("learnMore")}
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-12 w-8 rounded-full border-2 border-[#74C365]"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mx-auto mt-2 h-2 w-2 rounded-full bg-[#74C365]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
