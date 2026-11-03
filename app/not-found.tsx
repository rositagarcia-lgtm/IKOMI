import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">404</p>
      <h1 className="mt-3 font-display text-5xl font-bold uppercase text-navy">
        Esa página no está en el catálogo
      </h1>
      <p className="mt-4 text-muted">
        La dirección no coincide con ninguna ruta del sitio. Revisa el enlace o vuelve al inicio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
      >
        Ir al inicio
      </Link>
    </section>
  );
}
