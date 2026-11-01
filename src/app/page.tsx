import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Harga from "@/components/Harga";
import CaraKerja from "@/components/CaraKerja";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-280px)]">
        <div className="flex flex-col w-full">
          <Hero />
          <Layanan />
          <Harga />
          <CaraKerja />
          <Kontak />
        </div>
      </main>
      <Footer />
    </>
  );
}
