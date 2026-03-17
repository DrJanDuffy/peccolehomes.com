import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { WebSiteJsonLd } from "@/components/WebSiteJsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Homes for Sale in Peccole Ranch, Las Vegas | Peccole Ranch Real Estate",
    template: `%s | ${site.name}`,
  },
  description:
    "Peccole Ranch Las Vegas real estate. Find homes for sale in Peccole Ranch, Summerlin. Local expertise for buyers and sellers.",
  keywords: [
    "Peccole Ranch",
    "Peccole Ranch Las Vegas",
    "homes for sale Peccole Ranch",
    "Peccole Ranch real estate",
    "Summerlin real estate",
  ],
  openGraph: {
    title: "Homes for Sale in Peccole Ranch, Las Vegas",
    description: "Peccole Ranch real estate. Local expertise for buyers and sellers in Peccole Ranch, Summerlin.",
    url: site.baseUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(site.baseUrl),
  twitter: {
    card: "summary_large_image",
    title: "Homes for Sale in Peccole Ranch, Las Vegas",
    description: "Peccole Ranch real estate. Local expertise for buyers and sellers in Peccole Ranch, Summerlin.",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    other: { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
