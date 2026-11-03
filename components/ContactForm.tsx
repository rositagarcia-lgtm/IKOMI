"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [listo, setListo] = useState(false);

  function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setListo(true);
  }

  if (listo) {
    return (
      <p className="rounded-2xl bg-navy px-6 py-8 text-white">
        Gracias. Para confirmar el repuesto, llámanos o escríbenos al correo de la tienda.
      </p>
    );
  }

  return (
    <form onSubmit={enviar} className="grid gap-4 rounded-2xl border border-line bg-card p-6 shadow-sm">
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Nombre
        <input
          name="nombre"
          required
          className="rounded-lg border border-line px-3 py-2 font-normal"
          placeholder="Cómo te llamas"
        />
      </label>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Teléfono
        <input
          name="telefono"
          required
          className="rounded-lg border border-line px-3 py-2 font-normal"
          placeholder="9XX XXX XXX"
        />
      </label>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Unidad o repuesto
        <input
          name="unidad"
          required
          className="rounded-lg border border-line px-3 py-2 font-normal"
          placeholder="Ejemplo: filtro para Hino 500"
        />
      </label>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Mensaje
        <textarea
          name="mensaje"
          required
          rows={4}
          className="rounded-lg border border-line px-3 py-2 font-normal"
          placeholder="Cuéntanos el motor, la placa o el número de pieza"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
      >
        Enviar consulta
      </button>
    </form>
  );
}
