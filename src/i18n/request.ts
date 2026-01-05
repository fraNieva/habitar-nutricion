// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing"; // Crearemos este archivo en el paso 3

export default getRequestConfig(async ({ requestLocale }) => {
  // En Next.js 15, esto debe ser asíncrono y validado
  let locale = await requestLocale;

  // Validar si el idioma solicitado es válido, si no, usar el default
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
