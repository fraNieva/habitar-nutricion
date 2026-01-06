"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/routing"; // Importamos de TU archivo routing
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace({ pathname }, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("changeLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-lg space-y-1">
        <DropdownMenuItem
          onClick={() => handleLocaleChange("es")}
          className={
            locale === "es"
              ? "bg-primary text-primary-foreground font-bold rounded-md cursor-pointer"
              : "rounded-md hover:bg-accent cursor-pointer"
          }
        >
          Español
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange("en")}
          className={
            locale === "en"
              ? "bg-primary text-primary-foreground font-bold rounded-md cursor-pointer"
              : "rounded-md hover:bg-accent cursor-pointer"
          }
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
