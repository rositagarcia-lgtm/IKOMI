import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "IKOMI Perú vende repuestos para camiones y buses desde Ate. Trabaja marcas de Corea y Japón y atiende a flotas de todo el país.",
};

export default function NosotrosPage() {
  return (
    <>
      <Hero
        eyebrow="Nosotros"
        title="Conocemos la unidad que está parada"
        text="IKOMI Perú importa y vende repuestos para el transporte. La tienda está en Ate y el despacho sale a Lima y a provincias."
        background={{
          src: "https://ikomiperu.com/assets/img/por-que-ikomi.webp",
          alt: "Almacén de repuestos de IKOMI Perú",
        }}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-line bg-card">
          <Image
            src="https://ikomiperu.com/assets/img/vehiculos/hyundai-h-100.webp"
            alt="Camión Hyundai H-100, una de las unidades que atiende IKOMI"
            width={900}
            height={720}
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
          <h2 className="font-display text-3xl font-bold uppercase text-navy">Qué hacen</h2>
          <p className="mt-3 text-muted">
            Atienden a transportistas, talleres y dueños de flota que necesitan una pieza para
            Hyundai, Kia, Mitsubishi, Hino, Isuzu o Nissan. No es una tienda de un solo modelo: el
            mostrador junta varias líneas para armar un pedido completo.
          </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-line bg-card">
          <Image
            src="https://ikomiperu.com/assets/img/vehiculos/hino-500.webp"
            alt="Camión Hino 500 de carga"
            width={900}
            height={720}
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
          <h2 className="font-display text-3xl font-bold uppercase text-navy">Dónde están</h2>
          <p className="mt-3 text-muted">
            Avenida Nicolás Ayllón 3384, Ate, Lima. De lunes a viernes atienden de 8:30 a.m. a 6:00
            p.m. Los sábados, de 8:30 a.m. a 3:00 p.m. El teléfono de ventas es +51 985 068 416.
          </p>
          </div>
        </article>
      </section>
    </>
  );
}
