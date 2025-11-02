import ExportedImage from "next-image-export-optimizer";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  src?: string;
  width?: number;
  height?: number;
  href?: string;
  className?: string;
  imgClassName?: string;
};

export default function Logo({
  src = "/images/logonew.png",
  width = 128,
  height = 128,
  className,
  imgClassName,
  href = "/"
}: indexProps) {
  return (
    <I18nLink
      href={href}
      aria-label="site-logo"
      className={cn("flex items-center gap-2.5", className)}
    >
      <ExportedImage
        className={cn(
          "h-auto w-24 max-w-full overflow-hidden sm:w-32",
          imgClassName
        )}
        src={src}
        width={width}
        height={height}
        placeholder="empty"
        priority
        alt="site-logo"
      />
    </I18nLink>
  );
}
