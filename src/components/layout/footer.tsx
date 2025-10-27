"use client";

import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-secondary text-secondary-foreground">

    </footer>
  );
};

export default Footer;
