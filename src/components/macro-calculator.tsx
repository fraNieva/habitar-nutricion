"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Scale,
  Sparkles,
  Target,
} from "lucide-react";
import { useState } from "react";

export function MacroCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weight: "",
    goal: "",
    activity: "",
  });
  const [result, setResult] = useState<null | {
    kcal: number;
    p: number;
    c: number;
    f: number;
  }>(null);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const calculate = () => {
    // Basic logic for demonstration
    const weightNum = Number.parseInt(formData.weight) || 70;
    const baseKcal = weightNum * 30;
    setResult({
      kcal: baseKcal,
      p: Math.round(weightNum * 2),
      c: Math.round(weightNum * 4),
      f: Math.round(weightNum * 0.8),
    });
    setStep(4);
  };

  return (
    <Card className="rounded-3xl border-none shadow-2xl bg-white overflow-hidden max-w-lg mx-auto">
      <div className="bg-primary/5 p-8 text-center space-y-2">
        <h3 className="text-2xl font-serif font-bold text-foreground">
          Descubre tu punto de partida
        </h3>
        <p className="text-sm text-foreground/60">
          Es un primer paso, no un examen médico.
        </p>
      </div>

      <CardContent className="p-8">
        {step < 4 && (
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full mx-1 transition-colors ${
                  step >= i ? "bg-primary" : "bg-primary/10"
                }`}
              />
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center gap-3 text-primary">
              <Scale className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">
                Paso 1: Tu peso actual
              </span>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/80">
                ¿Cuánto pesas aproximadamente?
              </label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="Ej: 70"
                  className="h-14 rounded-2xl border-primary/20 bg-primary/5 focus:bg-white text-lg font-bold pl-6 pr-12 transition-all"
                  value={formData.weight}
                  onChange={(e) =>
                    setFormData({ ...formData, weight: e.target.value })
                  }
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-primary">
                  kg
                </span>
              </div>
            </div>
            <Button
              onClick={handleNext}
              className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg"
            >
              Continuar <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center gap-3 text-primary">
              <Target className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">
                Paso 2: Tu objetivo
              </span>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/80">
                ¿Qué buscas lograr?
              </label>
              <Select
                onValueChange={(val) => setFormData({ ...formData, goal: val })}
              >
                <SelectTrigger className="h-14 rounded-2xl border-primary/20 bg-primary/5 text-lg font-bold px-6">
                  <SelectValue placeholder="Selecciona un objetivo" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-primary/10">
                  <SelectItem value="loss">Perder grasa</SelectItem>
                  <SelectItem value="maintain">Mantenimiento</SelectItem>
                  <SelectItem value="gain">Ganar masa muscular</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="h-14 w-14 rounded-2xl border-2 border-primary/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1 h-14 rounded-2xl bg-primary text-white font-bold text-lg"
              >
                Siguiente
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center gap-3 text-primary">
              <Flame className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">
                Paso 3: Actividad física
              </span>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/80">
                ¿Cuántas veces entrenas?
              </label>
              <Select
                onValueChange={(val) =>
                  setFormData({ ...formData, activity: val })
                }
              >
                <SelectTrigger className="h-14 rounded-2xl border-primary/20 bg-primary/5 text-lg font-bold px-6">
                  <SelectValue placeholder="Nivel de actividad" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-primary/10">
                  <SelectItem value="1">Sedentario</SelectItem>
                  <SelectItem value="3">3-5 veces por semana</SelectItem>
                  <SelectItem value="5">Atleta / Diario</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="h-14 w-14 rounded-2xl border-2 border-primary/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={calculate}
                className="flex-1 h-14 rounded-2xl bg-primary text-white font-bold text-lg"
              >
                Ver resultados <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 4 && result && (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
            <div className="text-center py-4">
              <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">
                Punto de partida
              </p>
              <h4 className="text-5xl font-serif font-bold text-foreground">
                {result.kcal} <span className="text-lg font-sans">kcal</span>
              </h4>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Proteína",
                  val: `${result.p}g`,
                  color: "bg-primary/10",
                },
                {
                  label: "Carbos",
                  val: `${result.c}g`,
                  color: "bg-foreground/5",
                },
                { label: "Grasas", val: `${result.f}g`, color: "bg-primary/5" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl ${item.color} text-center`}
                >
                  <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-primary text-white text-center space-y-4">
              <p className="text-sm leading-relaxed opacity-90">
                Este es un cálculo general. Para una precisión real basada en tu
                composición corporal (ISAK), lo ideal es una evaluación
                presencial.
              </p>
              <Button className="w-full h-14 rounded-xl bg-white text-primary hover:bg-white/90 font-bold">
                Agenda tu sesión ISAK
              </Button>
            </div>

            <Button
              variant="link"
              onClick={() => setStep(1)}
              className="w-full text-foreground/40 text-xs font-bold uppercase tracking-widest"
            >
              Reiniciar calculadora
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
