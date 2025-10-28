"use client";

import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function CTASection() {
  const t = useTranslations("IndexPage.CTA");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#1E488F] to-[#001F3F] py-20 md:py-24">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -end-20 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -start-20 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Icon badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/30 backdrop-blur-sm">
                <Phone className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            {t("title")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 text-xl text-white/90 md:text-2xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary CTA - Call Now */}
            <motion.a
              href={`tel:${siteConfig.support.phone}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-full bg-white opacity-30 blur transition duration-300 group-hover:opacity-50" />
              <div className="relative flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#001F3F] shadow-xl transition-all">
                <Phone className="h-5 w-5" />
                {t("callNow")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </div>
            </motion.a>

            {/* Secondary CTA - WhatsApp */}
            <motion.a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-full bg-white/20 opacity-0 blur transition duration-300 group-hover:opacity-100" />
              <div className="relative flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20">
                <MessageCircle className="h-5 w-5" />
                {t("whatsapp")}
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
