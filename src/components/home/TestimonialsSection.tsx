import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/home/testimonials";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const t = useTranslations("HomePage");

  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      {/* Decorative Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
            {t("testimonials.badge")}
          </span>
          <h2
            id="testimonials-title"
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            {t("testimonials.title")}
            <span className="text-primary italic">
              {t("testimonials.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="rounded-3xl border-none shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={`star-${testimonial.id}-${idx}`}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic">
                  &quot;{t(testimonial.quoteKey)}&quot;
                </p>
              </div>
              <div className="border-t border-primary/10 pt-4">
                <p className="font-bold text-foreground">
                  {t(testimonial.authorKey)}
                </p>
                <p className="text-sm text-foreground/50">
                  {t(testimonial.roleKey)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
