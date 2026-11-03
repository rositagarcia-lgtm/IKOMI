import type { Metadata } from "next";
import Link from "next/link";
import { BrandStrip } from "@/components/BrandStrip";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "IKOMI Perú importa y vende repuestos para camiones y buses. Encuentra filtros, frenos, embrague y más en un solo lugar.",
};

const razones = [
  {
    titulo: "Varias líneas en un solo mostrador",
    texto: "Motor, frenos, embrague, filtros y suspensión. No hay que recorrer varios proveedores para armar el pedido.",
  },
  {
    titulo: "Te ayudan a identificar la pieza",
    texto: "Con el modelo, el motor o una foto se confirma la pieza antes de venderla. Eso evita un repuesto que no calza.",
  },
  {
    titulo: "Llegan a provincias",
    texto: "En Lima se recoger en tienda o se envía por motorizado. A provincias se despacha con la agencia que el cliente elige.",
  },
];

const pasos = [
  {
    numero: "01",
    titulo: "Cuentas qué necesitas",
    texto: "Modelo, motor, placa o una foto de la pieza.",
  },
  {
    numero: "02",
    titulo: "Te muestran opciones",
    texto: "Confirman stock y precios de las marcas que trabajan.",
  },
  {
    numero: "03",
    titulo: "Eliges cómo recibirlo",
    texto: "Recojo en Ate o envío a Lima y provincias.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Repuestos para camiones y buses"
        title="Repuestos que mueven"
        highlight="al Perú"
        text="Importación y venta de repuestos para Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan. Lo que tu camión, bus o flota necesita, en un solo lugar."
        background={{
          src: "/fondo.jpg",
          alt: "Filtros, frenos, embrague y otras piezas de repuesto",
        }}
      >
        <Link
          href="/productos"
          className="rounded-full bg-brand px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-dark"
        >
          Ver catálogo
        </Link>
        <Link
          href="/contacto"
          className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-wide"
        >
          Cotizar
        </Link>
      </Hero>

      <BrandStrip />

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3">
        {[
          ["+3,000", "Clientes en el país"],
          ["+17", "Años de experiencia"],
          ["+2,000", "Productos de repuesto"],
        ].map(([cifra, etiqueta]) => (
          <article key={etiqueta} className="rounded-2xl bg-navy px-6 py-8 text-white">
            <p className="font-display text-5xl font-bold text-brand">{cifra}</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-white/70">{etiqueta}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle
          eyebrow="Catálogo"
          title="Piezas que salen seguido"
          text="Una muestra del mostrador: filtros, embrague, frenos y más. Cada pieza tiene su propia ficha."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
            <ProductCard key={producto.slug} producto={producto} />
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            light
            eyebrow="Por qué IKOMI"
            title="Una unidad parada cuesta dinero"
            text="El transportista escribe porque necesita la pieza hoy, no un catálogo genérico."
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {razones.map((razon) => (
              <li key={razon.titulo} className="rounded-2xl bg-navy-soft p-5">
                <h3 className="font-display text-2xl font-bold uppercase text-white">{razon.titulo}</h3>
                <p className="mt-2 text-sm text-white/75">{razon.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="Cómo comprar" title="Tres pasos y la unidad vuelve a ruta" />
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {pasos.map((paso) => (
            <li key={paso.numero} className="rounded-2xl border border-line bg-card p-5">
              <p className="font-display text-4xl font-bold text-brand">{paso.numero}</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-navy">{paso.titulo}</h3>
              <p className="mt-2 text-sm text-muted">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
