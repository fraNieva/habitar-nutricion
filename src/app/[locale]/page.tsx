import { MacroCalculator } from "@/components/macro-calculator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Star,
} from "lucide-react";

export default function Home() {
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
              NUTRICIÓN CONSCIENTE & HÁBITOS SOSTENIBLES
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-foreground tracking-tight">
              Ciencia para tu cuerpo, <br />
              <span className="text-primary italic">consciencia</span> para tu
              proceso
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Nutrición y antropometría con un enfoque humano, pensado para que
              entiendas tu cuerpo y sostengas los cambios en el tiempo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full h-16 px-10 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/25"
              >
                Reserva tu evaluación
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full h-16 px-10 text-lg font-bold border-2 border-primary/20 text-foreground hover:bg-primary/5 bg-transparent"
              >
                Conocé cómo trabajo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-foreground/50">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="font-bold text-sm">Antropometría ISAK</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">
                  Procesos reales y personalizados
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 'Coaching Hook' Section: Empathy + Precision */}
      <section
        id="metodo"
        className="py-24 bg-white/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                  ¿Por qué el{" "}
                  <span className="text-primary">Coaching Nutricional</span>{" "}
                  hace la diferencia?
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Un plan no funciona si no encaja en tu vida. Trabajo sobre
                  hábitos, contexto y relación con la comida para que el proceso
                  sea posible, realista y sostenible.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    key: 1,
                    title: "Gestión de Hábitos",
                    desc: "Acompañamiento práctico para incorporar cambios que se mantengan en el tiempo.",
                    icon: <Activity className="w-6 h-6 text-primary" />,
                  },
                  {
                    key: 2,
                    title: "Enfoque Emocional",
                    desc: "Entender cómo, cuándo y por qué comés también es parte del proceso.",
                    icon: <MessageCircle className="w-6 h-6 text-primary" />,
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 p-6 rounded-3xl bg-background border border-primary/5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Visual Representation of 3 Deliverables */}
              <div className="grid gap-6">
                <Card className="rounded-3xl border-none shadow-xl bg-white p-8 translate-x-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <h4 className="font-serif font-bold text-xl">
                      Plan de Acción Mensual
                    </h4>
                  </div>
                  <p className="text-foreground/60">
                    Objetivos claros, requerimientos energéticos y lineamientos
                    simples adaptados a tu momento.
                  </p>
                </Card>

                <Card className="rounded-3xl border-none shadow-xl bg-primary text-white p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h4 className="font-serif font-bold text-xl">
                      Guía Visual de Comidas
                    </h4>
                  </div>
                  <p className="opacity-80">
                    Porciones, combinaciones e intercambios explicados de forma
                    clara y flexible.
                  </p>
                </Card>

                <Card className="rounded-3xl border-none shadow-xl bg-white p-8 translate-x-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <h4 className="font-serif font-bold text-xl">
                      Seguimiento y Ajustes
                    </h4>
                  </div>
                  <p className="text-foreground/60">
                    Revisión del proceso, sensaciones, adherencia y, si
                    corresponde, mediciones antropométricas.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="servicios" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Servicios diseñados para{" "}
              <span className="text-primary italic">tu vida real</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Combina ciencia, empatía y seguimiento continuo para lograr
              cambios que se mantengan en el tiempo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1: Cambios — Hábitos y aprendizaje */}
            <Card className="rounded-3xl border-none shadow-lg bg-white p-8 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Cambios — Hábitos y aprendizaje
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                Proceso enfocado en aprender a comer, mejorar la relación con la
                comida y construir hábitos sostenibles, sin mediciones
                corporales.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  { text: "Educación nutricional aplicada", id: 1 },
                  { text: "Guías visuales y ejemplos flexibles", id: 2 },
                  { text: "Seguimiento mensual", id: 3 },
                ].map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-full bg-primary text-white hover:bg-primary/90 font-bold">
                Quiero Empezar
              </Button>
            </Card>

            {/* Service 2: Cambios y Medidas */}
            <Card className="rounded-3xl border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 p-8 hover:shadow-xl transition-shadow group border-2 border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Cambios y Medidas
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                Además del trabajo de hábitos, sumamos mediciones
                antropométricas para interpretar tu evolución corporal con datos
                reales.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  { text: "Todo lo del plan Cambios", id: 1 },
                  { text: "Mediciones antropométricas", id: 2 },
                  { text: "Ajustes según evolución y sensaciones", id: 3 },
                ].map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-full bg-primary text-white hover:bg-primary/90 font-bold shadow-lg shadow-primary/30">
                Es para mi
              </Button>
            </Card>

            {/* Service 3: Acompañamiento Cercano */}
            <Card className="rounded-3xl border-none shadow-lg bg-white p-8 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Acompañamiento Cercano
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                Un proceso con mayor sostén, contacto más frecuente y ajustes
                continuos, ideal si necesitás más guía y motivación.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  { text: "Seguimiento más cercano", id: 1 },
                  { text: "Ajustes continuos", id: 2 },
                  { text: "Con o sin mediciones", id: 3 },
                ].map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full rounded-full border-2 border-primary/30 text-foreground hover:bg-primary/5 font-bold bg-transparent"
              >
                Más información
              </Button>
            </Card>
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
                  HERRAMIENTA GRATUITA
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                  Comienza con <br />
                  <span className="text-primary italic">claridad</span>
                </h2>
                <p className="text-xl text-foreground/70 leading-relaxed max-w-md">
                  Una estimación inicial para entender cuánta energía necesita
                  tu cuerpo según tu contexto y objetivos.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground/60">
                    Orientativa, no prescriptiva
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground/60">
                    Ideal como primer paso del proceso
                  </p>
                </div>
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
              HISTORIAS REALES
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Cambios que{" "}
              <span className="text-primary italic">se sostienen</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Más allá de los números, lo que importa es cómo te sientes cada
              día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Recuperé mi energía en los entrenamientos y aprendí a comer sin ansiedad. Julieta me enseñó que no se trata de contar calorías sino de entender mi cuerpo.",
                author: "Martina R.",
                role: "Entrena Crossfit",
              },
              {
                quote:
                  "Bajé 8kg en 4 meses sin pasar hambre. Lo mejor fue el acompañamiento emocional, no solo me dio un plan, me ayudó a cambiar mi mentalidad.",
                author: "Lucas M.",
                role: "Trabajo de oficina",
              },
              {
                quote:
                  "La evaluación ISAK fue reveladora. Entender mi composición corporal real me motivó a seguir el plan con disciplina y los resultados fueron increíbles.",
                author: "Camila P.",
                role: "Corredora amateur",
              },
            ].map((testimonial) => (
              <Card
                key={testimonial.author}
                className="rounded-3xl border-none shadow-lg bg-white p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-foreground/50">
                    {testimonial.role}
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
              Tu cuerpo merece <br />
              <span className="text-primary italic">
                un proceso consciente y personalizado
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              No se trata de hacerlo perfecto, sino de hacerlo posible. Te
              acompaño a entender tu cuerpo y construir hábitos que se
              sostengan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full h-16 px-12 text-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/25"
              >
                Reserva evaluación
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full h-16 px-12 text-lg font-bold border-2 border-primary/20 text-foreground hover:bg-white bg-transparent"
              >
                Conocé cómo trabajo
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
                Julieta<span className="text-primary">.</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed max-w-sm">
                Coach nutricional especializada en hábitos y antropometría ISAK.
                Acompaño procesos reales con enfoque consciente y sostenible.
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
                Navegación
              </h4>
              <ul className="space-y-2">
                {[
                  "Inicio",
                  "Servicios",
                  "Método",
                  "Calculadora",
                  "Contacto",
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
                Contacto
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
              © {new Date().getFullYear()} Julieta - Nutrición Deportiva. Todos
              los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
