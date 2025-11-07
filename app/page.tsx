"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  services,
  benefits,
  faqs,
  contactInfo,
  eventTypes,
} from "@/constants/index";
import {
  CheckIcon,
  PhoneIcon,
  Music,
  Trophy,
  Users,
  MapPin,
  Clock,
  Star,
  Heart,
  Church,
  Cake,
  FlowerIcon,
  PartyPopper,
  GraduationCap,
  Award,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";

// Hero sekcija
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image sa overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1762257288212.jpg"
          alt="Trubači nastup"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6">
            Menadžer za Profesionalne Trubače
          </h1>
          <p className="text-xl md:text-2xl mb-4 md:mb-8 max-w-3xl mx-auto">
            Vaša agencija za najbolje trubače u Beogradu, celoj Srbiji i
            inostranstvu. Organizujemo nastupe za svadbe, slave i sve vrste
            proslava sa vrhunskim muzičarima
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#usluge">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-primary-foreground px-4 md:px-8 py-2 md:py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl transition-all"
              >
                Pogledajte naše usluge
              </motion.button>
            </Link>
            <Link href={`tel:${contactInfo.phone}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-sm text-white border-2 border-primary px-4 md:px-8 py-2 md:py-4 rounded-full text-lg font-semibold hover:bg-gradient-primary hover:text-primary-foreground transition-all flex items-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Pozovite nas
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Statistika */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8"
        >
          {[
            { number: "15+", label: "Godina iskustva" },
            { number: "500+", label: "Zadovoljnih klijenata" },
            { number: "3", label: "Kategorije usluga" },
            { number: "100%", label: "Posvećenost kvalitetu" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-5xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm md:text-base md:mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Sekcija sa uslugama
function ServicesSection() {
  return (
    <section id="usluge" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Naše usluge
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Odaberite kategoriju koja najbolje odgovara vašim potrebama i
            budžetu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full bg-gradient-card hover:shadow-2xl hover:shadow-primary/20 transition-all border ${
                  service.featured ? "border-primary border-2" : "border-border"
                }`}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-bl-lg rounded-tr-lg font-bold shadow-lg ">
                      ⭐ Najpopularnije
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-left">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary text-left">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sekcija za tipove slavlja
function EventTypesSection() {
  const iconMap: Record<string, React.ElementType> = {
    wedding: Heart,
    slava: Church,
    birthday: Cake,
    funeral: FlowerIcon,
    party: PartyPopper,
    graduation: GraduationCap,
    ceremony: Award,
    baptism: Church,
  };

  return (
    <section id="slavlja" className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Za koja slavlja sviramo?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Naši profesionalni trubači su tu za svaku priliku - od najradosnijih
            do najsvečanijih trenutaka u vašem životu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, index) => {
            const Icon = iconMap[event.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-center text-primary">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Bilo da tražite trubače za svadbu, trubače za slavu, trubače za
            rođendan ili bilo koju drugu priliku - tu smo da vaš događaj učinimo
            nezaboravnim!
          </p>
          <Link href={`tel:${contactInfo.phone}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl transition-all"
            >
              Pozovite nas i rezervišite termin
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// O nama sekcija sa puno SEO teksta
function AboutSection() {
  return (
    <section id="o-nama" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-left">
              O nama - Menadžer za trubače u Beogradu i Srbiji
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                Dobrodošli u{" "}
                <strong>
                  vodeću agenciju za angažovanje trubača u Beogradu, celoj
                  Srbiji i inostranstvu
                </strong>
                ! Sa više od 15 godina iskustva u industriji, mi smo vaš{" "}
                <strong>pouzdani menadžer za trubače</strong>
                koji povezuje klijente sa najboljim trubačkim orkestrima za sve
                vrste proslava - od intimnih porodičnih okupljanja do velikih
                svadbi i korporativnih događaja.
              </p>
              <p>
                Kao{" "}
                <strong>profesionalni menadžment za trubače u Srbiji</strong>,
                sarađujemo isključivo sa proverenim muzičarima visokog
                kvaliteta, uključujući{" "}
                <strong>učesnike i pobednike festivala u Guči</strong>. Naša
                baza obuhvata preko 50 trubača i 15 različitih orkestara iz
                Beograda i cele Srbije, što nam omogućava da za svaku priliku
                pronađemo savršeno rešenje.
              </p>
              <p>
                Naša agencija funkcioniše kao{" "}
                <strong>vaš lični koncijerg za trubačku muziku</strong>. Mi
                preuzimamo svu organizaciju - od prvog kontakta, preko selekcije
                odgovarajućeg orkestra, dogovora repertoara, pa sve do
                finalizacije nastupa. Vi samo uživate u savršenoj muzici!
              </p>
              <p>
                Nudimo <strong>tri cenovne kategorije</strong> kako bismo
                zadovoljili različite budžete: od pristupačnih opcija za manje
                proslave (50-100€), preko srednjeg ranga profesionalaca
                (100-500€), do ekskluzivnih pobednika Guče (500-1000€).
                Garantujemo transparentnost cena i profesionalnu uslugu bez
                skrivenih troškova.
              </p>
              <p>
                Pokrivamo <strong>Beograd, celu Srbiju i inostranstvo</strong>{" "}
                uključujući Bosnu i Hercegovinu, Hrvatsku, Crnu Goru, Sloveniju,
                Austriju, Nemačku i Švajcarsku. Bilo da tražite trubače u
                Beogradu ili vam trebaju muzičari u inostranstvu - imamo trubače
                spremne da dođu i oduševе goste autentičnom balkanskom muzikom
                gde god da se nalazite.
              </p>
              <p>
                Naša misija je jednostavna:{" "}
                <strong>spajamo ljude sa najboljim trubačima</strong> i stvaramo
                nezaboravna iskustva. Verujte nam organizaciju muzike za vaš
                najvažniji dan - mi se brinem о svim detaljima da bi vi mogli
                potpuno da uživate!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/1762257288191.jpg"
                alt="Trubači nastup 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/1762257288218.jpeg"
                alt="Trubači nastup 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
              <Image
                src="/images/1762257288223.jpeg"
                alt="Trubači nastup 3"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Benefiti sekcija
function BenefitsSection() {
  const iconMap: Record<string, React.ElementType> = {
    experience: Clock,
    trophy: Trophy,
    music: Music,
    professional: Star,
    location: MapPin,
    flexible: Users,
  };

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Zašto odabrati nas?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Razlozi zbog kojih nas klijenti biraju za svoje najvažnije događaje
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card hover:shadow-2xl hover:shadow-primary/20 transition-all border-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-left text-primary">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Galerija sekcija
function GallerySection() {
  const images = [
    "/images/1762257288177.jpg",
    "/images/1762257288182.jpg",
    "/images/1762257288186.webp",
    "/images/1762257288191.jpg",
    "/images/1762257288194.png",
    "/images/1762257288206.jpeg",
    "/images/1762257288212.jpg",
    "/images/1762257288218.jpeg",
    "/images/1762257288223.jpeg",
  ];

  return (
    <section id="galerija" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Galerija
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pogledajte trenutke sa naših nastupa i uverite se u naš
            profesionalizam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Galerija slika ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ sekcija
function FAQSection() {
  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Odgovori na najčešća pitanja naših klijenata
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

// CTA sekcija sa parallax efektom
function CTASection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax efekat - slika se pomera sporije nego sadržaj
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Parallax pozadinska slika */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/1762257288194.png"
          alt="Trubači pozadina"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Overlay za providnost */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/20 to-[#0a0a0a]/30" />
      </motion.div>

      {/* CTA sadržaj preko slike */}
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm bg-[#0a0a0a]/40 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Spremni da rezervišete naše trubače?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Kontaktirajte nas danas i osigurajte nezaboravnu atmosferu za vašu
            proslavu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all shadow-lg"
              >
                Kontaktirajte nas
              </motion.button>
            </Link>
            <Link href={`tel:${contactInfo.phone}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                {contactInfo.phoneDisplay}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Glavna komponenta
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <EventTypesSection />
      <AboutSection />
      <CTASection />
      <BenefitsSection />
      <GallerySection />
      <FAQSection />
    </main>
  );
}
