# IKOMI Perú — sitio con Next.js

Réplica de estudio del sitio corporativo de IKOMI Perú (repuestos para camiones y buses), hecha con App Router. No es el sitio oficial.

## Cómo ejecutarlo

Hace falta Node.js 20 o superior. En PowerShell, dentro de esta carpeta:

```powershell
npm.cmd install
npm.cmd run dev
```

Abre http://localhost:3000.

Otros scripts:

- `npm.cmd run build` compila para producción. Tiene que terminar sin errores.
- `npm.cmd run start` publica en local lo que generó `build`.
- `npm.cmd run lint` revisa el código con ESLint.

En PowerShell uso `npm.cmd` porque `npm.ps1` está bloqueado por la política de scripts.

## Rutas

| URL | Archivo |
| --- | --- |
| `/` | `app/page.tsx` |
| `/nosotros` | `app/nosotros/page.tsx` |
| `/servicios` | `app/servicios/page.tsx` |
| `/productos` | `app/productos/page.tsx` |
| `/productos/[slug]` | `app/productos/[slug]/page.tsx` |
| `/marcas` | `app/marcas/page.tsx` |
| `/contacto` | `app/contacto/page.tsx` |
| cualquier otra | `app/not-found.tsx` |

Los productos están en `data/productos.ts`. Si el slug no existe, la ficha llama a `notFound()`.

## Árbol de componentes

```text
app/layout.tsx                         Server Component
├── Navbar                             Client Component  ("use client", usePathname)
├── main
│   ├── Hero                           Server Component
│   ├── BrandStrip                     Server Component
│   ├── SectionTitle                   Server Component
│   ├── ProductCard                    Server Component
│   ├── ContactForm                    Client Component  (el botón no debe recargar)
│   └── páginas de app/                Server Components
└── Footer                             Server Component
```

`Navbar` y `Footer` viven en el layout raíz, así salen en todas las páginas. `app/productos/layout.tsx` es un layout anidado solo del catálogo.

## Decisiones y bitácora

- `DECISIONES.md` explica la configuración, el layout anidado y por qué el menú es cliente.
- `BITACORA_IA.md` registra el uso de IA y dos correcciones.
- `evidencias/` es para las capturas de build, Network y los anchos 375, 768 y 1280. La lista está en `evidencias/QUE-CAPTURAR.txt`.


