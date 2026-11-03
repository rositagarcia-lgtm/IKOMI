import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Asesoría para identificar el repuesto, venta en tienda y envíos a Lima y provincias. IKOMI Perú acompaña el pedido hasta la entrega.",
};

const servicios = [
  {
    titulo: "Identificación de la pieza",
    texto: "Con modelo, motor, placa o foto se busca el repuesto que corresponde. Así no se compra una pieza que no entra.",
  },
  {
    titulo: "Venta de varias líneas",
    texto: "Filtros, frenos, embrague, distribución, refrigeración y suspensión en el mismo pedido.",
  },
  {
    titulo: "Envío a Lima",
    texto: "Recojo en la tienda de Ate o despacho por motorizado dentro de la ciudad.",
  },
  {
    titulo: "Envío a provincias",
    texto: "Se coordina la agencia que el cliente prefiere y se le avisa cuando el bulto sale.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Hero
        eyebrow="Servicios"
        title="Del mostrador al destino"
        text="El servicio no termina en la venta. IKOMI ayuda a elegir la pieza y a hacerla llegar a la unidad."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2">
        {servicios.map((servicio) => (
          <article key={servicio.titulo} className="rounded-2xl border border-line bg-card p-6">
            <h2 className="font-display text-3xl font-bold uppercase text-navy">{servicio.titulo}</h2>
            <p className="mt-3 text-muted">{servicio.texto}</p>
          </article>
        ))}
      </section>
    </>
  );
}
