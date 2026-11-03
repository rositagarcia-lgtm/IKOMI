import Image from "next/image";
import { marcas } from "@/data/marcas";

export function BrandStrip() {
  const cinta = [...marcas, ...marcas];

  return (
    <section className="overflow-hidden bg-navy py-6" aria-label="Marcas de vehículos">
      <div className="marquee-track flex w-max items-center gap-14 px-8">
        {cinta.map((marca, indice) => (
          <Image
            key={`${marca.nombre}-${indice}`}
            src={marca.logo}
            alt={marca.nombre}
            width={160}
            height={80}
            className="h-14 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
