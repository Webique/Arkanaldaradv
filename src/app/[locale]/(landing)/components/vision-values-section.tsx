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
      descKey: "trust.description"
    },
    {
      icon: Award,
      titleKey: "honesty.title",
      descKey: "honesty.description"
    },
    {
      icon: Clock,
      titleKey: "commitment.title",
      descKey: "commitment.description"
    },
    {
      icon: Eye,
      titleKey: "fulfillment.title",
      descKey: "fulfillment.description"
    },
    {
      icon: Users,
      titleKey: "respect.title",
      descKey: "respect.description"
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

  const visionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-blue-50/30 to-white py-20 md:py-32">
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
          {/* Vision Section */}
          <m.div variants={visionVariants} className="group relative mb-20">
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-20 blur-2xl transition duration-300 group-hover:opacity-30" />

            {/* Main vision card */}
            <m.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-12 text-center shadow-xl ring-1 ring-gray-100"
            >
              {/* Decorative circles */}
              <div className="absolute start-10 top-10 h-32 w-32 rounded-full bg-[#1E488F]/5 blur-2xl" />
              <div className="absolute bottom-10 end-10 h-40 w-40 rounded-full bg-[#001F3F]/5 blur-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <m.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-8 inline-flex"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-30 blur-2xl" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-2xl ring-4 ring-white">
                      <Eye className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </m.div>

                {/* Title */}
                <h2 className="mb-6 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {tVision("title")}
                </h2>

                {/* Description */}
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1E488F]/90 md:text-xl">
                  {tVision("description")}
                </p>
              </div>
            </m.div>
          </m.div>

          {/* Values Section Header */}
          <m.div variants={itemVariants} className="mb-12 text-center">
            <m.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center justify-center"
            >
              <div className="rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] p-3 shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </m.div>
            <h2 className="mb-4 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {tValues("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E488F]/80 md:text-xl">
              {tValues("subtitle")}
            </p>
          </m.div>

          {/* Values Grid */}
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
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  {/* Gradient border glow */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-30" />

                  {/* Main card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-xl">
                    {/* Icon with rotation */}
                    <m.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 inline-flex"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-10 blur-md" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#001F3F]/10 to-[#1E488F]/10 transition-all group-hover:from-[#001F3F]/20 group-hover:to-[#1E488F]/20">
                          <Icon className="h-7 w-7 text-[#001F3F] transition-colors group-hover:text-[#1E488F]" />
                        </div>
                      </div>
                    </m.div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-bold text-[#001F3F] transition-colors group-hover:text-[#1E488F]">
                      {tValues(value.titleKey as any)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[#1E488F]/80">
                      {tValues(value.descKey as any)}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
