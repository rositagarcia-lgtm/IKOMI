import Link from "next/link";

const paginas = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">IKOMI PERÚ</p>
          <p className="mt-3 text-sm text-white/75">
            Importación y venta de repuestos para camiones y buses Hyundai, Kia, Mitsubishi, Hino,
            Isuzu y Nissan.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/60">Páginas</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {paginas.map((pagina) => (
              <li key={pagina.href}>
                <Link href={pagina.href} className="hover:text-brand">
                  {pagina.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/60">Contacto</h2>
          <ul className="mt-3 grid gap-2 text-sm text-white/80">
            <li>
              <a href="tel:+51985068416" className="hover:text-brand">
                +51 985 068 416
              </a>
            </li>
            <li>
              <a href="mailto:ventas@ikomiperu.com" className="hover:text-brand">
                ventas@ikomiperu.com
              </a>
            </li>
            <li>Avenida Nicolás Ayllón 3384, Ate, Lima</li>
            <li>Lunes a viernes 8:30 a.m. – 6:00 p.m. Sábados 8:30 a.m. – 3:00 p.m.</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © 2026 IKOMI PERÚ. Todos los derechos reservados.
      </p>
    </footer>
  );
}
