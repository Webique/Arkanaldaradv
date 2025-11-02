"use client";

import { Award, Building2, TrendingUp, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations("IndexPage.Stats");

  const stats = [
    {
      icon: TrendingUp,
      value: "5+",
      labelKey: "experience"
    },
    {
      icon: Users,
      value: "200+",
      labelKey: "clients"
    },
    {
      icon: Building2,
      value: "400+",
      labelKey: "properties"
    },
    {
      icon: Award,
      value: "98%",
      labelKey: "success"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#001F3F] to-gray-900 py-20 md:py-32">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute start-1/4 top-1/4 h-96 w-96 rounded-full bg-[#1E488F]/20 blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 end-1/4 h-96 w-96 rounded-full bg-[#1E488F]/20 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <m.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Gradient border glow effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-60" />

                {/* Main card */}
                <div className="relative overflow-hidden rounded-2xl bg-white/10 p-8 text-center ring-1 ring-white/20 backdrop-blur-md transition-all group-hover:bg-white/15">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

                  {/* Icon with rotation animation */}
                  <m.div
                    initial={{ rotate: 0, scale: 0 }}
                    whileInView={{ rotate: 360, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="relative z-10"
                  >
                    <div className="relative mx-auto mb-6 inline-flex">
                      {/* Icon glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-50 blur-xl" />
                      {/* Icon container */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-lg ring-2 ring-white/30 transition-transform group-hover:scale-110">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </m.div>

                  {/* Value with counter animation */}
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    className="relative z-10 mb-3 text-5xl font-bold text-white md:text-6xl"
                  >
                    {stat.value}
                  </m.div>

                  {/* Label */}
                  <m.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    className="relative z-10 text-lg font-medium text-white/70 transition-colors group-hover:text-white"
                  >
                    {t(stat.labelKey as any)}
                  </m.p>

                  {/* Bottom accent line */}
                  <m.div
                    className="absolute bottom-0 start-0 h-1 w-full bg-gradient-to-r from-[#001F3F] to-[#1E488F]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                  />
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
