import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "@/components/providers";
import Metrics from "@/components/metrics";

export const metadata = {
  title: "TThroo",
  description: "Learn the best practices used in open source",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <Metrics />
      </body>
    </html>
  );
}
