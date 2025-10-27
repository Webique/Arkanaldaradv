import { routing } from "@/i18n/routing.public";

import messages from "./locales/ar.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

// Praxti Brand Colors
export const praxtiColors = {
  white: "#F6F7ED", // Praxti White
  spring: "#DBE64C", // First Colors of Spring
  midnight: "#001F3F", // Midnight Mirage
  mantis: "#74C365", // Mantis
  pictureGreen: "#00804C", // Picture Book Green
  nuit: "#1E488F" // Nuit Blanche
} as const;
