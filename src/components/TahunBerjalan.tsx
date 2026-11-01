"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Menampilkan tahun berjalan dari jam pengunjung, sehingga tidak "membeku"
 * di tahun saat build. Saat render di server belum ada angka tahun.
 */
export default function TahunBerjalan() {
  const tahun = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span suppressHydrationWarning>{tahun}</span>;
}
