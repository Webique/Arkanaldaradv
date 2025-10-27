"use client";

import { useHeadroom } from "@mantine/hooks";
import { Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import * as React from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pinned = useHeadroom({ fixedAt: 120 });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" }
  ];

  return (
    <m.header
      className="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white/80 shadow-sm backdrop-blur-md"
      animate={{
        transform: pinned ? "translateY(0)" : "translateY(-100%)"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Main Header */}
      <div className="layout">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex h-full items-center gap-3"
          >
            <Logo />
          </m.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-foreground hover:text-primary relative font-medium transition-colors",
                    "before:absolute before:bottom-0 before:start-0 before:h-0.5 before:w-0 before:bg-current",
                    "before:transition-all before:duration-300 hover:before:w-full"
                  )}
                >
                  {item.label}
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA  */}
          <m.div
            className="hidden items-center space-x-3 lg:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={false} />

            <div className="flex items-center">
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#001F3F] to-[#1E488F] px-6 py-3 text-sm font-semibold text-[#F6F7ED] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl lg:flex"
              >
                <Phone className="size-4" />
                {t("cta")}
              </Link>
            </div>
          </m.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center"
            >
              <LocaleSwitcher className="w-auto" isTop={false} />

              <button
                className="text-foreground hover:bg-muted rounded-md p-2 transition-all duration-300 hover:scale-105"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <m.div
                    animate={
                      isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                  <m.div
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                  <m.div
                    animate={
                      isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                </div>
              </button>
            </m.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="space-y-4 border-t border-gray-200 py-4">
            <div className="space-y-4 px-4">
              {navItems.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground hover:text-primary hover:bg-primary/10 focus:ring-primary block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}

              {/* CTA in Mobile Menu */}
              <m.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="border-t pt-4"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.links.whatsapp}
                  onClick={() => setIsMenuOpen(false)}
                  className="from-primary to-primary/70 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-[#F6F7ED] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Phone className="size-4" />
                  {t("cta")}
                </a>
              </m.div>
            </div>
          </nav>
        </m.div>
      </div>
    </m.header>
  );
}
