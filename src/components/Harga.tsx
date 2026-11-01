import { ArrowRight, Check, Smartphone } from "lucide-react";
import { site } from "@/data/site";
import SectionHeader from "./SectionHeader";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function Harga() {
  const { harga } = site;
  const { aplikasiMobile } = harga;

  return (
    <section id="harga" className="w-full bg-surface-container-low py-14 md:py-24 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <SectionHeader badge={harga.badge} judul={harga.judul} deskripsi={harga.deskripsi} />

        <Stagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {harga.paket.map((paket) => {
            const unggulan = paket.unggulan === true;
            return (
              <StaggerItem
                key={paket.nama}
                className={`bg-kartu rounded-kartu p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-colors duration-150 ease-out ${
                  unggulan
                    ? "border-2 border-primary-container shadow-kartu-unggulan hover:border-primary"
                    : "border border-outline-variant/50 shadow-kartu hover:border-primary/50"
                }`}
              >
                <div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-pil font-label-md text-[12px] leading-5 mb-3 ${
                      paket.jenis === "Website"
                        ? "bg-surface-container text-primary"
                        : "bg-secondary-fixed text-on-secondary-fixed"
                    }`}
                  >
                    {paket.jenis}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{paket.nama}</h3>
                  <p className="font-caption text-[13px] leading-5 text-on-surface-variant mt-1 mb-3 md:mb-4 xl:min-h-10">
                    {harga.labelCocokUntuk}{" "}
                    <span className={unggulan ? "text-primary font-semibold" : "text-on-surface font-semibold"}>
                      {paket.cocokUntuk}
                    </span>
                  </p>
                  <div className="mb-5">
                    {/* Satu baris; ukuran turun bertahap agar "mulai Rp 15.000.000" muat di grid 4 kolom */}
                    <div className="font-headline-md text-headline-md xl:text-[22px] xl:leading-[30px] text-primary font-bold whitespace-nowrap">
                      mulai {paket.harga}
                    </div>
                    <span className="font-caption text-[13px] leading-5 text-on-surface-variant">
                      {paket.keterangan}
                    </span>
                  </div>
                  <ul className="border-t border-outline-variant/50 pt-4 md:pt-5 flex flex-col gap-2 md:gap-2.5 font-body-isi text-body-isi text-on-surface">
                    {paket.fitur.map((fitur) => (
                      <li key={fitur} className="flex items-start gap-2">
                        <Check size={16} className="text-primary mt-1 shrink-0" />
                        <span>{fitur}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 md:pt-7">
                  <a
                    href="#kontak"
                    className={
                      unggulan
                        ? "w-full inline-flex items-center justify-center h-12 bg-primary-container text-on-primary font-label-md text-[14px] rounded-tombol hover:bg-tombol-hover transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:hover:-translate-y-0.5 font-semibold"
                        : "w-full inline-flex items-center justify-center h-12 bg-kartu border border-outline-variant text-on-surface font-label-md text-[14px] rounded-tombol hover:bg-surface-container-low transition-colors duration-150 ease-out"
                    }
                  >
                    {paket.tombol}
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Aplikasi mobile tidak punya paket tetap: dihitung setelah konsultasi */}
        <Reveal className="mt-5 lg:mt-6 bg-kartu border border-outline-variant/50 rounded-kartu shadow-kartu p-5 sm:p-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center shrink-0">
            <Smartphone size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{aplikasiMobile.judul}</h3>
            <p className="font-body-isi text-body-isi text-on-surface-variant max-w-3xl">{aplikasiMobile.teks}</p>
          </div>
          <a
            href={aplikasiMobile.tombol.href}
            className="group inline-flex items-center justify-center gap-2 h-12 px-6 shrink-0 border border-primary-container text-primary font-label-md text-[14px] font-semibold rounded-tombol hover:bg-surface-container transition-colors duration-150 ease-out"
          >
            <span>{aplikasiMobile.tombol.label}</span>
            <ArrowRight
              size={16}
              className="transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
