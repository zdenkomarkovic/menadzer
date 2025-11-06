import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menadžer za Trubače Beograd | Trubači Srbija i Inostranstvo | Cene 50-1000€",
  description: "Profesionalni menadžer za trubače u Beogradu, celoj Srbiji i inostranstvu. Učesnici i pobednici Guče. Trubači za svadbe, slave, rođendane - sve proslave. Cene 50-1000€. Pozovite nas!",
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
    "trubači Beograd",
    "menadžer za trubače",
    "menadžer trubača Beograd",
    "trubači za svadbu",
    "trubači za slavu",
    "trubači za rođendan",
    "trubači za sahranu",
    "trubači Srbija",
    "trubači inostranstvo",
    "trubači Guča",
    "pobednici Guče",
    "trubači za proslavu",
    "profesionalni trubači",
    "trubači cena",
    "povoljni trubači",
    "trubači za svadbe Beograd",
    "trubački orkestar Beograd",
    "trubači za venčanje",
    "najbolji trubači Beograd",
    "trubači regija",
    "narodni orkestar",
    "trubačka muzika",
    "agencija za trubače",
    "booking trubači",
    "rezervacija trubača",
    "trubači za maturu",
    "trubači za krštenje",
    "trubači Austrija",
    "trubači Nemačka",
    "trubači Švajcarska",
  ],
  openGraph: {
    title: "Menadžer za Trubače Beograd | Trubači za Sve Proslave - Srbija i Inostranstvo",
    description: "Profesionalni menadžer za trubače u Beogradu, Srbiji i inostranstvu. Učesnici i pobednici Guče. Cene 50-1000€. Trubači za svadbe, slave i sve proslave.",
    type: "website",
    locale: "sr_RS",
    siteName: "Menadžer za Trubače",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menadžer za Trubače Beograd | Srbija i Inostranstvo",
    description: "Profesionalni menadžer za trubače. Učesnici i pobednici Guče. Beograd, Srbija, inostranstvo. Cene 50-1000€.",
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
