import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trubači Ristić | Profesionalni Trubači za Svadbe i Proslave | Srbija",
  description: "Profesionalni trubači Ristić - Povoljne cene od 50€ do 1000€. Učesnici i pobednici Guče. 15+ godina iskustva na svadbama, slavama i proslavama širom Srbije i regiona. Rezervišite odmah!",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "trubači",
    "trubači za svadbu",
    "trubači Srbija",
    "trubači Guča",
    "pobednici Guče",
    "trubači za proslavu",
    "trubači za slavu",
    "profesionalni trubači",
    "trubači cena",
    "povoljni trubači",
    "trubači Beograd",
    "trubači za svadbe",
    "trubački orkestar",
    "trubači za venčanje",
    "trubači za rođendan",
    "najbolji trubači",
    "trubači regija",
    "Ristić trubači",
    "narodni orkestar",
    "trubačka muzika",
  ],
  openGraph: {
    title: "Trubači Ristić | Profesionalni Trubači za Svadbe i Proslave",
    description: "Profesionalni trubači sa više od 15 godina iskustva. Učesnici i pobednici Guče. Cene od 50€ do 1000€. Pokrivamo celu Srbiju i region.",
    type: "website",
    locale: "sr_RS",
    siteName: "Trubači Ristić",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trubači Ristić | Profesionalni Trubači za Svadbe i Proslave",
    description: "Profesionalni trubači sa više od 15 godina iskustva. Učesnici i pobednici Guče.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className="antialiased text-muted-foreground bg-muted text-base md:text-xl"
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
