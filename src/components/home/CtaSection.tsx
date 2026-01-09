import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function CtaSection() {
  const t = useTranslations("HomePage");

  return (
    <section
      className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background"
      aria-labelledby="cta-title"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            id="cta-title"
            className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight"
          >
            {t("cta.title")}
            <span className="text-primary italic">
              {t("cta.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full h-16 px-12 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/25"
              aria-label={t("cta.ctaPrimary")}
            >
              {t("cta.ctaPrimary")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full h-16 px-12 text-lg font-bold border-2 border-primary/20 text-foreground hover:bg-white bg-transparent"
              aria-label={t("cta.ctaSecondary")}
            >
              {t("cta.ctaSecondary")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
