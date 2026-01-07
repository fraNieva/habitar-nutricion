import { MacroCalculator } from "@/components/macro-calculator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { calculatorPoints } from "@/data/home/calculator";
import { coachingFeatures, deliverables } from "@/data/home/coaching";
import { trustIndicators } from "@/data/home/hero";
import { services } from "@/data/home/services";
import { testimonials } from "@/data/home/testimonials";
import { ChevronRight, MessageCircle, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex-1 min-h-screen flex-col bg-background selection:bg-primary/20 font-sans">
      {/* Hero Section: Centered & Warm */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-foreground/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
              {t("hero.badge")}
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-foreground tracking-tight">
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
              >
                {t("hero.ctaPrimary")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full h-16 px-10 text-lg font-bold border-2 border-primary/20 text-foreground hover:bg-primary/5 bg-transparent"
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-foreground/50">
              {trustIndicators.map((indicator) => (
                <div key={indicator.id} className="flex items-center gap-2">
                  <Icon
                    name={indicator.icon}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                  <span className="font-bold text-sm">
                    {t(indicator.translationKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 'Coaching Hook' Section: Empathy + Precision */}
      <section
        id="method"
        className="py-24 bg-white/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
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
              {/* Visual Representation of 3 Deliverables */}
              <div className="grid gap-6">
                {deliverables.map((deliverable) => (
                  <Card
                    key={deliverable.id}
                    className={`rounded-3xl border-none shadow-xl p-8 ${
                      deliverable.variant === "primary"
                        ? "bg-primary text-white"
                        : "bg-white translate-x-4"
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

      {/* Services Grid Section */}
      <section id="services" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              {t("services.title")}{" "}
              <span className="text-primary italic">
                {t("services.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-foreground/70">
              {t("services.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`rounded-3xl border-none shadow-lg p-8 hover:shadow-xl transition-shadow group ${
                  service.variant === "featured"
                    ? "bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20"
                    : "bg-white"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    service.variant === "featured"
                      ? "bg-primary/20 group-hover:bg-primary/30"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}
                >
                  <Icon name={service.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
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
                  variant={
                    service.variant === "outline" ? "outline" : "default"
                  }
                  className={`w-full rounded-full font-bold ${
                    service.variant === "outline"
                      ? "border-2 border-primary/30 text-foreground hover:bg-primary/5 bg-transparent"
                      : service.variant === "featured"
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  {t(service.ctaKey)}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Macro Calculator Section */}
      <section id="calculator" className="py-24 bg-white/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
                  {t("calculator.badge")}
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
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

      {/* Testimonials Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
              {t("testimonials.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
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
                className="rounded-3xl border-none shadow-lg bg-white p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
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

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
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
              >
                {t("cta.ctaPrimary")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full h-16 px-12 text-lg font-bold border-2 border-primary/20 text-foreground hover:bg-white bg-transparent"
              >
                {t("cta.ctaSecondary")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/yournumber"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
        rel="noreferrer"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>

      {/* Footer */}
      <footer className="bg-white border-t border-primary/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-foreground">
                {t("footer.title")}
              </h3>
              <p className="text-foreground/60 leading-relaxed max-w-sm">
                {t("footer.description")}
              </p>
              <div className="flex gap-3">
                {["instagram", "linkedin", "whatsapp"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-primary/40 rounded-full" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground uppercase text-sm tracking-wider">
                {t("footer.navigation")}
              </h4>
              <ul className="space-y-2">
                {[
                  t("footer.links.home"),
                  t("footer.links.services"),
                  t("footer.links.method"),
                  t("footer.links.calculator"),
                  t("footer.links.contactLink"),
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground uppercase text-sm tracking-wider">
                {t("footer.links.contactLink")}
              </h4>
              <ul className="space-y-2 text-foreground/60">
                <li>hola@julieta.com</li>
                <li>+54 9 11 xxxx-xxxx</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
            <p>
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
