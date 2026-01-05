import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Tus idiomas soportados
  locales: ["es", "en"],

  // Idioma por defecto si no detecta ninguno
  defaultLocale: "es",

  // Opcional: prefijo de URL siempre visible (ej: /es/servicios)
  // localePrefix: 'always'
});

// Wrappers ligeros para la navegación de Next.js
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
