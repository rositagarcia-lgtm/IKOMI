import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo de repuestos IKOMI Perú: filtros, embrague, frenos, refrigeración, distribución y suspensión.",
};

export default function ProductosPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        eyebrow="Productos"
        title="Elige la pieza y abre su ficha"
        text="Abre una tarjeta para ver compatibilidad y precio. Si la pieza no está, vuelve al listado o escribe por contacto."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((producto) => (
          <ProductCard key={producto.slug} producto={producto} />
        ))}
      </div>
    </section>
  );
}
