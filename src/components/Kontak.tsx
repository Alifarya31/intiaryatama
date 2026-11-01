"use client";

import type { FormEvent } from "react";
import { ArrowRight, Building2, Mail, Send, Shield, Video } from "lucide-react";
import { site, waLink } from "@/data/site";
import IkonWhatsApp from "./IkonWhatsApp";
import SectionHeader from "./SectionHeader";
import { Stagger, StaggerItem } from "./motion";

const kelasInput =
  "w-full bg-surface-container-lowest border border-outline-variant rounded-input font-body-isi text-body-isi text-on-surface focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-surface-container-high transition-[border-color,box-shadow] duration-150 ease-out";
const kelasLabel = "font-label-md text-label-md text-on-surface block mb-1.5 font-semibold";
const kelasKartu = "bg-kartu border border-outline-variant/50 rounded-kartu shadow-kartu";
const kelasIkonInfo =
  "w-11 h-11 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0";

export default function Kontak() {
  const { kontak, kontakSection } = site;
  const { formulir, kartuWhatsapp } = kontakSection;

  function kirimKeWhatsapp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const isian = (nama: string) => String(data.get(nama) ?? "").trim();
    const { pesan: p } = formulir;

    const pesan = [
      `Halo ${site.namaPerusahaan}, ${p.pembuka}`,
      "",
      `${p.nama}: ${isian("nama")}`,
      `${p.jenisUsaha}: ${isian("jenisUsaha")}`,
      `${p.layanan}: ${isian("layanan")}`,
      "",
      `${p.cerita}:`,
      isian("cerita"),
    ].join("\n");

    window.open(waLink(pesan), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="kontak" className="w-full bg-surface-container-low py-14 md:py-24 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <SectionHeader
          badge={kontakSection.badge}
          judul={kontakSection.judul}
          deskripsi={kontakSection.deskripsi}
        />

        {/* items-stretch: kolom kiri & kanan sama tinggi di desktop */}
        <Stagger className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          {/* Kolom kiri: WhatsApp (aksi utama) + info kontak */}
          <StaggerItem className="lg:col-span-5 flex flex-col gap-5">
            {/* Kartu WhatsApp: titik fokus utama. Kontras (WCAG AA): putih di wa-latar 12.2:1,
                teks pil 7.7:1, gelembung kiri 8.5:1, gelembung kanan 6.2:1,
                teks tombol 12.2:1. */}
            <div className="bg-wa-latar text-on-wa rounded-kartu shadow-wa p-6 flex flex-col gap-5">
              {/* Pil jam layanan selalu di bawah judul (semua lebar layar) */}
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-pil bg-wa-hijau text-on-wa flex items-center justify-center shrink-0">
                    <IkonWhatsApp size={26} />
                  </div>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-wa">{kartuWhatsapp.judul}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-pil bg-on-wa/10 px-3 py-1.5 font-label-md text-[12px] leading-4 text-on-wa/90">
                  <span aria-hidden className="relative flex w-2 h-2 shrink-0">
                    <span className="absolute inset-0 rounded-pil bg-wa-hijau opacity-75 motion-safe:animate-denyut" />
                    <span className="relative w-2 h-2 rounded-pil bg-wa-hijau" />
                  </span>
                  {kontak.jamLayanan}
                </span>
              </div>

              {/* Ilustrasi percakapan (hiasan) */}
              <div aria-hidden className="flex flex-col gap-2 font-body-isi text-[14px] leading-5">
                <p className="self-start max-w-[85%] rounded-2xl rounded-bl-md bg-on-wa/12 px-3.5 py-2.5 text-on-wa">
                  {kartuWhatsapp.gelembung.pengunjung}
                </p>
                <p className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-wa-hijau px-3.5 py-2.5 font-semibold text-wa-gelap">
                  {kartuWhatsapp.gelembung.balasan}
                </p>
              </div>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 h-13 px-6 bg-wa-tombol text-wa-gelap font-label-md text-[16px] font-bold rounded-tombol hover:bg-wa-tombol-hover transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:hover:-translate-y-0.5"
              >
                <span>{kartuWhatsapp.tombol}</span>
                <ArrowRight
                  size={18}
                  className="transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* flex-1: kartu ini mengisi sisa tinggi kolom kiri */}
            <div className={`${kelasKartu} flex-1 p-6 flex flex-col gap-5`}>
              <div className="flex items-start gap-4">
                <div className={kelasIkonInfo}>
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <span className="font-label-md text-label-md text-on-surface-variant">{kontakSection.labelEmail}</span>
                  <a
                    href={`mailto:${kontak.email}`}
                    className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors duration-150 ease-out font-medium block break-words"
                  >
                    {kontak.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-outline-variant/50 pt-5">
                <div className={kelasIkonInfo}>
                  <Building2 size={20} />
                </div>
                <div>
                  <span className="font-label-md text-label-md text-on-surface-variant">{kontakSection.labelKantor}</span>
                  <p className="font-body-isi text-body-isi text-on-surface font-semibold mb-0.5">{site.namaPerusahaan}</p>
                  <p className="font-body-isi text-body-isi text-on-surface-variant">{kontak.alamat}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-outline-variant/50 pt-5">
                <div className={kelasIkonInfo}>
                  <Video size={20} />
                </div>
                <div>
                  <span className="font-label-md text-label-md text-on-surface-variant">{kontakSection.labelPertemuan}</span>
                  <p className="font-body-isi text-body-isi text-on-surface">{kontak.opsiPertemuan}</p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Kolom kanan: formulir → WhatsApp. Textarea melebar mengisi sisa tinggi. */}
          <StaggerItem className="lg:col-span-7 flex">
            <div className={`${kelasKartu} flex-1 p-5 sm:p-8 flex flex-col`}>
              <h3 className="font-headline-sm text-headline-sm lg:text-[22px] lg:leading-[30px] text-on-surface mb-2">
                {formulir.judul}
              </h3>
              <p className="font-body-isi text-body-isi text-on-surface-variant mb-6">{formulir.deskripsi}</p>

              <form className="flex-1 flex flex-col gap-4" onSubmit={kirimKeWhatsapp}>
                <div>
                  <label className={kelasLabel} htmlFor="nama">
                    {formulir.labelNama}
                  </label>
                  <input
                    id="nama"
                    name="nama"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={formulir.placeholderNama}
                    className={`${kelasInput} h-12 px-3.5`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={kelasLabel} htmlFor="jenisUsaha">
                      {formulir.labelJenisUsaha}
                    </label>
                    <select
                      id="jenisUsaha"
                      name="jenisUsaha"
                      required
                      defaultValue=""
                      className={`${kelasInput} h-12 px-3.5`}
                    >
                      <option value="" disabled>
                        {formulir.placeholderJenisUsaha}
                      </option>
                      {formulir.jenisUsaha.map((opsi) => (
                        <option key={opsi} value={opsi}>
                          {opsi}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={kelasLabel} htmlFor="layanan">
                      {formulir.labelLayanan}
                    </label>
                    <select id="layanan" name="layanan" required defaultValue="" className={`${kelasInput} h-12 px-3.5`}>
                      <option value="" disabled>
                        {formulir.placeholderLayanan}
                      </option>
                      {formulir.layanan.map((opsi) => (
                        <option key={opsi} value={opsi}>
                          {opsi}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <label className={kelasLabel} htmlFor="cerita">
                    {formulir.labelCerita}
                  </label>
                  <textarea
                    id="cerita"
                    name="cerita"
                    required
                    rows={4}
                    placeholder={formulir.placeholderCerita}
                    className={`${kelasInput} flex-1 min-h-32 p-3.5 resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-primary-container text-on-primary font-label-md text-[14px] rounded-tombol hover:bg-tombol-hover transition-[color,background-color,border-color,translate] duration-150 ease-out motion-safe:hover:-translate-y-0.5 flex items-center justify-center gap-2 font-bold"
                >
                  <span>{formulir.tombol}</span>
                  <Send size={18} />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-on-surface-variant font-caption text-caption mt-1 text-center">
                  <Shield size={14} className="shrink-0" />
                  <span>{formulir.catatanPrivasi}</span>
                </div>
              </form>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
