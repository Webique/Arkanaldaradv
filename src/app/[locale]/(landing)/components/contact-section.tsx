"use client";

import { Building2, FileText, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import GoogleMap from "@/app/[locale]/(landing)/components/google-map";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");

  const contactInfo = [
    {
      icon: FileText,
      label: t("license"),
      value: `${siteConfig.company.license}`
    },
    {
      icon: Building2,
      label: t("unifiedNumber"),
      value: `${siteConfig.company.unifiedNumber}`
    },
    {
      icon: Phone,
      label: t("mobile"),
      value: `${siteConfig.support.phone}`,
      href: `tel:${siteConfig.support.phone}`,
      target: "_self"
    },
    {
      icon: Mail,
      label: t("email"),
      value: `${siteConfig.support.email}`,
      href: `mailto:${siteConfig.support.email}`,
      target: "_blank"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6F7ED]/30 to-white py-20 md:py-32"
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute -left-32 top-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -right-32 bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
      </div>

      <div className="layout relative px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-primary/80 text-lg md:text-xl">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] p-8 text-white shadow-2xl">
                <h3 className="mb-3 text-2xl font-bold">{t("getInTouch")}</h3>
                <p className="text-base leading-relaxed text-white/90">
                  {t("description")}
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="border-primary/10 hover:border-primary/30 group flex items-center gap-5 rounded-2xl border bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary/20 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all">
                      <Icon className="text-primary h-6 w-6 transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-primary/70 mb-1 text-sm font-medium">
                        {info.label}
                      </p>
                      <p className="group-hover:text-primary text-primary truncate text-lg font-semibold transition-colors">
                        <span dir="ltr"> {info.value}</span>
                      </p>
                    </div>
                  </motion.div>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target={info.target}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </motion.div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="border-primary/10 hover:shadow-3xl relative h-[500px] overflow-hidden rounded-3xl border shadow-2xl transition-shadow lg:h-full"
            >
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <GoogleMap height="100%" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
