"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("IndexPage.CTA");

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#001F3F] via-[#1E488F] to-[#00804C] py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#74C365]/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#DBE64C]/10 blur-3xl"
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
          <h2 className="mb-6 text-4xl font-bold text-[#F6F7ED] md:text-5xl">
            {t("title")}
          </h2>
          <p className="mb-10 text-xl text-[#F6F7ED]/90 md:text-2xl">
            {t("subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="tel:+966508544090"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-full bg-[#74C365] px-8 py-4 text-lg font-semibold text-[#001F3F] shadow-xl transition-shadow hover:shadow-2xl"
            >
              <Phone className="h-5 w-5" />
              {t("callNow")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="https://wa.me/966508544090"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-[#DBE64C] bg-transparent px-8 py-4 text-lg font-semibold text-[#F6F7ED] transition-all hover:bg-[#DBE64C] hover:text-[#001F3F]"
            >
              {t("whatsapp")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
