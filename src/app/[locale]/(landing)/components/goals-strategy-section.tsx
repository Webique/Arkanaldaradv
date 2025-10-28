"use client";

import { Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function GoalsStrategySection() {
  const tGoals = useTranslations("IndexPage.Goals");
  const tStrategy = useTranslations("IndexPage.Strategy");

  const goals = [
    { icon: Lightbulb, textKey: "goal1" },
    { icon: TrendingUp, textKey: "goal2" },
    { icon: Target, textKey: "goal3" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const strategyVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -start-20 top-1/4 h-96 w-96 rounded-full bg-[#1E488F]/5 blur-3xl" />
        <div className="absolute -end-20 bottom-1/3 h-96 w-96 rounded-full bg-[#001F3F]/5 blur-3xl" />
      </div>

      <div className="layout relative px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          {/* Goals Section */}
          <div className="mb-20">
            {/* Header */}
            <m.div variants={itemVariants} className="mb-12 text-center">
              <m.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 inline-flex items-center justify-center"
              >
                <div className="rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] p-3 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </m.div>
              <h2 className="mb-4 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                {tGoals("title")}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#1E488F]/80 md:text-xl">
                {tGoals("subtitle")}
              </p>
            </m.div>

            {/* Goals List */}
            <div className="space-y-5">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <m.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Gradient border glow */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />

                    {/* Main card */}
                    <div className="relative flex items-start gap-5 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-xl md:p-8">
                      {/* Icon container */}
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-20 blur-md" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-lg ring-2 ring-white transition-transform group-hover:scale-110">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                      </div>

                      {/* Text content */}
                      <p className="flex-1 pt-2 text-lg leading-relaxed text-[#1E488F]/90 transition-colors group-hover:text-[#001F3F]">
                        {tGoals(goal.textKey as any)}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* Strategy Section */}
          <m.div variants={strategyVariants} className="group relative">
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-75 blur-xl transition duration-300 group-hover:opacity-100" />

            {/* Main strategy card */}
            <m.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] p-8 shadow-2xl md:p-12"
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

              {/* Decorative circles */}
              <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-10 -start-10 h-40 w-40 rounded-full bg-white/5" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <m.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white/20 blur-lg" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/30 backdrop-blur-sm">
                        <Rocket className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </m.div>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    {tStrategy("title")}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-white/95 md:text-xl">
                  {tStrategy("description")}
                </p>
              </div>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
