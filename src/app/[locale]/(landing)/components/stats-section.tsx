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
      labelKey: "experience",
      color: "from-[#001F3F] to-[#1E488F]"
    },
    {
      icon: Users,
      value: "500+",
      labelKey: "clients",
      color: "from-[#00804C] to-[#74C365]"
    },
    {
      icon: Building2,
      value: "1000+",
      labelKey: "properties",
      color: "from-[#1E488F] to-[#00804C]"
    },
    {
      icon: Award,
      value: "98%",
      labelKey: "success",
      color: "from-[#74C365] to-[#DBE64C]"
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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring" as const }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#74C365]/20 blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#DBE64C]/20 blur-3xl"
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
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity group-hover:opacity-20`}
                />

                <m.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                  className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${stat.color}`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="mb-2 text-5xl font-bold text-[#F6F7ED]"
                >
                  {stat.value}
                </m.div>

                <p className="text-lg text-[#DBE64C]">
                  {t(stat.labelKey as any)}
                </p>

                {/* Bottom accent line */}
                <m.div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                />
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
