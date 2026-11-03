"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/contacto", label: "Contacto" },
];

function activo(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setAbierto(false)}>
          <span className="grid h-11 w-11 place-items-center rounded bg-brand font-display text-lg font-bold">
            IKM
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold tracking-wide">IKOMI PERÚ</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/70">
              Más que repuestos
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={`border-b-2 pb-1 text-sm font-semibold uppercase tracking-wide ${
                activo(pathname, enlace.href)
                  ? "border-brand text-white"
                  : "border-transparent text-white/70 hover:text-white"
              }`}
            >
              {enlace.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold md:hidden"
          aria-expanded={abierto}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((valor) => !valor)}
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>
      </div>

      {abierto ? (
        <nav className="border-t border-white/10 px-4 py-3 md:hidden" aria-label="Móvil">
          <ul className="grid gap-1">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  onClick={() => setAbierto(false)}
                  className={`block rounded-lg px-3 py-3 text-sm font-semibold uppercase ${
                    activo(pathname, enlace.href) ? "bg-brand text-white" : "text-white/80"
                  }`}
                >
                  {enlace.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
