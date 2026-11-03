import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { marcas } from "@/data/marcas";

export const metadata: Metadata = {
  title: "Marcas",
  description:
    "IKOMI Perú trabaja repuestos Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan para camiones y buses.",
};

export default function MarcasPage() {
  return (
    <>
      <Hero
        eyebrow="Marcas"
        title="Corea y Japón en el mismo catálogo"
        text="Son las marcas que más se ven en el transporte peruano. Cada ficha resume para qué unidades se pide repuesto."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {marcas.map((marca) => (
          <article key={marca.nombre} className="overflow-hidden rounded-2xl border border-line bg-card">
            <div className="grid h-36 place-items-center bg-navy px-6">
              <Image
                src={marca.logo}
                alt={`Logo de ${marca.nombre}`}
                width={180}
                height={90}
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{marca.origen}</p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase text-navy">{marca.nombre}</h2>
              <p className="mt-3 text-muted">{marca.detalle}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
