import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import { site } from "@/data/site";
import { skripTema } from "@/lib/tema";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.namaPerusahaan,
  keywords: site.seo.keywords,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.namaPerusahaan,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: skrip tema mengubah atribut <html> sebelum hidrasi
    <html
      lang="id"
      className={`${plusJakartaSans.variable} scroll-smooth motion-reduce:scroll-auto`}
      suppressHydrationWarning
    >
      <head>
        {/* Terapkan tema sebelum render pertama agar tidak ada kedipan warna */}
        <script dangerouslySetInnerHTML={{ __html: skripTema }} />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
