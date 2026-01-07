import { Activity, CheckCircle2, MessageCircle, Star } from "lucide-react";

type IconName = "Activity" | "MessageCircle" | "Star" | "CheckCircle";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const icons = {
    Activity: Activity,
    MessageCircle: MessageCircle,
    Star: Star,
    CheckCircle: CheckCircle2,
  };

  const IconComponent = icons[name];
  return <IconComponent className={className} />;
}
