"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import TombolTema from "./TombolTema";

const BATAS_SCROLL = 10;

function langgananScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

/** Menandai section yang sedang terlihat di tengah layar (scroll spy). */
function useSectionAktif() {
  const [aktif, setAktif] = useState<string | null>(null);

  useEffect(() => {
    const sections = site.navigasi
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setAktif(`#${entry.target.id}`);
        }
      },
      // Garis deteksi tipis di sekitar 40% tinggi layar
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));

    // Kembali ke atas (hero) → tidak ada tautan yang aktif
    const cekAtas = () => {
      if (window.scrollY < 120) setAktif(null);
    };
    window.addEventListener("scroll", cekAtas, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", cekAtas);
    };
  }, []);

  return aktif;
}

export default function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  // Hanya re-render saat melewati batas 10px, bukan di setiap event scroll.
  const sudahScroll = useSyncExternalStore(
    langgananScroll,
    () => window.scrollY > BATAS_SCROLL,
    () => false,
  );
  const aktif = useSectionAktif();
  const tutupMenu = () => setMenuTerbuka(false);

  useEffect(() => {
    if (!menuTerbuka) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuTerbuka(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuTerbuka]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 pointer-events-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-margin-mobile md:px-margin">
        <div className="pointer-events-auto relative isolate h-16 flex items-center justify-between gap-gutter rounded-pil border border-navbar-garis bg-navbar/80 backdrop-blur-xl backdrop-saturate-150 pl-2.5 pr-2 sm:pl-5">
          {/* Bayangan: lapisan terpisah yang di-fade lewat opacity (tanpa animasi box-shadow) */}
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 -z-10 rounded-pil shadow-kartu-unggulan transition-opacity duration-300 ${
              sudahScroll || menuTerbuka ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Kilau tipis di tepi atas */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
          />

          <a href="#" className="group flex items-center gap-2.5 sm:gap-3 min-w-0" onClick={tutupMenu}>
            <span className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-pil bg-kartu border border-navbar-garis transition-transform duration-300 ease-out motion-safe:group-hover:rotate-[-8deg] motion-safe:group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt={`${site.namaPerusahaan} Logo`}
                width={24}
                height={24}
                priority
                className="h-6 w-auto object-contain"
              />
            </span>
            <span className="flex flex-col min-w-0">
              <span className="font-title-lg text-[15px] sm:text-title-lg text-on-surface tracking-tight uppercase leading-none truncate">
                {site.namaPerusahaan}
              </span>
              <span className="font-caption text-caption text-on-surface-variant truncate mt-0.5">
                {site.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-pil bg-surface-container-low/80 border border-navbar-garis">
            {site.navigasi.map((item) => {
              const isAktif = aktif === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isAktif ? "location" : undefined}
                  className={`relative inline-flex items-center gap-1.5 h-9 px-4 rounded-pil font-label-md text-label-md transition-[color,background-color,box-shadow] duration-200 ease-out ${
                    isAktif
                      ? "bg-kartu text-primary shadow-kartu"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-kartu/60"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`w-1.5 h-1.5 rounded-pil bg-secondary-container transition-[opacity,scale] duration-200 ${
                      isAktif ? "opacity-100 scale-100" : "opacity-0 scale-0 -mr-3"
                    }`}
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            {/* Di HP tombol tema ada di menu hamburger agar nama perusahaan tidak terpotong */}
            <TombolTema className="hidden sm:inline-flex rounded-pil!" />
            <a
              href="#kontak"
              className="group hidden sm:inline-flex items-center justify-center gap-2 h-11 pl-5 pr-2 bg-primary-container text-on-primary font-label-md text-label-md rounded-pil hover:bg-tombol-hover shadow-kartu transition-[background-color,translate] duration-200 ease-out motion-safe:hover:-translate-y-0.5"
            >
              {site.tombolNavbar}
              <span className="grid place-items-center w-7 h-7 rounded-pil bg-on-primary/15 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-0.5">
                <ArrowRight size={15} strokeWidth={2.5} />
              </span>
            </a>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-pil border border-outline-variant bg-kartu text-on-surface hover:bg-surface-container-low transition-colors duration-150 ease-out"
              aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuTerbuka}
              aria-controls="menu-mobile"
              onClick={() => setMenuTerbuka((v) => !v)}
            >
              {menuTerbuka ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu mobile: kartu melayang di bawah navbar, transisi opacity + transform */}
        <nav
          id="menu-mobile"
          inert={!menuTerbuka}
          className={`lg:hidden mt-2 rounded-kartu border border-navbar-garis bg-navbar/95 backdrop-blur-xl shadow-kartu-unggulan max-h-[calc(100vh-6.5rem)] overflow-y-auto origin-top transition-[opacity,translate,scale] duration-200 ease-out ${
            menuTerbuka
              ? "pointer-events-auto opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
          }`}
        >
          <div className="p-space-sm flex flex-col gap-1">
            {site.navigasi.map((item) => {
              const isAktif = aktif === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={tutupMenu}
                  aria-current={isAktif ? "location" : undefined}
                  className={`flex items-center justify-between font-label-md text-label-md rounded-tombol px-space-md py-3.5 transition-colors duration-150 ease-out ${
                    isAktif
                      ? "bg-surface-container-low text-primary"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {item.label}
                  <ArrowRight size={16} className={isAktif ? "opacity-100" : "opacity-40"} />
                </a>
              );
            })}
            <div className="sm:hidden flex items-center justify-between px-space-md py-1.5 mt-1 border-t border-navbar-garis pt-3">
              <span className="font-label-md text-label-md text-on-surface-variant">{site.tema.labelTombol}</span>
              <TombolTema className="inline-flex rounded-pil!" />
            </div>
            <a
              href="#kontak"
              onClick={tutupMenu}
              className="sm:hidden mt-space-sm inline-flex items-center justify-center gap-2 h-12 px-space-md bg-primary-container text-on-primary font-label-md text-label-md rounded-pil hover:bg-tombol-hover transition-colors duration-150 ease-out"
            >
              {site.tombolNavbar}
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
