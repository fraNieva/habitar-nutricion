import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Matcher optimizado para no interferir con imágenes, api o archivos estáticos
  matcher: ["/", "/(es|en)/:path*"],
};
