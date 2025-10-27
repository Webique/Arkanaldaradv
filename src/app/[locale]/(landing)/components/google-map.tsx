"use client";

import { siteConfig } from "@/config/site";

export default function GoogleMap({
  height = 400
}: {
  height?: number | string;
}) {
  return (
    <iframe
      src={siteConfig.links.googleMapIframe}
      width="100%"
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
  );
}
