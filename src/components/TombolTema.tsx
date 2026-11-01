"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { site } from "@/data/site";
import { URUTAN_TEMA, simpanTema, type PilihanTema } from "@/lib/tema";

function langgananTema(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-tema-pilihan"] });
  return () => observer.disconnect();
}

function bacaPilihan(): PilihanTema {
  const p = document.documentElement.getAttribute("data-tema-pilihan");
  return p === "terang" || p === "gelap" ? p : "sistem";
}

/**
 * Tombol tema tiga keadaan: sistem → terang → gelap.
 * Ikon dipilih lewat CSS dari atribut <html data-tema-pilihan>, jadi ikon yang
 * benar sudah tampil sejak render pertama (tanpa kedipan).
 */
export default function TombolTema({ className = "inline-flex" }: { className?: string }) {
  const pilihan = useSyncExternalStore(langgananTema, bacaPilihan, () => "sistem" as const);
  const { tema } = site;
  const berikutnya = URUTAN_TEMA[(URUTAN_TEMA.indexOf(pilihan) + 1) % URUTAN_TEMA.length];
  const label = `${tema.labelTombol}: ${tema.nama[pilihan]}. ${tema.gantiKe} ${tema.nama[berikutnya]}.`;

  return (
    <button
      type="button"
      onClick={() => simpanTema(berikutnya)}
      aria-label={label}
      title={label}
      className={`${className} items-center justify-center w-10 h-10 rounded-tombol border border-outline-variant bg-kartu text-on-surface hover:bg-surface-container-low transition-colors duration-150 ease-out shrink-0`}
    >
      <SunMoon size={19} className="hidden in-data-[tema-pilihan=sistem]:block" />
      <Sun size={19} className="hidden in-data-[tema-pilihan=terang]:block" />
      <Moon size={19} className="hidden in-data-[tema-pilihan=gelap]:block" />
    </button>
  );
}
