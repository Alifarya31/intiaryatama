import Image from "next/image";
import { site, waLink } from "@/data/site";
import TahunBerjalan from "./TahunBerjalan";

export default function Footer() {
  const { footer, kontak } = site;

  return (
    <footer className="w-full bg-biru-tua text-on-biru-tua-variant pt-14 pb-8 md:pt-16">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter">
        <div className="sm:col-span-2 flex flex-col gap-3">
          <div className="flex items-center gap-space-sm">
            <Image
              src="/logo.svg"
              alt={`${site.namaPerusahaan} Logo`}
              width={28}
              height={28}
              className="h-7 w-auto object-contain rounded-md ring-1 ring-on-biru-tua/25"
            />
            <span className="font-title-lg text-title-lg text-on-biru-tua tracking-tight uppercase">
              {site.namaPerusahaan}
            </span>
          </div>
          <p className="font-body-isi text-body-isi text-on-biru-tua-variant max-w-md">{footer.deskripsi}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-label-md text-label-md text-on-biru-tua mb-1">{footer.judulNavigasi}</span>
          {site.navigasi.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body-isi text-body-isi text-on-biru-tua-variant hover:text-on-biru-tua transition-colors duration-150 ease-out"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-label-md text-label-md text-on-biru-tua mb-1">{footer.judulLegal}</span>
          <span className="font-body-isi text-body-isi text-on-biru-tua-variant">
            {footer.labelNib} {kontak.nib}
          </span>
          <span className="font-body-isi text-body-isi text-on-biru-tua-variant">{kontak.kota}</span>
          <a
            href={`mailto:${kontak.email}`}
            className="font-body-isi text-body-isi text-on-biru-tua-variant hover:text-on-biru-tua transition-colors duration-150 ease-out break-words"
          >
            {kontak.email}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-isi text-body-isi text-on-biru-tua-variant hover:text-on-biru-tua transition-colors duration-150 ease-out"
          >
            {kontak.whatsappTampil}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin mt-10">
        <div className="pt-6 border-t border-on-biru-tua/15 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-biru-tua-redup font-caption text-[13px] leading-5 text-center sm:text-left">
          <span>
            © <TahunBerjalan /> {site.namaPerusahaan}. {footer.hakCipta}
          </span>
          <div className="flex gap-space-md">
            {footer.tautanLegal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-on-biru-tua transition-colors duration-150 ease-out"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
