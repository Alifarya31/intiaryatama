import { site } from "@/data/site";
import SectionHeader from "./SectionHeader";
import { Stagger, StaggerItem } from "./motion";

/**
 * Cara Kerja sebagai alur:
 * - HP/tablet: timeline vertikal, nomor di atas garis di sisi kiri.
 * - Desktop (lg): timeline horizontal, garis menyambung antar nomor.
 */
export default function CaraKerja() {
  const { caraKerja } = site;
  const jumlah = caraKerja.langkah.length;

  return (
    <section
      id="cara-kerja"
      className="relative isolate overflow-hidden w-full bg-biru-tua py-14 md:py-24 lg:py-28 scroll-mt-20"
    >
      {/* Pola titik halus (dekoratif) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--color-pola-titik)_1px,transparent_1px)] bg-size-[22px_22px] mask-[linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <SectionHeader
          tone="gelap"
          badge={caraKerja.badge}
          judul={caraKerja.judul}
          deskripsi={caraKerja.deskripsi}
        />

        <Stagger as="ol" className="grid grid-cols-1 lg:grid-cols-5 lg:gap-8 max-w-2xl lg:max-w-none mx-auto">
          {caraKerja.langkah.map((langkah, i) => {
            const terakhir = i === jumlah - 1;
            return (
              <StaggerItem as="li" key={langkah.nomor} className={`relative pl-16 lg:pl-0 ${terakhir ? "" : "pb-8 lg:pb-0"}`}>
                {/* Garis penghubung: vertikal (HP) & horizontal (desktop) */}
                {!terakhir && (
                  <>
                    <span aria-hidden className="lg:hidden absolute left-6 top-14 bottom-2 w-px bg-on-biru-tua/20" />
                    <span aria-hidden className="hidden lg:block absolute top-6 left-15 -right-5 h-px bg-on-biru-tua/20" />
                  </>
                )}

                <span
                  className={`absolute left-0 top-0 lg:static flex items-center justify-center w-12 h-12 rounded-pil font-headline-sm text-[17px] font-extrabold ${
                    langkah.tagMenonjol
                      ? "bg-secondary-container text-on-aksen"
                      : "bg-on-biru-tua/10 text-on-biru-tua ring-1 ring-on-biru-tua/25"
                  }`}
                >
                  {langkah.nomor}
                </span>

                <div className="pt-1 lg:pt-6">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-pil font-label-md text-[12px] leading-5 mb-2 ${
                      langkah.tagMenonjol
                        ? "bg-secondary-container/15 text-aksen-pada-biru-tua"
                        : "bg-on-biru-tua/10 text-on-biru-tua-variant"
                    }`}
                  >
                    {langkah.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-biru-tua mb-2">{langkah.judul}</h3>
                  <p className="font-body-isi text-body-isi text-on-biru-tua-variant">{langkah.deskripsi}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
