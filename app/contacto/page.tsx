import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Contáctenos",
  description:
    "Escribe a IKOMI Perú para cotizar un repuesto. Tienda en Avenida Nicolás Ayllón 3384, Ate. Teléfono +51 985 068 416.",
};

export default function ContactoPage() {
  return (
    <>
      <Hero
        eyebrow="Contáctenos"
        title="Cuéntanos qué unidad está parada"
        text="Mientras más dato envíes (motor, placa o foto), más rápido se confirma si la pieza está."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
        <ContactForm />
        <aside className="rounded-2xl bg-navy p-6 text-white">
          <h2 className="font-display text-3xl font-bold uppercase">Tienda</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            <li>Avenida Nicolás Ayllón 3384, Ate, Lima</li>
            <li>
              <a href="tel:+51985068416" className="underline">
                +51 985 068 416
              </a>
            </li>
            <li>
              <a href="mailto:ventas@ikomiperu.com" className="underline">
                ventas@ikomiperu.com
              </a>
            </li>
            <li>Lunes a viernes: 8:30 a.m. – 6:00 p.m.</li>
            <li>Sábados: 8:30 a.m. – 3:00 p.m.</li>
          </ul>
          <a
            className="mt-6 inline-block rounded-full bg-brand px-5 py-3 text-sm font-semibold"
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Nicolas+Ayllon+3384+Ate"
            target="_blank"
            rel="noreferrer"
          >
            Ver mapa
          </a>
        </aside>
      </section>
    </>
  );
}
