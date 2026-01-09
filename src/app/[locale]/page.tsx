import { Footer } from "@/components/Footer";
import { CalculatorSection } from "@/components/home/CalculatorSection";
import { CoachingSection } from "@/components/home/CoachingSection";
import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhatsAppButton } from "@/components/home/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main className="flex-1 min-h-screen flex-col bg-background selection:bg-primary/20 font-sans">
        <HeroSection />
        <CoachingSection />
        <ServicesSection />
        <CalculatorSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
