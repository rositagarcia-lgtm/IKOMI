import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "IKOMI Perú importa y vende repuestos para camiones y buses Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan.",
};

export default function Home() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
          Repuestos para camiones y buses
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-none md:text-7xl">
          Repuestos que mueven <span className="text-brand">al Perú</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          Importación y venta de repuestos para Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan.
          Tienda en Ate, Lima.
        </p>
      </div>
    </section>
  );
}
