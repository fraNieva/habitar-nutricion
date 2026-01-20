import {
  Activity,
  Book,
  CheckCircle2,
  MessageCircle,
  Star,
} from "lucide-react";

type IconName =
  | "Activity"
  | "MessageCircle"
  | "Star"
  | "CheckCircle"
  | "BookOpen";

interface IconProps {
  readonly name: IconName;
  readonly className?: string;
}

export function Icon({ name, className }: IconProps) {
  const icons = {
    Activity: Activity,
    MessageCircle: MessageCircle,
    Star: Star,
    CheckCircle: CheckCircle2,
    BookOpen: Book,
  };

  const IconComponent = icons[name];
  return <IconComponent className={className} />;
}
