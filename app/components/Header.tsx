"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "../content";
import { openBooking } from "./BookCTA";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-hairline/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-5">
        <Link href="/" className="flex items-center" aria-label={business.name}>
          <Image
            src="/logo-black.png"
            alt={business.name}
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-[13px] text-ink/80 sm:flex">
          <a href="/#about" className="transition hover:text-ink">About</a>
          <a href="/#services" className="transition hover:text-ink">Services</a>
          <a href="/#why" className="transition hover:text-ink">Why us</a>
          <a href="/#faq" className="transition hover:text-ink">FAQ</a>
        </nav>
        <button
          type="button"
          onClick={openBooking}
          className="rounded-full bg-ink px-4 py-1.5 text-[13px] font-medium text-white transition hover:bg-ink/85"
        >
          {business.ctaShort}
        </button>
      </div>
    </header>
  );
}
