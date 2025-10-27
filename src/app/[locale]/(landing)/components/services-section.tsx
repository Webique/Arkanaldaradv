"use client";

import { Building, Home, Key, Megaphone, MessageSquare } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.Services");

  const services = [
    {
      icon: Home,
      titleKey: "buyingSelling.title",
      descKey: "buyingSelling.description",
      color: "from-[#001F3F] to-[#1E488F]",
      bgColor: "bg-[#1E488F]/10"
    },
    {
      icon: Key,
      titleKey: "leasing.title",
      descKey: "leasing.description",
      color: "from-[#00804C] to-[#74C365]",
      bgColor: "bg-[#74C365]/10"
    },
    {
      icon: Building,
      titleKey: "propertyManagement.title",
      descKey: "propertyManagement.description",
      color: "from-[#1E488F] to-[#00804C]",
      bgColor: "bg-[#00804C]/10"
    },
    {
      icon: Megaphone,
      titleKey: "digitalMarketing.title",
      descKey: "digitalMarketing.description",
      color: "from-[#74C365] to-[#DBE64C]",
      bgColor: "bg-[#DBE64C]/20"
    },
    {
      icon: MessageSquare,
      titleKey: "consulting.title",
      descKey: "consulting.description",
      color: "from-[#001F3F] to-[#00804C]",
      bgColor: "bg-[#001F3F]/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 md:py-32"
    >
      <div className="layout px-4">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <m.div variants={cardVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#001F3F] md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-lg text-[#1E488F] md:text-xl">{t("subtitle")}</p>
          </m.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <m.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
                >
                  {/* Image placeholder with gradient */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${service.color} p-8`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 flex h-full items-center justify-center">
                      <div className="rounded-full bg-white/20 p-6 backdrop-blur-sm">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="mb-3 text-xl font-bold text-[#001F3F]">
                      {t(service.titleKey as any)}
                    </h3>
                    <p className="leading-relaxed text-[#1E488F]">
                      {t(service.descKey as any)}
                    </p>
                  </div>

                  <m.div
                    className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${service.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  />
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
