"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhatsAppButton() {
  const t = useTranslations("HomePage");
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent(t("whatsapp.message"));

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
      rel="noreferrer"
      aria-label={t("whatsapp.ariaLabel")}
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </a>
  );
}
