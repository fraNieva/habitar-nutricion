import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { trustIndicators } from "@/data/home/hero";
import { getWhatsAppLink } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <section
      className="relative pt-20 pb-32 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Decorative Background Elements */}
      <div
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-foreground/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
            {t("hero.badge")}
          </span>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-foreground tracking-tight"
          >
            {t("hero.title")} <br />
            <span className="text-primary italic">
              {t("hero.titleHighlight")}
            </span>{" "}
            {t("hero.titleEnd")}
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full h-16 px-10 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/25"
              aria-label={t("hero.ctaPrimary")}
              asChild
            >
              <a
                href={getWhatsAppLink(t("whatsapp.message"))}
                target="_blank"
                rel="noreferrer"
              >
                {t("hero.ctaPrimary")}
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <ul
            className="pt-12 flex flex-wrap items-center justify-center gap-8 text-foreground/50 list-none"
            aria-label="Trust indicators"
          >
            {trustIndicators.map((indicator) => (
              <li key={indicator.id} className="flex items-center gap-2">
                <Icon
                  name={indicator.icon}
                  className="w-5 h-5 fill-primary text-primary"
                />
                <span className="font-bold text-sm">
                  {t(indicator.translationKey)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
