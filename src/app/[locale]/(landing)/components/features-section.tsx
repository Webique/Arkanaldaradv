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
      descKey: "licensed.description",
      color: "from-[#001F3F] to-[#1E488F]",
      bgColor: "bg-[#1E488F]/10"
    },
    {
      icon: Shield,
      titleKey: "trusted.title",
      descKey: "trusted.description",
      color: "from-[#00804C] to-[#74C365]",
      bgColor: "bg-[#74C365]/10"
    },
    {
      icon: HeadphonesIcon,
      titleKey: "support.title",
      descKey: "support.description",
      color: "from-[#1E488F] to-[#00804C]",
      bgColor: "bg-[#00804C]/10"
    },
    {
      icon: TrendingUp,
      titleKey: "experience.title",
      descKey: "experience.description",
      color: "from-[#74C365] to-[#DBE64C]",
      bgColor: "bg-[#DBE64C]/20"
    },
    {
      icon: Sparkles,
      titleKey: "innovative.title",
      descKey: "innovative.description",
      color: "from-[#001F3F] to-[#00804C]",
      bgColor: "bg-[#001F3F]/10"
    },
    {
      icon: Clock,
      titleKey: "fast.title",
      descKey: "fast.description",
      color: "from-[#DBE64C] to-[#74C365]",
      bgColor: "bg-[#74C365]/10"
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      <div className="container relative z-10 mx-auto px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <m.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#001F3F] md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-lg text-[#1E488F] md:text-xl">{t("subtitle")}</p>
          </m.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <m.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity group-hover:opacity-5`}
                  />

                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${feature.bgColor}`}
                  >
                    <Icon className="h-8 w-8 text-[#001F3F]" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-[#001F3F]">
                    {t(feature.titleKey as any)}
                  </h3>
                  <p className="leading-relaxed text-[#1E488F]">
                    {t(feature.descKey as any)}
                  </p>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
