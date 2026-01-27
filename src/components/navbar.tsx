"use client"; // Necesario porque usamos hooks de traducción y links interactivos

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getWhatsAppLink } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function Navbar() {
  // Usamos el hook para traducir los textos del menú
  const t = useTranslations("Navbar");
  const t2 = useTranslations("HomePage");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-muted/80 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-serif text-foreground tracking-tight">
              Habitar Nutrición<span className="text-primary">.</span>
            </span>
          </Link>
        </div>

        {/* MENÚ DE ESCRITORIO (Oculto en móvil) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#method" className="hover:text-primary transition-colors">
            {t("method")}
          </Link>
          <Link
            href="#services"
            className="hover:text-primary transition-colors"
          >
            {t("services")}
          </Link>
          <Link
            href="#calculator"
            className="hover:text-primary transition-colors"
          >
            {t("calculator")}
          </Link>
        </nav>

        {/* ACCIONES (Derecha) */}
        <div className="flex items-center gap-2">
          {/* Switchers */}
          <div className="flex items-center border-r pr-2 mr-2 space-x-1">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* CTA Principal */}
          <Button asChild className="rounded-full hidden sm:flex">
            <a
              href={getWhatsAppLink(t2("whatsapp.message"))}
              target="_blank"
              rel="noreferrer"
            >
              {t("book")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
