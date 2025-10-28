"use client";

import {
  BadgeCheck,
  Clock,
  HeadphonesIcon,
  Shield,
  Sparkles,
  TrendingUp
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.Features");

  const features = [
    {
      icon: BadgeCheck,
      titleKey: "licensed.title",
      descKey: "licensed.description"
    },
    {
      icon: Shield,
      titleKey: "trusted.title",
      descKey: "trusted.description"
    },
    {
      icon: HeadphonesIcon,
      titleKey: "support.title",
      descKey: "support.description"
    },
    {
      icon: TrendingUp,
      titleKey: "experience.title",
      descKey: "experience.description"
    },
    {
      icon: Sparkles,
      titleKey: "innovative.title",
      descKey: "innovative.description"
    },
    {
      icon: Clock,
      titleKey: "fast.title",
      descKey: "fast.description"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-blue-50/30 to-white py-20 md:py-32">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -start-20 top-1/3 h-96 w-96 rounded-full bg-[#1E488F]/5 blur-3xl" />
        <div className="absolute -end-20 bottom-1/3 h-96 w-96 rounded-full bg-[#001F3F]/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
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
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </m.div>
            <h2 className="mb-4 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E488F]/80 md:text-xl">
              {t("subtitle")}
            </p>
          </m.div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <m.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  {/* Gradient border glow effect */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />

                  {/* Main card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-xl">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-0 transition-opacity group-hover:opacity-5" />

                    {/* Icon container */}
                    <div className="relative z-10 mb-6 inline-flex">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-10 blur-md transition-opacity group-hover:opacity-20" />
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#001F3F]/10 to-[#1E488F]/10 transition-all group-hover:scale-110 group-hover:from-[#001F3F]/20 group-hover:to-[#1E488F]/20">
                          <Icon className="h-8 w-8 text-[#001F3F] transition-all group-hover:scale-110 group-hover:text-[#1E488F]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="relative z-10 mb-3 text-xl font-bold text-[#001F3F] transition-colors group-hover:text-[#1E488F]">
                      {t(feature.titleKey as any)}
                    </h3>
                    <p className="relative z-10 leading-relaxed text-[#1E488F]/80">
                      {t(feature.descKey as any)}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
