import { routing } from "@/i18n/routing"; // Importamos la config central
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

// ... imports de fuentes y CSS ...

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Next 15 usa Promise
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validación robusta usando nuestro archivo de routing
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="...">
        <NextIntlClientProvider messages={messages}>
          {/* ... ThemeProvider y resto de app ... */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
