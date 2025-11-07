"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/constants/index";
import { MailIcon, MapPinIcon, ClockIcon, PhoneIcon } from "lucide-react";
import { FaWhatsapp, FaViber, FaInstagram } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-dark pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero sekcija */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Kontaktirajte nas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Vaš menadžer za profesionalne trubače u Beogradu, celoj Srbiji i inostranstvu.
            Pozovite nas ili pošaljite poruku - tu smo da organizujemo savršenu muziku za vašu proslavu!
          </p>
        </motion.div>

        {/* Kontakt informacije i forma */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Leva strana - Kontakt info kartice */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 text-left">
                Kontakt informacije
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Dostupni smo 24/7 za sve vaše upite. Bilo da planirate svadbu u Beogradu,
                slavu u Srbiji ili događaj u inostranstvu - kontaktirajte nas!
              </p>
            </div>

            <div className="space-y-4">
              {/* Telefon 1 - Poziv i Viber */}
              <Card className="bg-gradient-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-bold text-primary mb-2 text-left">
                        Telefon 1
                      </h3>
                      <div className="text-lg font-semibold mb-3">
                        {contactInfo.phone1Display}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Link
                          href={`tel:${contactInfo.phone1}`}
                          className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                        >
                          <PhoneIcon className="w-4 h-4" />
                          <span>Pozovi</span>
                        </Link>
                        <Link
                          href={`viber://chat?number=${contactInfo.phone1.replace(/\+/g, '%2B')}`}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-colors"
                        >
                          <FaViber className="w-4 h-4 text-purple-500" />
                          <span>Viber</span>
                        </Link>
                        <Link
                          href={`https://wa.me/${contactInfo.phone1.replace(/\+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-colors"
                        >
                          <FaWhatsapp className="w-4 h-4 text-green-500" />
                          <span>WhatsApp</span>
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        Dostupni 24/7 za hitne zahteve
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Telefon 2 - Poziv i WhatsApp */}
              <Card className="bg-gradient-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-bold text-primary mb-2 text-left">
                        Telefon 2
                      </h3>
                      <div className="text-lg font-semibold mb-3">
                        {contactInfo.phone2Display}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Link
                          href={`tel:${contactInfo.phone2}`}
                          className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                        >
                          <PhoneIcon className="w-4 h-4" />
                          <span>Pozovi</span>
                        </Link>
                        <Link
                          href={`viber://chat?number=${contactInfo.phone2.replace(/\+/g, '%2B')}`}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-colors"
                        >
                          <FaViber className="w-4 h-4 text-purple-500" />
                          <span>Viber</span>
                        </Link>
                        <Link
                          href={`https://wa.me/${contactInfo.phone2.replace(/\+/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-colors"
                        >
                          <FaWhatsapp className="w-4 h-4 text-green-500" />
                          <span>WhatsApp</span>
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        Brza komunikacija 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram kartica */}
              <Card className="bg-gradient-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <FaInstagram className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 text-left">
                        Instagram
                      </h3>
                      <Link
                        href={contactInfo.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-primary transition-colors"
                      >
                        {contactInfo.instagramHandle}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-2">
                        Pratite naše nastupe i aktuelnosti
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email kartica */}
              <Card className="bg-gradient-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 text-left">
                        Email
                      </h3>
                      <Link
                        href={`mailto:${contactInfo.email}`}
                        className="text-lg hover:text-primary transition-colors break-all"
                      >
                        {contactInfo.email}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-2">
                        Odgovaramo u roku od 24h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lokacija kartica */}
              <Card className="bg-gradient-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 text-left">
                        Lokacija
                      </h3>
                      <p className="text-lg">
                        Beograd, Srbija
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Pokrivamo celu Srbiju i inostranstvo
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Radno vreme */}
              <Card className="bg-gradient-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 text-left">
                        Dostupnost
                      </h3>
                      <p className="text-lg">
                        Ponedeljak - Nedelja: 24/7
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Uvek dostupni za vas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Desna strana - Kontakt forma */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-card border border-border rounded-xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-6 text-left">
                Pošaljite nam poruku
              </h2>
              <p className="text-muted-foreground mb-8">
                Popunite formu ispod i kontaktiraćemo vas u najkraćem roku. Navedite datum događaja
                i tip proslave kako bismo vam dali najbolju ponudu.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Dodatne informacije */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#141414] rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Zašto kontaktirati naš menadžment?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-lg">Godina iskustva u organizaciji</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-lg">Trubača u našoj bazi</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-lg">Uspešno organizovanih proslava</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Kao profesionalni menadžer za trubače, garantujemo kvalitet, pouzdanost i
            nezaboravno muzičko iskustvo za vašu proslavu u Beogradu, Srbiji ili inostranstvu!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
