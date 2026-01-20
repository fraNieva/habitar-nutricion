import { Service } from "@/types/home";

export const services: Service[] = [
  {
    id: "service1",
    icon: "Activity",
    titleKey: "services.service1.title",
    descriptionKey: "services.service1.description",
    features: [
      { id: 1, translationKey: "services.service1.feature1" },
      { id: 2, translationKey: "services.service1.feature2" },
      { id: 3, translationKey: "services.service1.feature3" },
    ],
    ctaKey: "services.service1.cta",
    variant: "featured",
  },
  {
    id: "service2",
    icon: "Star",
    titleKey: "services.service2.title",
    descriptionKey: "services.service2.description",
    features: [
      { id: 1, translationKey: "services.service2.feature1" },
      { id: 2, translationKey: "services.service2.feature2" },
      { id: 3, translationKey: "services.service2.feature3" },
    ],
    ctaKey: "services.service2.cta",
    variant: "default",
  },
  {
    id: "service3",
    icon: "MessageCircle",
    titleKey: "services.service3.title",
    descriptionKey: "services.service3.description",
    features: [
      { id: 1, translationKey: "services.service3.feature1" },
      { id: 2, translationKey: "services.service3.feature2" },
      { id: 3, translationKey: "services.service3.feature3" },
    ],
    ctaKey: "services.service3.cta",
    variant: "featured",
  },
];
