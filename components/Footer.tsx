"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { contactInfo } from "@/constants/index";
import { MailIcon } from "lucide-react";
import { FaWhatsapp, FaViber, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-card py-12 border-t"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 text-left">Menadžer za Trubače</h3>
            <p className="text-sm">
              Profesionalni menadžer za angažovanje najboljih trubača u Beogradu, celoj Srbiji i inostranstvu.
              Povezujemo vas sa vrhunskim muzičarima za sve vrste proslava.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4 text-left">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <Link href={`https://wa.me/${contactInfo.phoneWhatsApp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div>{contactInfo.phoneWhatsAppDisplay}</div>
                </div>
              </Link>
              <Link href={`viber://chat?number=${contactInfo.phoneViber.replace(/\+/g, '%2B')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaViber className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="font-semibold">Viber</div>
                  <div>{contactInfo.phoneViberDisplay}</div>
                </div>
              </Link>
              <Link href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="font-semibold">Instagram</div>
                  <div>{contactInfo.instagramHandle}</div>
                </div>
              </Link>
              <Link href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <MailIcon className="w-4 h-4" />
                {contactInfo.email}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4 text-left">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#usluge" className="hover:text-primary transition-colors">
                  Usluge
                </Link>
              </li>
              <li>
                <Link href="/#o-nama" className="hover:text-primary transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/#galerija" className="hover:text-primary transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t pt-8 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Menadžer za Trubače - Beograd, Srbija, Inostranstvo. Sva prava zadržana.
          </p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank" rel="noopener noreferrer">
            Izrada sajta:{" "}
            <span className="font-bold text-primary">ManikamWebSolutions</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
