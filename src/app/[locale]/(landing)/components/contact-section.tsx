"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");

  const contactInfo = [
    {
      icon: Phone,
      label: t("license"),
      value: "1200040998",
      color: "from-[#001F3F] to-[#1E488F]"
    },
    {
      icon: Phone,
      label: t("unifiedNumber"),
      value: "7039648097",
      href: "tel:7039648097",
      color: "from-[#00804C] to-[#74C365]"
    },
    {
      icon: MessageCircle,
      label: t("mobile"),
      value: "0508544090",
      href: "tel:+966508544090",
      color: "from-[#1E488F] to-[#00804C]"
    },
    {
      icon: Mail,
      label: t("email"),
      value: "contact@arkanaldaradv.com",
      href: "mailto:contact@arkanaldaradv.com",
      color: "from-[#74C365] to-[#DBE64C]"
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
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F6F7ED] py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#001F3F] md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-lg text-[#1E488F] md:text-xl">{t("subtitle")}</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-[#001F3F] to-[#1E488F] p-8 text-[#F6F7ED] shadow-xl">
                <h3 className="mb-4 text-2xl font-bold">{t("getInTouch")}</h3>
                <p className="text-lg text-[#F6F7ED]/90">{t("description")}</p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${info.color}`}
                    >
                      <Icon className="h-6 w-6 text-[#F6F7ED]" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm font-medium text-[#1E488F]">
                        {info.label}
                      </p>
                      <p className="text-lg font-semibold text-[#001F3F] group-hover:text-[#00804C]">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#F6F7ED] via-[#DBE64C]/10 to-[#74C365]/10 shadow-xl lg:h-full"
            >
              {/* Decorative elements */}
              <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-[#74C365]/20 blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-[#DBE64C]/20 blur-3xl" />

              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#001F3F] to-[#1E488F] shadow-lg"
                  >
                    <MapPin className="h-12 w-12 text-[#F6F7ED]" />
                  </motion.div>
                  <p className="mb-2 text-2xl font-bold text-[#001F3F]">
                    المملكة العربية السعودية
                  </p>
                  <p className="text-lg text-[#1E488F]">
                    Kingdom of Saudi Arabia
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#74C365]" />
                    <span className="text-sm text-[#1E488F]">
                      متاحون الآن • Available Now
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
