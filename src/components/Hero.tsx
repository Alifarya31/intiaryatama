import {
  ArrowRight,
  CircleCheck,
  Code2,
  Globe2,
  LayoutDashboard,
  Smartphone,
  Workflow,
} from "lucide-react";

import { site } from "@/data/site";
import { Stagger, StaggerGroup, StaggerItem } from "./motion";

const solusi = [
  {
    icon: Globe2,
    title: "Website Development",
    description: "Website profesional untuk bisnis",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Aplikasi untuk kebutuhan bisnis",
  },
  {
    icon: LayoutDashboard,
    title: "Business Systems",
    description: "Sistem digital terintegrasi",
  },
];

export default function Hero() {
  const { hero } = site;

  return (
    <section className="relative w-full bg-surface py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-fixed/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <Stagger
          pemicu="load"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center"
        >
          {/* LEFT CONTENT */}
          <StaggerGroup className="lg:col-span-7 flex flex-col items-start">
            <StaggerItem className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-label-md text-label-md tracking-tight font-semibold">
                {hero.badge}
              </span>
            </StaggerItem>

            <StaggerItem
              as="h1"
              className="font-display-hero text-display-hero-mobile sm:text-display-hero xl:text-display-hero-lg text-on-surface tracking-tight mb-6"
            >
              {hero.judul}{" "}
              <span className="relative inline-block px-2 py-0.5 mt-1 bg-secondary-fixed text-on-secondary-fixed rounded-xl">
                {hero.judulSorotan}
              </span>
            </StaggerItem>

            <StaggerItem
              as="p"
              className="font-body-lg text-body-lg md:text-[18px] md:leading-[30px] text-on-surface-variant max-w-2xl mb-8"
            >
              {hero.deskripsi}
            </StaggerItem>

            {/* CTA */}
            <StaggerItem className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 h-13 bg-primary-container text-on-primary font-label-md text-[14px] rounded-tombol hover:bg-tombol-hover transition-all duration-200 hover:-translate-y-0.5 shadow-kartu group"
              >
                <span>{hero.tombolUtama}</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center px-6 h-13 bg-kartu text-on-surface border border-outline-variant font-label-md text-[14px] rounded-tombol hover:bg-surface-container-low transition-colors duration-200"
              >
                Lihat Layanan
              </a>
            </StaggerItem>

            {/* TRUST POINTS */}
            <StaggerItem className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t border-surface-container">
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

          {/* RIGHT: DIGITAL PRODUCT SHOWCASE */}
          <StaggerItem className="lg:col-span-5 relative flex items-center justify-center lg:pl-2 sm:mb-8 lg:mb-0">
            <div className="relative w-full max-w-[520px]">
              {/* Main browser mockup */}
              <div className="relative z-10 bg-kartu border border-outline-variant rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser bar */}
                <div className="h-11 bg-surface-container-low border-b border-outline-variant px-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                    <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                    <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                  </div>

                  <div className="px-3 py-1 rounded-md bg-surface border border-outline-variant text-[10px] text-on-surface-variant flex items-center gap-1.5">
                    <Globe2 size={11} />
                    intiaryatama.id
                  </div>

                  <div className="w-8" />
                </div>

                {/* Website preview */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
                        <span className="text-on-primary text-xs font-bold">
                          IA
                        </span>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-on-surface">
                          Business Website
                        </p>
                        <p className="text-[9px] text-on-surface-variant">
                          Professional digital presence
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <span className="w-8 h-1.5 rounded-full bg-outline-variant" />
                      <span className="w-8 h-1.5 rounded-full bg-outline-variant" />
                      <span className="w-8 h-1.5 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Website hero preview */}
                  <div className="relative rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant p-5 sm:p-7">
                    <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-primary-container/10 blur-2xl" />

                    <div className="relative max-w-[260px]">
                      <span className="text-[9px] font-semibold tracking-widest text-primary uppercase">
                        Digital Experience
                      </span>

                      <h3 className="text-xl sm:text-2xl font-bold text-on-surface leading-tight mt-3 mb-3">
                        Build Your
                        <span className="block text-primary">
                          Digital Future.
                        </span>
                      </h3>

                      <p className="text-[10px] sm:text-xs text-on-surface-variant leading-relaxed max-w-[230px]">
                        Creating modern digital solutions to help businesses
                        grow and move forward.
                      </p>

                      <div className="flex items-center gap-2 mt-5">
                        <div className="px-3 py-2 rounded-md bg-primary-container text-on-primary text-[9px] font-semibold">
                          Explore Solutions
                        </div>
                        <div className="w-7 h-7 rounded-md border border-outline-variant flex items-center justify-center">
                          <ArrowRight size={12} className="text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Abstract visual */}
                    <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 w-24 h-28 sm:w-32 sm:h-36">
                      <div className="absolute right-0 top-0 w-20 h-24 sm:w-28 sm:h-28 rounded-xl bg-primary-container/20 rotate-12" />
                      <div className="absolute right-3 top-3 w-20 h-24 sm:w-28 sm:h-28 rounded-xl bg-primary/20 -rotate-6 border border-primary/20" />
                      <div className="absolute right-5 top-6 w-20 h-24 sm:w-28 sm:h-28 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                        <Code2 size={34} className="text-on-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Solution cards */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-bold text-on-surface">
                        Our Digital Solutions
                      </p>
                      <span className="text-[9px] text-primary font-semibold">
                        Explore All →
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {solusi.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="min-w-0 rounded-xl border border-outline-variant bg-surface-container-low p-2.5 sm:p-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center mb-3">
                              <Icon size={16} className="text-primary" />
                            </div>

                            <p className="text-[10px] font-bold text-on-surface leading-tight mb-1">
                              {item.title}
                            </p>

                            <p className="hidden sm:block text-[9px] text-on-surface-variant leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-outline-variant flex items-center justify-between">
                    <span className="text-[9px] text-on-surface-variant">
                      Designed for your business
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-[9px] font-semibold text-primary">
                        Digital Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mobile app mockup */}
              <div className="animasi-mengambang absolute -bottom-8 -left-5 sm:-left-9 z-20 w-[115px] sm:w-[135px] bg-kartu border border-outline-variant rounded-2xl shadow-xl p-2.5">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-1 rounded-full bg-outline-variant" />
                </div>

                <div className="rounded-xl bg-surface-container-low border border-outline-variant p-2.5">
                  <div className="w-7 h-7 rounded-lg bg-primary-container flex items-center justify-center mb-3">
                    <Smartphone size={14} className="text-on-primary" />
                  </div>

                  <div className="w-12 h-1.5 rounded-full bg-on-surface/70 mb-2" />
                  <div className="w-full h-1 rounded-full bg-outline-variant mb-1" />
                  <div className="w-3/4 h-1 rounded-full bg-outline-variant mb-3" />

                  <div className="h-10 rounded-lg bg-primary/10 border border-primary/10 flex items-center justify-center">
                    <Workflow size={17} className="text-primary" />
                  </div>

                  <div className="w-full h-1 rounded-full bg-outline-variant mt-3" />
                  <div className="w-2/3 h-1 rounded-full bg-outline-variant mt-1" />
                </div>

                <p className="text-[9px] font-bold text-on-surface text-center mt-2">
                  Mobile App
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-2 sm:-right-5 z-20 px-3 py-2.5 bg-kartu border border-outline-variant rounded-xl shadow-lg hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center">
                  <LayoutDashboard size={16} className="text-primary" />
                </div>

                <div>
                  <p className="text-[9px] text-on-surface-variant">
                    Integrated
                  </p>
                  <p className="text-[11px] font-bold text-on-surface">
                    Business Systems
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
