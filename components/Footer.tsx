"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { contactInfo } from "@/constants/index";
import { PhoneIcon, MailIcon } from "lucide-react";

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
            <h3 className="text-xl font-bold text-primary mb-4 text-left">Trubači Ristić</h3>
            <p className="text-sm">
              Profesionalni trubači za sve vaše proslave. Od intimnih okupljanja do velikih svadbi,
              donosimo radost i tradiciju na svaki događaj.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4 text-left">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <Link href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <PhoneIcon className="w-4 h-4" />
                {contactInfo.phoneDisplay}
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
            &copy; {new Date().getFullYear()} Trubači Ristić. Sva prava zadržana.
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
