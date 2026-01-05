// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// IMPORTANTE: Apuntar al archivo request.ts creado en el paso 2
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Otras configuraciones...
};

export default withNextIntl(nextConfig);
