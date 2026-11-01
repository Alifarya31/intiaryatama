import { ArrowRight, Check, Globe, Smartphone, Terminal, type LucideIcon } from "lucide-react";
import { site, type Layanan as LayananItem } from "@/data/site";
import SectionHeader from "./SectionHeader";
import { Stagger, StaggerItem } from "./motion";

const ikonLayanan: Record<LayananItem["ikon"], LucideIcon> = {
  website: Globe,
  mobile: Smartphone,
  sistem: Terminal,
};

export default function Layanan() {
  const { layanan } = site;

  return (
    <section id="layanan" className="w-full bg-surface-container-lowest py-14 md:py-24 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <SectionHeader badge={layanan.badge} judul={layanan.judul} deskripsi={layanan.deskripsi} />

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {layanan.daftar.map((item) => {
            const Ikon = ikonLayanan[item.ikon];
            return (
              <StaggerItem
                key={item.judul}
                className="bg-kartu border border-outline-variant/50 rounded-kartu shadow-kartu p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-primary/50 transition-colors duration-150 ease-out"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-4 lg:mb-6">
                    <Ikon size={28} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm lg:text-[22px] lg:leading-[30px] text-on-surface mb-2.5">
                    {item.judul}
                  </h3>
                  <p className="font-body-isi text-body-isi md:text-body-lg text-on-surface-variant mb-4 lg:mb-6">{item.deskripsi}</p>
                  <ul className="border-t border-outline-variant/50 pt-4 lg:pt-6 flex flex-col gap-2 md:gap-2.5">
                    {item.fitur.map((fitur) => (
                      <li key={fitur} className="flex items-start gap-2.5 font-body-isi text-body-isi text-on-surface">
                        <Check size={18} className="text-primary mt-[3px] shrink-0" />
                        <span>{fitur}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 lg:pt-8">
                  <a
                    href={item.tautan.href}
                    className="group inline-flex items-center gap-1.5 font-label-md text-[14px] text-primary font-bold hover:underline"
                  >
                    <span>{item.tautan.label}</span>
                    <ArrowRight
                      size={16}
                      className="transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
