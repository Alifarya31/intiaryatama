import { ArrowRight, CircleCheck, Lock, ReceiptText } from "lucide-react";
import { site } from "@/data/site";
import { Stagger, StaggerGroup, StaggerItem } from "./motion";

const transaksiContoh = [
  { faktur: "#TRX-091", pelanggan: "UD Sentosa Abadi", total: "Rp 12.450.000", status: "Selesai" },
  { faktur: "#TRX-092", pelanggan: "Toko Makmur Jaya", total: "Rp 6.820.000", status: "Dikirim" },
  { faktur: "#TRX-093", pelanggan: "Koperasi Berkah", total: "Rp 29.230.000", status: "Selesai" },
];

export default function Hero() {
  const { hero } = site;

  return (
    <section className="relative w-full bg-surface py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <Stagger pemicu="load" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Kolom kiri */}
          <StaggerGroup className="lg:col-span-7 flex flex-col items-start">
            <StaggerItem className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pil bg-surface-container-high text-on-surface mb-6">
              <span className="w-1.5 h-1.5 rounded-pil bg-secondary-container shrink-0" />
              <span className="font-label-md text-label-md tracking-tight text-on-surface font-semibold">
                {hero.badge}
              </span>
            </StaggerItem>

            <StaggerItem
              as="h1"
              className="font-display-hero text-display-hero-mobile sm:text-display-hero xl:text-display-hero-lg text-on-surface tracking-tight mb-6"
            >
              {hero.judul}{" "}
              <span className="relative inline-block px-2 py-0.5 mt-1 bg-secondary-fixed text-on-secondary-fixed rounded-[10px]">
                {hero.judulSorotan}
              </span>
            </StaggerItem>

            <StaggerItem as="p" className="font-body-lg text-body-lg md:text-[18px] md:leading-[30px] text-on-surface-variant max-w-2xl mb-8">
              {hero.deskripsi}
            </StaggerItem>

            <StaggerItem className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 h-13 bg-primary-container text-on-primary font-label-md text-[14px] rounded-tombol hover:bg-tombol-hover transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:hover:-translate-y-0.5 shadow-kartu group"
              >
                <span>{hero.tombolUtama}</span>
                <ArrowRight
                  size={18}
                  className="transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:group-hover:translate-x-1"
                />
              </a>
              <a
                href="#harga"
                className="inline-flex items-center justify-center px-6 h-13 bg-kartu text-on-surface border border-outline-variant font-label-md text-[14px] rounded-tombol hover:bg-surface-container-low transition-colors duration-150 ease-out"
              >
                {hero.tombolKedua}
              </a>
            </StaggerItem>

            <StaggerItem className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-6 border-t border-surface-container">
              {hero.keunggulan.map((teks) => (
                <div
                  key={teks}
                  className="flex items-center gap-2 text-on-surface font-label-md text-[14px] leading-5"
                >
                  <CircleCheck size={18} className="text-primary shrink-0" />
                  <span>{teks}</span>
                </div>
              ))}
            </StaggerItem>
          </StaggerGroup>

          {/* Kolom kanan: mockup dashboard */}
          <StaggerItem className="lg:col-span-5 relative flex items-center justify-center sm:mb-8 lg:mb-0">
            <div className="w-full bg-kartu border border-outline-variant rounded-2xl shadow-md overflow-hidden">
              <div className="h-10 bg-surface-container-low border-b border-outline-variant px-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                  <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                  <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                </div>
                <div className="px-3 py-0.5 rounded bg-surface border border-outline-variant text-[11px] font-caption text-on-surface-variant flex items-center gap-1 min-w-0">
                  <Lock size={12} className="shrink-0" />
                  <span className="truncate">erp.intiaryatama.id/penjualan</span>
                </div>
                <div className="w-8" />
              </div>

              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider block">
                      Ringkasan Hari Ini
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-surface">
                      Rp 48.500.000
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-high text-primary font-label-sm text-label-sm rounded border border-outline-variant">
                    +18.4% Kemarin
                  </span>
                </div>

                <div className="border border-outline-variant rounded-lg overflow-hidden">
                  <div className="bg-surface-container-low px-3 py-2 border-b border-outline-variant grid grid-cols-12 font-label-sm text-label-sm text-on-surface-variant uppercase">
                    <div className="col-span-3">Faktur</div>
                    <div className="col-span-4">Pelanggan</div>
                    <div className="col-span-3 text-right">Total</div>
                    <div className="col-span-2 text-right">Status</div>
                  </div>
                  {transaksiContoh.map((trx, i) => (
                    <div
                      key={trx.faktur}
                      className={`px-3 py-2.5 grid grid-cols-12 items-center text-body-md font-body-md bg-kartu ${
                        i < transaksiContoh.length - 1 ? "border-b border-outline-variant" : ""
                      }`}
                    >
                      <div className="col-span-3 font-semibold text-primary">{trx.faktur}</div>
                      <div className="col-span-4 truncate text-on-surface">{trx.pelanggan}</div>
                      <div className="col-span-3 text-right font-medium">{trx.total}</div>
                      <div className="col-span-2 flex justify-end">
                        <span
                          className={`px-1.5 py-0.5 rounded font-label-sm text-label-sm ${
                            trx.status === "Dikirim"
                              ? "bg-secondary-fixed text-on-secondary-fixed"
                              : "bg-surface-container text-primary"
                          }`}
                        >
                          {trx.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-on-surface-variant font-caption text-caption">
                  <span>38 Transaksi Berhasil</span>
                  <span className="text-primary font-medium">Laporan Lengkap →</span>
                </div>
              </div>
            </div>

            {/* Kartu melayang: notifikasi faktur */}
            {/* Kartu ini hanya memakai transform dari animasi mengambang (CSS).
                Fade-in ditangani elemen pembungkus luar (kolom kanan). */}
            <div className="animasi-mengambang absolute -bottom-8 -left-6 sm:-left-8 w-64 bg-kartu border border-outline-variant rounded-2xl shadow-lg p-3 hidden sm:flex flex-col gap-2">
              <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
                <div className="w-7 h-7 rounded bg-secondary-fixed flex items-center justify-center">
                  <ReceiptText size={16} className="text-on-secondary-fixed" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface">Notifikasi Faktur</span>
                  <span className="font-caption text-[11px] text-on-surface-variant">
                    Baru saja • Otomatis
                  </span>
                </div>
              </div>
              <div className="text-[12px] font-body-md text-on-surface leading-tight">
                Faktur <span className="font-semibold text-primary">#INV-2024-089</span> LUNAS via
                QRIS BCA (Rp 1.450.000)
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
