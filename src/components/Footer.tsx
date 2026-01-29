"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("HomePage");

  return (
    <footer className="bg-white/20 border-t border-primary/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-foreground">
              {t("footer.title")}
            </h3>
            <p className="text-foreground/60 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          <nav className="space-y-4" aria-label="Footer navigation">
            <h4 className="font-bold text-foreground uppercase text-sm tracking-wider">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {t("footer.links.home")}
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {t("footer.links.services")}
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {t("footer.links.method")}
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {t("footer.links.calculator")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:julietadaianabrest@gmail.com"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {t("footer.links.contactLink")}
                </a>
              </li>
            </ul>
          </nav>

          <address className="space-y-4 not-italic">
            <h4 className="font-bold text-foreground uppercase text-sm tracking-wider">
              {t("footer.links.contactLink")}
            </h4>
            <ul className="space-y-2 text-foreground/60">
              <li>
                <a
                  href="mailto:julietadaianabrest@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  julietadaianabrest@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34611542474"
                  className="hover:text-primary transition-colors"
                >
                  +34 611 542 474
                </a>
              </li>
              <li>Barcelona, España</li>
            </ul>
          </address>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
