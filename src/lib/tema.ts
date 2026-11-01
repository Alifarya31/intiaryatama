/**
 * Tema tampilan: "sistem" (ikuti prefers-color-scheme), "terang", atau "gelap".
 * Pilihan disimpan di localStorage. Skrip inline di bawah dijalankan di <head>
 * sebelum render pertama, sehingga tidak ada kedipan warna.
 *
 * Atribut yang dipasang di <html>:
 * - data-theme="light" | "dark"           → dipakai CSS untuk token warna
 * - data-tema-pilihan="sistem" | "terang" | "gelap" → dipakai tombol tema
 */

export const KUNCI_TEMA = "tema";
export const URUTAN_TEMA = ["sistem", "terang", "gelap"] as const;
export type PilihanTema = (typeof URUTAN_TEMA)[number];

export const skripTema = `(function(){try{
var k=${JSON.stringify(KUNCI_TEMA)},d=document.documentElement,mq=window.matchMedia("(prefers-color-scheme: dark)");
function pilihan(){var p=null;try{p=localStorage.getItem(k)}catch(e){}return p==="terang"||p==="gelap"?p:"sistem"}
function terapkan(){var p=pilihan(),gelap=p==="gelap"||(p==="sistem"&&mq.matches);d.setAttribute("data-theme",gelap?"dark":"light");d.setAttribute("data-tema-pilihan",p)}
terapkan();mq.addEventListener("change",terapkan);window.__terapkanTema=terapkan;
}catch(e){}})();`;

declare global {
  interface Window {
    __terapkanTema?: () => void;
  }
}

/** Simpan pilihan lalu terapkan ulang (dipanggil tombol tema). */
export function simpanTema(pilihan: PilihanTema) {
  try {
    if (pilihan === "sistem") localStorage.removeItem(KUNCI_TEMA);
    else localStorage.setItem(KUNCI_TEMA, pilihan);
  } catch {
    // localStorage bisa diblokir (mode privat); tema tetap berlaku untuk sesi ini.
  }
  if (window.__terapkanTema) {
    window.__terapkanTema();
  } else {
    const gelap =
      pilihan === "gelap" ||
      (pilihan === "sistem" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", gelap ? "dark" : "light");
    document.documentElement.setAttribute("data-tema-pilihan", pilihan);
  }
}
