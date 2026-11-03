import type { Metadata } from "next";
import Image from "next/image";
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
    imagen: "https://ikomiperu.com/assets/img/categorias/motor.webp",
    alt: "Piezas de motor para identificar el repuesto",
  },
  {
    titulo: "Venta de varias líneas",
    texto: "Filtros, frenos, embrague, distribución, refrigeración y suspensión en el mismo pedido.",
    imagen: "https://ikomiperu.com/assets/img/categorias/filtros.webp",
    alt: "Filtros de aceite, aire y combustible",
  },
  {
    titulo: "Envío a Lima",
    texto: "Recojo en la tienda de Ate o despacho por motorizado dentro de la ciudad.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/kia-k2700.webp",
    alt: "Unidad Kia K2700 de reparto en Lima",
  },
  {
    titulo: "Envío a provincias",
    texto: "Se coordina la agencia que el cliente prefiere y se le avisa cuando el bulto sale.",
    imagen: "https://ikomiperu.com/assets/img/vehiculos/isuzu-1300.webp",
    alt: "Camión Isuzu de carga para envíos a provincias",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Hero
        eyebrow="Servicios"
        title="Del mostrador al destino"
        text="El servicio no termina en la venta. IKOMI ayuda a elegir la pieza y a hacerla llegar a la unidad."
        background={{
          src: "https://ikomiperu.com/assets/img/hero-inicio.webp",
          alt: "Camión de reparto frente a la ciudad, referencia de IKOMI",
        }}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2">
        {servicios.map((servicio) => (
          <article key={servicio.titulo} className="overflow-hidden rounded-2xl border border-line bg-card">
            <Image
              src={servicio.imagen}
              alt={servicio.alt}
              width={900}
              height={720}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-display text-3xl font-bold uppercase text-navy">{servicio.titulo}</h2>
              <p className="mt-3 text-muted">{servicio.texto}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
