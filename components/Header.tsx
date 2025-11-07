"use client";

import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList, contactInfo } from "@/constants/index";
import Image from "@/node_modules/next/image";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => (
              <Link key={index} href={item.link}>
                <motion.li
                  whileHover={{ color: "hsl(var(--primary))" }}
                  className={mobTitleStyles}
                >
                  <SheetTrigger>{item.title}</SheetTrigger>
                </motion.li>
              </Link>
            ))}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navList.map((item, index) => (
      <Link key={index} href={item.link}>
        <motion.li
          className="transition-colors underline-animation"
          whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
        >
          {item.title}
        </motion.li>
      </Link>
    ))}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full text-primary font-bold">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src={"/logo.png"} width={50} height={50} alt="trubaci" />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-bold leading-tight">Menadžer za</span>
            <span className="text-lg font-bold leading-tight text-gradient">
              Trubače
            </span>
          </div>
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-2">
          <Link href={`tel:${contactInfo.phone1}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="items-center justify-center rounded-full bg-gradient-primary text-primary-foreground text-xs md:text-base py-1 px-2 md:py-2 md:px-3 transition-all flex font-bold shadow-lg hover:shadow-xl gap-1"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden lg:inline">{contactInfo.phone1Display}</span>
            </motion.button>
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
