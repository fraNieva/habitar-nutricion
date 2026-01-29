import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { coachingFeatures, deliverables } from "@/data/home/coaching";
import { useTranslations } from "next-intl";

export function CoachingSection() {
  const t = useTranslations("HomePage");

  return (
    <section
      id="method"
      className="py-24 bg-white/50 relative overflow-hidden"
      aria-labelledby="coaching-title"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                id="coaching-title"
                className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight"
              >
                {t("coaching.title")}{" "}
                <span className="text-primary">
                  {t("coaching.titleHighlight")}
                </span>{" "}
                {t("coaching.titleEnd")}
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t("coaching.description")}
              </p>
            </div>

            <div className="grid gap-6">
              {coachingFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="flex gap-4 p-6 rounded-3xl bg-background border border-primary/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon
                      name={feature.icon}
                      className="w-6 h-6 text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              {t("coaching.deliverablesTitle")}
            </h3>
            {/* Visual Representation of 3 Deliverables */}
            <div className="grid gap-6">
              {deliverables.map((deliverable) => (
                <Card
                  key={deliverable.id}
                  className={`rounded-3xl border-none shadow-xl p-8 ${
                    deliverable.variant === "primary"
                      ? "bg-primary text-white"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        deliverable.variant === "primary"
                          ? "bg-white/20 text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {deliverable.id}
                    </div>
                    <h4 className="font-serif font-bold text-xl">
                      {t(deliverable.titleKey)}
                    </h4>
                  </div>
                  <p
                    className={
                      deliverable.variant === "primary"
                        ? "opacity-80"
                        : "text-foreground/60"
                    }
                  >
                    {t(deliverable.descriptionKey)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
