import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducto, productos } from "@/data/productos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productos.map((producto) => ({ slug: producto.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProducto(slug);

  if (!producto) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: producto.nombre,
    description: producto.resumen,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = getProducto(slug);

  if (!producto) {
    notFound();
  }

  return (
    <article className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
      <Image
        src={producto.imagen}
        alt={producto.alt}
        width={640}
        height={480}
        className="w-full rounded-2xl border border-line"
        priority
      />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          {producto.categoria} · {producto.marca}
        </p>
        <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-none text-navy">
          {producto.nombre}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-navy">{producto.precio}</p>
        <p className="mt-4 text-muted">{producto.descripcion}</p>
        <p className="mt-4 text-sm text-navy">
          <span className="font-semibold">Compatible con: </span>
          {producto.compatible}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
          >
            Cotizar esta pieza
          </Link>
          <Link href="/productos" className="rounded-full border border-line px-5 py-3 text-sm font-semibold">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </article>
  );
}
