"use client";

import { Building2, FileText, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import WhatsApp from "@/assets/icons/whatsapp-2.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("contactUs"), href: "#contact" }
  ];

  const services = [
    { label: t("realEstateServices"), href: "#services" },
    { label: t("propertyManagement"), href: "#services" },
    { label: t("realEstateMarketing"), href: "#services" },
    { label: t("realEstateConsulting"), href: "#services" }
  ];

  const socialLinks = [
    {
      icon: WhatsApp,
      href: `${siteConfig.links.whatsapp}`,
      label: t("socialMedia.whatsapp"),
      target: "_blank"
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.support.email}`,
      label: t("socialMedia.email"),
      target: "_blank"
    },
    {
      icon: Phone,
      href: `tel:${siteConfig.support.phone}`,
      label: "Phone",
      target: "_self"
    },
    {
      icon: MapPin,
      href: "#contact",
      label: "Location",
      target: "_blank"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="layout px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <Logo
              imgClassName="invert w-36 sm:w-36 lg:w-40 brightness-0 saturate-0"
              className="lg:ps-8"
              width={160}
              height={160}
            />
            <p className="text-sm leading-relaxed text-gray-400">
              {t("companyDescription")}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <FileText className="h-4 w-4" />
                <span>
                  {t("license")}: {siteConfig.company.license}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Building2 className="h-4 w-4" />
                <span>
                  {t("unifiedNumber")}: {siteConfig.company.unifiedNumber}
                </span>
              </div>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-bold">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <m.li
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-bold">{t("services")}</h3>
            <ul className="space-y-3">
              {services.map((service) => {
                return (
                  <m.li
                    key={service.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={service.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {service.label}
                    </a>
                  </m.li>
                );
              })}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-bold">{t("contactUs")}</h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Phone className="mt-1 h-4 w-4 shrink-0" />
                <span dir="ltr">{siteConfig.support.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.support.email}`}
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mt-1 h-4 w-4 shrink-0" />
                <span>{siteConfig.support.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>{t("saudiArabia")}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <m.a
                      key={social.label}
                      href={social.href}
                      target={social.target}
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-all hover:bg-white/20"
                      aria-label={social.label}
                      title={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="h-5 w-5" />
                    </m.a>
                  );
                })}
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
