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
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          {/* Goals */}
          <div className="mb-20">
            <m.div variants={itemVariants} className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#001F3F] md:text-5xl">
                {tGoals("title")}
              </h2>
              <p className="text-lg text-[#1E488F] md:text-xl">
                {tGoals("subtitle")}
              </p>
            </m.div>

            <div className="space-y-6">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <m.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group flex items-start gap-4 rounded-xl bg-gradient-to-r from-[#F6F7ED] to-white p-6 shadow-md transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-md">
                      <Icon className="h-6 w-6 text-[#F6F7ED]" />
                    </div>
                    <p className="flex-1 pt-2 text-lg leading-relaxed text-[#1E488F]">
                      {tGoals(goal.textKey as any)}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* Strategy */}
          <m.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#001F3F] via-[#1E488F] to-[#00804C] p-8 shadow-2xl md:p-12"
          >
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#74C365]/20 backdrop-blur-sm">
                  <Rocket className="h-8 w-8 text-[#F6F7ED]" />
                </div>
                <h2 className="text-3xl font-bold text-[#F6F7ED] md:text-4xl">
                  {tStrategy("title")}
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-[#F6F7ED]/95 md:text-xl">
                {tStrategy("description")}
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
