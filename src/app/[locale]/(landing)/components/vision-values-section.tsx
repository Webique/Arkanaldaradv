"use client";

import { Award, Clock, Eye, Heart, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function VisionValuesSection() {
  const tVision = useTranslations("IndexPage.Vision");
  const tValues = useTranslations("IndexPage.Values");

  const values = [
    {
      icon: Heart,
      titleKey: "trust.title",
      descKey: "trust.description",
      color: "text-[#00804C]"
    },
    {
      icon: Award,
      titleKey: "honesty.title",
      descKey: "honesty.description",
      color: "text-[#1E488F]"
    },
    {
      icon: Clock,
      titleKey: "commitment.title",
      descKey: "commitment.description",
      color: "text-[#74C365]"
    },
    {
      icon: Eye,
      titleKey: "fulfillment.title",
      descKey: "fulfillment.description",
      color: "text-[#001F3F]"
    },
    {
      icon: Users,
      titleKey: "respect.title",
      descKey: "respect.description",
      color: "text-[#DBE64C]"
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
      <div className="layout px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          {/* Vision */}
          <m.div
            variants={itemVariants}
            className="relative mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F6F7ED] via-[#DBE64C]/10 to-[#74C365]/10 p-12 text-center shadow-xl"
          >
            {/* Decorative elements */}
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#74C365]/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#DBE64C]/20 blur-3xl" />

            <div className="relative z-10">
              <m.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1 }}
                className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-2xl"
              >
                <Eye className="h-12 w-12 text-[#F6F7ED]" />
              </m.div>
              <h2 className="mb-6 text-4xl font-bold text-[#001F3F] md:text-5xl">
                {tVision("title")}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1E488F] md:text-xl">
                {tVision("description")}
              </p>
            </div>
          </m.div>

          {/* Values */}
          <m.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#001F3F] md:text-5xl">
              {tValues("title")}
            </h2>
            <p className="text-lg text-[#1E488F] md:text-xl">
              {tValues("subtitle")}
            </p>
          </m.div>

          <m.div
            variants={containerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <m.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-xl"
                >
                  <m.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 ${value.color}`}
                  >
                    <Icon className="h-7 w-7" />
                  </m.div>
                  <h3 className="mb-2 text-lg font-bold text-[#001F3F]">
                    {tValues(value.titleKey as any)}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1E488F]">
                    {tValues(value.descKey as any)}
                  </p>
                </m.div>
              );
            })}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
