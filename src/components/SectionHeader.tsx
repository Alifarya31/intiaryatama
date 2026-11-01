import { Reveal } from "./motion";

type Props = {
  badge: string;
  judul: string;
  deskripsi: string;
  /** "gelap" untuk section berlatar biru tua. */
  tone?: "terang" | "gelap";
};

export default function SectionHeader({ badge, judul, deskripsi, tone = "terang" }: Props) {
  const gelap = tone === "gelap";

  return (
    <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-14">
      <span
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pil font-label-md text-label-md mb-4 ${
          gelap ? "bg-on-biru-tua/10 text-on-biru-tua" : "bg-surface-container-high text-primary"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-pil bg-secondary-container shrink-0" />
        {badge}
      </span>
      <h2
        className={`font-headline-lg text-headline-lg-mobile md:text-headline-lg lg:text-headline-xl tracking-tight mb-4 ${
          gelap ? "text-on-biru-tua" : "text-on-surface"
        }`}
      >
        {judul}
      </h2>
      <p
        className={`font-body-lg text-body-lg md:text-[17px] md:leading-7 max-w-2xl ${
          gelap ? "text-on-biru-tua-variant" : "text-on-surface-variant"
        }`}
      >
        {deskripsi}
      </p>
    </Reveal>
  );
}
