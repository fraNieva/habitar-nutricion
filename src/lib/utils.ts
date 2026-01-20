import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(message?: string) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${whatsappNumber}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}
