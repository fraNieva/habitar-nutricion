import { MacroCalculator } from "@/components/macro-calculator";
import { calculatorPoints } from "@/data/home/calculator";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CalculatorSection() {
  const t = useTranslations("HomePage");

  return (
    <section
      id="calculator"
      className="py-24 bg-white/30"
      aria-labelledby="calculator-title"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
                {t("calculator.badge")}
              </span>
              <h2
                id="calculator-title"
                className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight"
              >
                {t("calculator.title")}
                <br />
                <span className="text-primary italic">
                  {t("calculator.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-md">
                {t("calculator.description")}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {calculatorPoints.map((point) => (
                <div key={point.id} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground/60">
                    {t(point.translationKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <MacroCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
