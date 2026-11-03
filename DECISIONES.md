# Decisiones del proyecto IKOMI

## Configuración al crear el proyecto

Elegí TypeScript y dejé JavaScript. La guía usa archivos .tsx. Si me equivoco en el slug o en las props de ProductCard, el editor me avisa antes de abrir el sitio. En un catálogo con varias piezas eso evita una ficha rota.

Elegí Tailwind CSS. No usé CSS Modules ni Bootstrap. El azul y el rojo de IKOMI están una sola vez en app/globals.css. Con Tailwind armo el menú, las tarjetas y el formulario sin un CSS por componente. Bootstrap trae su propia grilla y no calza con este diseño. CSS Modules sirve, pero repetiría las mismas clases en cada página.

No usé la carpeta src/. Las rutas quedan en app/page.tsx y app/productos/[slug]/page.tsx, que es como las nombra la guía. Así las encuentro rápido al explicar el proyecto.

Elegí App Router y no Pages Router. El trabajo pide layout, page, not-found y una ruta [slug]. getStaticProps y next/router son del Pages Router y en este proyecto no funcionan.

Activé ESLint. Sin linter no me marca los imports sin usar ni los errores de React mientras escribo. Prefiero que avise antes de correr npm run build.

Dejé Cache Components apagado. Es una opción nueva de Next.js 16 y esta evaluación no la pide. Así trabajo con metadata, notFound() y componentes de servidor normales.

## Para qué sirve cada archivo

app/layout.tsx envuelve todas las páginas. Ahí están la fuente, el Navbar y el Footer, así no los copio en cada ruta. También define el título base: las demás páginas solo ponen su nombre y Next arma "Productos | IKOMI Perú".

app/page.tsx es la ruta /, la portada. No es el layout: es el contenido de inicio.

public/ guarda archivos que el navegador pide directo. Ahí están fondo.jpg, logo-ikomi.webp y los logos de public/marcas/. Las fotos de repuestos, de Nosotros y de Servicios no están en esa carpeta: son enlaces a ikomiperu.com.

next.config.ts es la configuración del proyecto. En images.remotePatterns autoricé ikomiperu.com para que next/image pueda mostrar esos enlaces. Sin esa línea, Next rechaza las fotos externas. El bloque de Turbopack vino al crear el proyecto y lo dejé porque Tailwind 4 lo usa en npm run dev.

Scripts de package.json:

dev levanta el sitio en local y recarga al guardar. Lo uso mientras armo las páginas.

build prepara la versión de producción y falla si hay un error. Esa salida es la captura de evidencias.

start abre lo que generó build. Primero se compila y después se arranca.

## Next.js frente a una SPA con Vite

Una SPA con Vite manda un HTML casi vacío y arma la página en el navegador. En un sitio como IKOMI el buscador vería tarde el título y el texto. Next.js prepara el HTML en el servidor. La portada, con "Repuestos que mueven al Perú" y su metadata, ya viene escrita en la respuesta. Alguien que busca repuestos Hino en Ate tiene más chance de encontrar esa página. Además, pasar de Inicio a Productos con Link no recarga todo el documento.

## Layout anidado y route groups

Sí usé un layout anidado en app/productos/layout.tsx. El listado y la ficha comparten la franja "Catálogo de repuestos · envíos a Lima y a provincias". Si cambio ese aviso, se actualiza en las dos rutas sin tocar las dos páginas.

No usé un route group (marketing). Todo el sitio usa el mismo menú y el mismo pie, y eso ya está en el layout raíz. Otra carpeta no aportaba un segundo diseño.

## Por qué el menú es Client Component

Navbar usa usePathname() para marcar la página actual. Ese dato solo existe en el navegador, así que el archivo lleva "use client". Hero, ProductCard, Footer, las páginas y el layout no necesitan eso y se quedan como Server Components. ContactForm también es cliente, porque el botón tiene que responder sin recargar la página.

## Link y la etiqueta a

Los enlaces internos usan Link de next/link. La página cambia sin pedir de nuevo todo el HTML. Una etiqueta a href sí pide el documento completo: en Network se ve esa carga y la pestaña parpadea. Teléfono, correo y mapa sí van con a, porque salen del sitio. La captura de esa prueba va en evidencias/.

## Imágenes, fuente y animación

next/image pide alt y un tamaño. Reserva el espacio y la página no salta cuando llega la foto. En el catálogo eso se nota en el celular.

next/font trae Barlow Condensed y Source Sans 3 en el build, sin un enlace a Google en el navegador. La letra no parpadea al cargar y el título de la portada se ve ancho, como un aviso de repuestos.

La tarjeta de producto sube un poco al pasar el mouse, para que se note que se puede abrir. La cinta de marcas muestra Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan sin ocupar una grilla alta. Si el navegador pide menos movimiento, la cinta se detiene.
