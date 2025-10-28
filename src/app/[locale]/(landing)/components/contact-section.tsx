"use client";

import { Building2, FileText, Mail, MapPin, Phone } from "lucide-react";
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-20 md:py-32"
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -start-32 top-1/4 h-96 w-96 rounded-full bg-[#1E488F]/5 blur-3xl" />
        <div className="absolute -end-32 bottom-1/4 h-96 w-96 rounded-full bg-[#001F3F]/5 blur-3xl" />
      </div>

      <div className="layout relative px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center justify-center"
            >
              <div className="rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] p-3 shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </motion.div>
            <h2 className="mb-4 bg-gradient-to-r from-[#001F3F] to-[#1E488F] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1E488F]/80 md:text-xl">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Get in Touch Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-75 blur transition duration-300 group-hover:opacity-100" />
                <div className="relative rounded-3xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] p-8 text-white shadow-2xl">
                  <h3 className="mb-3 text-2xl font-bold">{t("getInTouch")}</h3>
                  <p className="text-base leading-relaxed text-white/90">
                    {t("description")}
                  </p>
                </div>
              </motion.div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />
                      <div className="relative flex items-center gap-5 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all group-hover:shadow-xl">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] opacity-10 blur-sm" />
                          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#001F3F]/10 to-[#1E488F]/10 transition-all group-hover:from-[#001F3F]/20 group-hover:to-[#1E488F]/20">
                            <Icon className="h-6 w-6 text-[#001F3F] transition-colors group-hover:text-[#1E488F]" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="mb-1 text-sm font-medium text-[#1E488F]/70">
                            {info.label}
                          </p>
                          <p className="truncate text-lg font-semibold text-[#001F3F] transition-colors group-hover:text-[#1E488F]">
                            <span dir="ltr">{info.value}</span>
                          </p>
                        </div>
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
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={itemVariants} className="group relative">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group-hover:shadow-3xl relative h-[500px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-100 transition-all lg:h-full"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#001F3F] to-[#1E488F] opacity-0 blur transition duration-300 group-hover:opacity-20" />
                <div className="relative h-full overflow-hidden rounded-3xl">
                  <GoogleMap height="100%" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
