import { CoachingFeature, Deliverable } from "@/types/home";

export const coachingFeatures: CoachingFeature[] = [
  {
    id: "habit",
    icon: "Activity",
    titleKey: "coaching.habit.title",
    descriptionKey: "coaching.habit.description",
  },
  {
    id: "emotional",
    icon: "MessageCircle",
    titleKey: "coaching.emotional.title",
    descriptionKey: "coaching.emotional.description",
  },
];

export const deliverables: Deliverable[] = [
  {
    id: 1,
    titleKey: "coaching.deliverable1.title",
    descriptionKey: "coaching.deliverable1.description",
    variant: "white",
  },
  {
    id: 2,
    titleKey: "coaching.deliverable2.title",
    descriptionKey: "coaching.deliverable2.description",
    variant: "primary",
  },
  {
    id: 3,
    titleKey: "coaching.deliverable3.title",
    descriptionKey: "coaching.deliverable3.description",
    variant: "white",
  },
];
