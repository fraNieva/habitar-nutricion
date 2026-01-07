export interface TrustIndicator {
  id: string;
  icon: "Star" | "CheckCircle";
  translationKey: string;
}

export interface CoachingFeature {
  id: string;
  icon: "Activity" | "MessageCircle";
  titleKey: string;
  descriptionKey: string;
}

export interface Deliverable {
  id: number;
  titleKey: string;
  descriptionKey: string;
  variant: "white" | "primary";
}

export interface ServiceFeature {
  id: number;
  translationKey: string;
}

export interface Service {
  id: string;
  icon: "Activity" | "Star" | "MessageCircle";
  titleKey: string;
  descriptionKey: string;
  features: ServiceFeature[];
  ctaKey: string;
  variant: "default" | "featured" | "outline";
}

export interface Testimonial {
  id: string;
  quoteKey: string;
  authorKey: string;
  roleKey: string;
}

export interface CalculatorPoint {
  id: number;
  translationKey: string;
}
