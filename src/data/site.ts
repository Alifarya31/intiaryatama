/**
 * Semua teks yang bisa berubah ada di file ini.
 * Edit nilai di sini tanpa perlu menyentuh komponen di src/components.
 */

export type Layanan = {
  ikon: "website" | "mobile" | "sistem";
  judul: string;
  deskripsi: string;
  fitur: string[];
  tautan: { label: string; href: string };
};

export type Paket = {
  /** Label jenis layanan di pojok kartu, contoh "Website". */
  jenis: string;
  /** Ditampilkan sebagai "Cocok untuk: ..." di bawah nama paket. */
  cocokUntuk: string;
  nama: string;
  /** Tulis angka saja, contoh "Rp 2.500.000". Kata "mulai" ditambahkan otomatis. */
  harga: string;
  keterangan: string;
  fitur: string[];
  tombol: string;
  /** Paket yang ditonjolkan (border biru & tombol utama). */
  unggulan?: boolean;
};

export type Langkah = {
  nomor: string;
  tag: string;
  judul: string;
  deskripsi: string;
  /** Tag berwarna kuning (dipakai di langkah terakhir). */
  tagMenonjol?: boolean;
};

export const site = {
  namaPerusahaan: "PT Inti Aryatama Mandiri",
  tagline: "Software Agency & Solusi IT UMKM",

  seo: {
    title:
      "PT Inti Aryatama Mandiri - Software Agency & Mitra Digitalisasi UMKM",
    description:
      "Jasa pembuatan website, aplikasi mobile, dan software custom untuk UMKM dan perusahaan di Indonesia. Harga transparan, bergaransi, dan didampingi hingga siap pakai.",
    keywords: [
      "jasa pembuatan website",
      "aplikasi mobile",
      "software custom",
      "sistem kasir",
      "digitalisasi UMKM",
      "software agency Indonesia",
    ],
  },

  kontak: {
    // Nomor WhatsApp untuk tautan wa.me: format internasional tanpa "+" atau spasi.
    whatsappNomor: "628131005647",
    // Nomor WhatsApp yang ditampilkan di halaman.
    whatsappTampil: "+62 813-1005-647",
    email: "info@intiaryatama.co.id", // TODO: GANTI DENGAN DATA ASLI SEBELUM TAYANG
    alamat: "Mahkota Indah Blok Gc 1 No 04", // TODO: GANTI DENGAN DATA ASLI SEBELUM TAYANG
    kota: "Bekasi, Jawa Barat", // TODO: GANTI DENGAN DATA ASLI SEBELUM TAYANG
    nib: "0000000000000", // TODO: GANTI DENGAN DATA ASLI SEBELUM TAYANG
    // Jam layanan, ditampilkan apa adanya di kartu WhatsApp (tanpa awalan).
    jamLayanan: "Pesan dibalas di hari yang sama, Senin – Sabtu",
    opsiPertemuan:
      "Tersedia pertemuan tatap muka di kantor Anda (area Jabodetabek) atau konsultasi virtual via Google Meet / Zoom.",
  },

  navigasi: [
    { label: "Layanan", href: "#layanan" },
    { label: "Harga", href: "#harga" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Kontak", href: "#kontak" },
  ],
  tombolNavbar: "Konsultasi Gratis",

  /** Label tombol tema di navbar (sistem → terang → gelap). */
  tema: {
    labelTombol: "Tema",
    gantiKe: "Klik untuk ganti ke",
    nama: { sistem: "Ikuti sistem", terang: "Terang", gelap: "Gelap" },
  },

  hero: {
    badge: "Mitra Digital UMKM & Perusahaan Indonesia",
    judul: "Website, aplikasi, dan sistem yang mengikuti",
    judulSorotan: "cara kerja usaha Anda",
    deskripsi:
      "Kami membantu pemilik usaha di Indonesia beralih ke sistem digital tanpa ribet, tanpa istilah teknis yang membingungkan, dan bergaransi penuh hingga siap pakai.",
    tombolUtama: "Konsultasi Gratis Sekarang",
    tombolKedua: "Lihat Estimasi Biaya",
    keunggulan: [
      "Transparan Tanpa Biaya Tersembunyi",
      "Pendampingan via WhatsApp",
    ],
  },

  layanan: {
    badge: "Solusi Terintegrasi",
    judul: "Layanan Teknologi yang Memajukan Bisnis Anda",
    deskripsi:
      "Solusi digital tepat guna dirancang khusus agar mudah digunakan oleh tim Anda sehari-hari tanpa kerumitan teknis.",
    daftar: [
      {
        ikon: "website",
        judul: "Pembuatan Website",
        deskripsi:
          "Website profesional yang cepat, ramah Google (SEO), dan meyakinkan calon pelanggan untuk membeli atau menghubungi Anda.",
        fitur: [
          "Website profil perusahaan berwibawa & meyakinkan",
          "Kecepatan akses tinggi & 100% mobile-friendly",
          "Integrasi langsung tombol WhatsApp & Google Maps",
          "Termasuk domain resmi .id/.com & email bisnis usaha",
        ],
        tautan: { label: "Pilihan paket website", href: "#harga" },
      },
      {
        ikon: "mobile",
        judul: "Aplikasi Mobile (Android & iOS)",
        deskripsi:
          "Aplikasi ponsel praktis untuk mempermudah pelanggan berbelanja, memesan jasa, dan memantau pesanan secara real-time.",
        fitur: [
          "Aplikasi katalog produk & pemesanan mandiri praktis",
          "Notifikasi promo & update status pengiriman instan",
          "Dukungan pembayaran QRIS, Virtual Account, & E-Wallet",
          "Panel admin sederhana untuk update produk tanpa koding",
        ],
        tautan: { label: "Konsultasi aplikasi", href: "#kontak" },
      },
      {
        ikon: "sistem",
        judul: "Software Custom & Sistem Internal",
        deskripsi:
          "Sistem operasional otomatis untuk mencatat stok barang, kas masuk-keluar, dan laporan kinerja tanpa tercecer di kertas.",
        fitur: [
          "Sistem pencatatan kasir (POS) & inventori stok gudang",
          "Multi-cabang & pemantauan operasional dari mana saja",
          "Laporan keuangan otomatis siap cetak dan rapi",
          "Akses hak pengguna aman berjenjang dari kasir ke owner",
        ],
        tautan: { label: "Konsultasi sistem khusus", href: "#kontak" },
      },
    ] satisfies Layanan[],
  },

  harga: {
    badge: "Investasi Transparan",
    judul: "Paket Harga Jelas, Tanpa Biaya Tersembunyi",
    deskripsi:
      "Harga awal untuk paket website dan sistem. Harga akhir mengikuti fitur yang Anda pilih dan selalu disepakati tertulis sebelum pengerjaan.",
    labelCocokUntuk: "Cocok untuk:",
    paket: [
      {
        jenis: "Website",
        cocokUntuk: "Pemula / Usaha Baru",
        nama: "Mulai Usaha",
        harga: "Rp 1.500.000",
        keterangan: "Biaya pengerjaan awal",
        fitur: [
          "1 Halaman Landing Page Cepat",
          "Desain Responsif Mobile Penuh",
          "Tombol Chat WhatsApp Otomatis",
          "Termasuk Domain & Hosting 1 Tahun",
          "Garansi Perbaikan Teknis 30 Hari",
        ],
        tombol: "Pilih Paket",
      },
      {
        jenis: "Website",
        cocokUntuk: "Perusahaan & Manufaktur",
        nama: "Profil Usaha",
        harga: "Rp 3.500.000",
        keterangan: "Situs korporat lengkap",
        fitur: [
          "Hingga 5 Halaman Konten Lengkap",
          "Email Resmi (@namausaha.co.id)",
          "SEO Dasar & Integrasi Google Bisnis",
          "Formulir Penawaran Harga Online",
          "Garansi Pendampingan 60 Hari",
        ],
        tombol: "Pilih Paket",
      },
      {
        jenis: "Website",
        cocokUntuk: "Retail, F&B, dan Grosir",
        nama: "Toko Online",
        harga: "Rp 7.500.000",
        keterangan: "Solusi transaksi mandiri",
        fitur: [
          "Katalog Produk Tanpa Batas",
          "Hitung Ongkir Otomatis (JNE, J&T, SiCepat)",
          "Pembayaran QRIS & Transfer Bank Otomatis",
          "Notifikasi Pesanan via WhatsApp Admin",
          "Panduan Video & Training Khusus Tim",
          "Garansi Maintenance Penuh 3 Bulan",
        ],
        tombol: "Konsultasikan Paket Ini",
        unggulan: true,
      },
      {
        jenis: "Software Custom",
        cocokUntuk: "Berkembang & Multi-Cabang",
        nama: "Sistem Usaha (Custom)",
        harga: "Rp 12.000.000",
        keterangan: "Sesuai SOP bisnis Anda",
        fitur: [
          "Sistem Kasir & Inventori Gudang Terpadu",
          "Laporan Neraca Laba Rugi Otomatis",
          "Manajemen Hak Akses Bertingkat",
          "Database Khusus & Backup Otomatis Harian",
          "Prioritas Dukungan & Garansi 6 Bulan",
        ],
        tombol: "Diskusi Kebutuhan",
      },
    ] satisfies Paket[],
    /** Baris lebar di bawah kartu harga: aplikasi mobile tidak punya paket tetap. */
    aplikasiMobile: {
      judul: "Aplikasi Mobile (Android & iOS)",
      teks: "Harga aplikasi mobile menyesuaikan fitur yang dibutuhkan, jadi kami hitung setelah mendengar kebutuhan Anda. Konsultasinya gratis.",
      tombol: { label: "Konsultasi aplikasi", href: "#kontak" },
    },
  },

  caraKerja: {
    badge: "Tahapan Mudah",
    judul: "5 Langkah Praktis Menuju Transformasi Digital",
    deskripsi:
      "Kami memandu Anda dari awal hingga sistem siap pakai tanpa istilah teknologi yang rumit.",
    langkah: [
      {
        nomor: "01",
        tag: "Awal",
        judul: "Konsultasi",
        deskripsi:
          "Diskusi santai mengenai alur kerja bisnis Anda saat ini dan kendala yang ingin diselesaikan, tanpa biaya komitmen.",
      },
      {
        nomor: "02",
        tag: "Desain",
        judul: "Rancangan",
        deskripsi:
          "Kami buatkan contoh tampilan visual dan alur aplikasi dalam bahasa sederhana untuk disetujui bersama sebelum koding.",
      },
      {
        nomor: "03",
        tag: "Produksi",
        judul: "Pengembangan",
        deskripsi:
          "Tim programmer profesional kami membangun sistem secara teliti dengan standar keamanan data teruji.",
      },
      {
        nomor: "04",
        tag: "Kualitas",
        judul: "Uji Coba",
        deskripsi:
          "Sistem dites bersama pemilik usaha dan staf untuk memastikan semua fungsi berjalan sesuai kebutuhan nyata.",
      },
      {
        nomor: "05",
        tag: "Go Live",
        judul: "Serah Terima",
        deskripsi:
          "Pelatihan penggunaan sampai staf mahir, serahan akses penuh, dan garansi perbaikan berkelanjutan.",
        tagMenonjol: true,
      },
    ] satisfies Langkah[],
  },

  kontakSection: {
    badge: "Hubungi Kami",
    judul: "Konsultasikan Rencana Digital Usaha Anda Hari Ini",
    deskripsi:
      "Ceritakan kebutuhan usaha Anda. Konsultasinya gratis dan tanpa kewajiban.",
    kartuWhatsapp: {
      judul: "Chat langsung di WhatsApp",
      /** Ilustrasi percakapan (hiasan, tidak dibacakan pembaca layar). */
      gelembung: {
        pengunjung: "Halo, saya mau tanya soal pembuatan website.",
        balasan: "Halo! Boleh ceritakan usahanya?",
      },
      tombol: "Chat WhatsApp sekarang",
    },
    labelEmail: "Email",
    labelKantor: "Kantor Operasional",
    labelPertemuan: "Opsi Pertemuan",
    formulir: {
      judul: "Kirim pesan lewat WhatsApp",
      deskripsi:
        "Isi data usaha Anda di bawah ini. Formulir akan membuka WhatsApp dengan pesan yang sudah terisi, tinggal tekan kirim.",
      labelNama: "Nama Lengkap *",
      placeholderNama: "Contoh: Hendra Gunawan",
      labelJenisUsaha: "Jenis Usaha / Industri *",
      placeholderJenisUsaha: "Pilih kategori...",
      jenisUsaha: [
        "Retail / Toko Fisik",
        "Kuliner / Kafe / F&B",
        "Jasa & Konsultan",
        "Manufaktur / Pabrik",
        "Lainnya",
      ],
      labelLayanan: "Layanan yang Dibutuhkan *",
      placeholderLayanan: "Pilih layanan...",
      labelCerita: "Ceritakan Singkat Kebutuhan Anda *",
      placeholderCerita:
        "Contoh: Kami butuh sistem kasir dan inventori yang bisa memantau 3 cabang toko kami secara bersamaan dari HP...",
      /** Susunan pesan WhatsApp yang dibentuk dari isian formulir. */
      pesan: {
        pembuka: "saya ingin berkonsultasi.",
        nama: "Nama",
        jenisUsaha: "Jenis Usaha",
        layanan: "Layanan",
        cerita: "Cerita kebutuhan",
      },
      layanan: [
        "Pembuatan Website",
        "Aplikasi Mobile Android / iOS",
        "Software Custom / Sistem ERP",
        "Masih Bingung / Ingin Konsultasi",
      ],
      tombol: "Kirim Permintaan Konsultasi",
      catatanPrivasi: "Data Anda hanya dipakai untuk menghubungi Anda kembali.",
    },
  },

  footer: {
    deskripsi:
      "Mitra transformasi teknologi terpercaya bagi pelaku usaha dan UMKM di seluruh Indonesia. Rekayasa sistem informasi terpadu, aplikasi pergudangan, kasir POS, dan platform operasional handal.",
    // Tautan navigasi footer memakai `navigasi` di atas (sama dengan menu atas).
    judulNavigasi: "Navigasi Cepat",
    judulLegal: "Legal & Kredibilitas",
    labelNib: "NIB:",
    hakCipta: "Hak Cipta Dilindungi Undang-Undang.",
    tautanLegal: [
      // TODO: ganti "#" dengan halaman Syarat Layanan & Kebijakan Privasi bila sudah ada.
      { label: "Syarat Layanan", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
    ],
  },
};

/** Membuat tautan https://wa.me/<nomor>, opsional dengan pesan yang sudah terisi. */
export function waLink(pesan?: string) {
  const nomor = site.kontak.whatsappNomor.replace(/\D/g, "");
  const url = `https://wa.me/${nomor}`;
  return pesan ? `${url}?text=${encodeURIComponent(pesan)}` : url;
}
