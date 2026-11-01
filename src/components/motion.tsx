"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig, domAnimation, m, type Variants } from "motion/react";

/**
 * Pembungkus global animasi.
 * - LazyMotion + `m` menjaga ukuran bundle tetap kecil.
 * - reducedMotion="user": jika prefers-reduced-motion aktif, semua animasi
 *   transform (gerak) dimatikan; yang tersisa hanya fade opacity.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

const DURASI = 0.5;
const JEDA_STAGGER = 0.08;
const EASE = [0.22, 1, 0.36, 1] as const;

const munculNaik: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DURASI, ease: EASE } },
};

const wadahStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: JEDA_STAGGER } },
};

const viewportSekali = { once: true, amount: 0.15 } as const;

const elemen = { div: m.div, h1: m.h1, p: m.p, ol: m.ol, li: m.li };
type Tag = keyof typeof elemen;

type Props = {
  children: ReactNode;
  className?: string;
  as?: Tag;
};

/** Fade-in + naik 16px saat pertama kali masuk layar (sekali saja). */
export function Reveal({ children, className, as = "div" }: Props) {
  const Komponen = elemen[as];
  return (
    <Komponen
      className={className}
      variants={munculNaik}
      initial="hidden"
      whileInView="show"
      viewport={viewportSekali}
    >
      {children}
    </Komponen>
  );
}

/**
 * Wadah yang memunculkan anak-anak <StaggerItem> berurutan.
 * `pemicu="view"`: saat masuk layar (sekali). `pemicu="load"`: saat halaman dibuka.
 */
export function Stagger({
  children,
  className,
  as = "div",
  pemicu = "view",
}: Props & { pemicu?: "view" | "load" }) {
  const Komponen = elemen[as];
  const pemicuProps =
    pemicu === "load"
      ? { animate: "show" }
      : { whileInView: "show", viewport: viewportSekali };
  return (
    <Komponen className={className} variants={wadahStagger} initial="hidden" {...pemicuProps}>
      {children}
    </Komponen>
  );
}

/** Grup bersarang di dalam <Stagger>: anak-anaknya juga muncul berurutan. */
export function StaggerGroup({ children, className, as = "div" }: Props) {
  const Komponen = elemen[as];
  return (
    <Komponen className={className} variants={wadahStagger}>
      {children}
    </Komponen>
  );
}

export function StaggerItem({ children, className, as = "div" }: Props) {
  const Komponen = elemen[as];
  return (
    <Komponen className={className} variants={munculNaik}>
      {children}
    </Komponen>
  );
}
