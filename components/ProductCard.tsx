import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/productos";

type ProductCardProps = {
  producto: Producto;
};

export function ProductCard({ producto }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/productos/${producto.slug}`} className="flex h-full flex-col">
        <Image
          src={producto.imagen}
          alt={producto.alt}
          width={640}
          height={480}
          className="h-44 w-full object-cover"
        />
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            {producto.categoria} · {producto.marca}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-none text-navy">
            {producto.nombre}
          </h3>
          <p className="mt-3 flex-1 text-sm text-muted">{producto.resumen}</p>
          <p className="mt-4 font-semibold text-navy">
            {producto.precio}{" "}
            <span className="font-normal text-muted">· ver detalle</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
