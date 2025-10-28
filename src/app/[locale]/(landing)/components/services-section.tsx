"use client";

import {
  Briefcase,
  Building,
  Home,
  Key,
  Megaphone,
  MessageSquare
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.Services");

  const services = [
    {
      icon: Home,
      titleKey: "buyingSelling.title",
      descKey: "buyingSelling.description",
      image: "/images/2.jpg"
    },
    {
      icon: Key,
      titleKey: "leasing.title",
      descKey: "leasing.description",
      image: "/images/3.jpeg"
    },
    {
      icon: Building,
      titleKey: "propertyManagement.title",
      descKey: "propertyManagement.description",
      image: "/images/4.jpeg"
    },
    {
      icon: Megaphone,
      titleKey: "digitalMarketing.title",
      descKey: "digitalMarketing.description",
      image: "/images/5.jpeg"
    },
    {
      icon: MessageSquare,
      titleKey: "consulting.title",
      descKey: "consulting.description",
      image: "/images/hero.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white pb-20 md:pb-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -start-20 top-1/4 h-96 w-96 rounded-full bg-[#1E488F]/5 blur-3xl" />
        <div className="absolute -end-20 bottom-1/4 h-96 w-96 rounded-full bg-[#001F3F]/5 blur-3xl" />
      </div>

      <div className="layout relative">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <m.div variants={cardVariants} className="mb-16 text-center">
            <m.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center justify-center"
            >
              <div className="rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] p-3 shadow-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </m.div>
            <h2 className="mb-4 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E488F]/80 md:text-xl">
              {t("subtitle")}
            </p>
          </m.div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <m.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  {/* Gradient border glow effect */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-30" />

                  {/* Main card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-2xl">
                    {/* Icon header with image background */}
                    <div className="relative h-48 overflow-hidden p-8">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <ExportedImage
                          src={service.image}
                          alt={t(service.titleKey as any)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/90 to-[#1E488F]/85" />
                      </div>

                      {/* Decorative circles */}
                      <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-white/5" />
                      <div className="absolute -bottom-10 -start-10 h-32 w-32 rounded-full bg-white/5" />

                      {/* Icon container */}
                      <div className="relative z-10 flex h-full items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-white/20 blur-xl transition-opacity group-hover:opacity-75" />
                          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/30 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-white/20">
                            <Icon className="h-10 w-10 text-white transition-transform group-hover:scale-110" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="mb-3 text-xl font-bold text-[#001F3F] transition-colors group-hover:text-[#1E488F]">
                        {t(service.titleKey as any)}
                      </h3>
                      <p className="leading-relaxed text-[#1E488F]/80">
                        {t(service.descKey as any)}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <m.div
                      className="absolute bottom-0 start-0 h-1 w-full bg-gradient-to-r from-[#001F3F] to-[#1E488F]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    />
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
