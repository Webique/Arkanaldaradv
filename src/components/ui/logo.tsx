import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  href?: string;
  className?: string;
  imgClassName?: string;
  desClassName?: string;
  smallInMobile?: boolean;
  removeText?: boolean;
};

export default function Logo({
  className,
  imgClassName,
  desClassName,
  href = "/",
  smallInMobile = false,
  removeText = false
}: indexProps) {
  const t = useTranslations("Header");

  return (
    <I18nLink
      href={href}
      aria-label="site-logo"
      className={cn(
        "flex items-center gap-2.5",
        smallInMobile && "gap-2 sm:gap-2.5",
        className
      )}
    >
      <ExportedImage
        className={cn(
          "h-auto w-16 max-w-full overflow-hidden sm:w-16",
          smallInMobile && "w-16 sm:w-16",
          imgClassName
        )}
        src="/images/logo.png"
        width={smallInMobile ? 66 : 96}
        height={smallInMobile ? 48 : 66}
        placeholder="empty"
        priority
        alt="site-logo"
      />
      {!removeText && (
        <div>
          <span
            className={cn(
              "via-primary/90 to-primary inline-block bg-gradient-to-r from-[#0E1B21]/90 bg-clip-text text-lg font-black text-transparent",
              smallInMobile && "leading- text-base"
            )}
          >
            {t("siteName")}
          </span>
          <p
            className={cn(
              "leading- text-xs font-medium italic text-gray-600",
              desClassName
            )}
          >
            {t("siteDescription")}
          </p>
        </div>
      )}
    </I18nLink>
  );
}
