import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { services } from "@/data/home/services";
import { getWhatsAppLink } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("HomePage");

  return (
    <section
      id="services"
      className="py-24 bg-background relative"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2
            id="services-title"
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            {t("services.title")}{" "}
            <span className="text-primary italic">
              {t("services.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`flex flex-col rounded-3xl border-none shadow-lg p-8 hover:shadow-xl transition-shadow group ${
                service.variant === "featured"
                  ? "bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20"
                  : ""
              }`}
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3 text-center">
                {t(service.titleKey)}
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {t(service.descriptionKey)}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <Icon
                      name="CheckCircle"
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    />
                    <span>{t(feature.translationKey)}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={service.variant === "outline" ? "outline" : "default"}
                className={(() => {
                  if (service.variant === "outline") {
                    return "w-full rounded-full font-bold border-2 border-primary/30 text-foreground hover:bg-primary/5 bg-transparent mt-auto";
                  }
                  if (service.variant === "featured") {
                    return "w-full rounded-full font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 mt-auto";
                  }
                  return "w-full rounded-full font-bold bg-primary text-white hover:bg-primary/90 mt-auto";
                })()}
                asChild
              >
                <a
                  href={getWhatsAppLink(t("whatsapp.message"))}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(service.ctaKey)}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
