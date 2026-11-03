# Bitácora de uso de IA

## 1. PowerShell no corría npx

- Objetivo: crear el proyecto y que el comando sí se ejecutara.
- Prompt: pegué el error de que npx.ps1 no se puede cargar porque la ejecución de scripts está deshabilitada.
- Resumen: el comando npx abre un script de PowerShell y en esta PC Windows lo bloquea.
- Decisión: modificado.
- Justificación: no cambié la política de seguridad. Usé el ejecutable .cmd y el proyecto se creó igual.

Antes: npx create-next-app@latest ikomi-next-garcia ...

Después: npx.cmd create-next-app@latest ikomi-next-garcia --ts --tailwind --eslint --app --no-src-dir --no-cache-components --use-npm --yes

## 2. Fotos por enlace en lugar de guardarlas

- Objetivo: poner fotos de repuestos sin descargar cada archivo.
- Prompt: pregunté si se podían usar links de imágenes en lugar de almacenarlas en el proyecto.
- Resumen: next/image acepta una URL, pero solo si el dominio está permitido en la configuración.
- Decisión: modificado.
- Justificación: dejé la URL en los productos y autoricé ikomiperu.com en next.config.ts. Sin esa línea las fotos no cargan.

Antes: la imagen apuntaba a la URL y next.config.ts no tenía el dominio.

Después: la misma URL y, en images.remotePatterns, hostname ikomiperu.com.

## 3. Enlace activo del menú

- Objetivo: marcar el enlace de la página en la que estoy.
- Prompt: consulté por qué usePathname marcaba error si el menú no tenía "use client".
- Resumen: usePathname lee la URL en el navegador. Sin "use client", Next lo trata como Server Component y no puede usar ese hook.
- Decisión: aceptado.
- Justificación: Navbar.tsx lleva "use client". Las páginas, el Footer y ProductCard no lo necesitan y se quedan en el servidor.

## 4. Slug que no existe

- Objetivo: que una ficha inventada no muestre una página vacía.
- Prompt: consulté qué hacer en /productos/[slug] cuando el slug no está en los datos.
- Resumen: en el App Router se llama a notFound() y Next muestra app/not-found.tsx.
- Decisión: aceptado.
- Justificación: getProducto busca el slug. Si no lo encuentra, notFound() corta la página y sale el 404 del sitio.

## 5. Layout solo para productos

- Objetivo: no repetir el aviso del catálogo en el listado y en la ficha.
- Prompt: pregunté si convenía un layout anidado en /productos o un route group.
- Resumen: un layout en app/productos/layout.tsx envuelve el listado y la ficha. Un grupo (marketing) no hacía falta porque todo el sitio ya comparte el menú del layout raíz.
- Decisión: modificado.
- Justificación: usé el layout anidado para la franja del catálogo y no creé el route group.

## Reflexión

Las consultas me sirvieron en los puntos donde me trababa: el comando que PowerShell no dejaba correr, las fotos por enlace y el menú con usePathname. El slug y el layout de productos los entendí mejor al ver que notFound() y el layout anidado evitan repetir código. Lo que definí yo fue el texto de la tienda y qué fotos usar. IKOMI es un mostrador de repuestos en Ate, así que las páginas hablan de eso y no de la configuración de Next.
