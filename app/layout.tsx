import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agencija za Trubače | Profesionalni Trubači za Svadbe, Slave i Proslave | Srbija",
  description: "Vodeca agencija za angažovanje profesionalnih trubača. Cene od 50€ do 1000€. Učesnici i pobednici Guče. Trubači za svadbe, slave, rođendane i sve proslave širom Srbije i regiona. Pozovite nas!",
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
    "trubači za slavu",
    "trubači za rođendan",
    "trubači za sahranu",
    "trubači Srbija",
    "trubači Guča",
    "pobednici Guče",
    "trubači za proslavu",
    "profesionalni trubači",
    "trubači cena",
    "povoljni trubači",
    "trubači Beograd",
    "trubači za svadbe",
    "trubački orkestar",
    "trubači za venčanje",
    "najbolji trubači",
    "trubači regija",
    "narodni orkestar",
    "trubačka muzika",
    "agencija za trubače",
    "menadžer trubača",
    "booking trubači",
    "rezervacija trubača",
    "trubači za maturu",
    "trubači za krštenje",
  ],
  openGraph: {
    title: "Agencija za Trubače | Profesionalni Trubači za Sve Proslave",
    description: "Vodeca agencija za najbolje trubače u Srbiji. Učesnici i pobednici Guče. Cene od 50€ do 1000€. Trubači za svadbe, slave, rođendane i sve vrste proslava.",
    type: "website",
    locale: "sr_RS",
    siteName: "Agencija za Trubače",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencija za Trubače | Profesionalni Trubači za Sve Proslave",
    description: "Vodeca agencija za najbolje trubače. Učesnici i pobednici Guče. Cene od 50€ do 1000€.",
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
