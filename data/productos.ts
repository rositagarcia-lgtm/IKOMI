export type Producto = {
  slug: string;
  nombre: string;
  categoria: string;
  marca: string;
  precio: string;
  resumen: string;
  descripcion: string;
  compatible: string;
  imagen: string;
  alt: string;
};

export const productos: Producto[] = [
  {
    slug: "filtro-de-aceite-hino",
    nombre: "Filtro de aceite Hino",
    categoria: "Filtros",
    marca: "Hino",
    precio: "S/ 85",
    resumen:
      "Filtro de aceite para motores Hino de camión. Ayuda a mantener el motor limpio entre cambios de aceite.",
    descripcion:
      "Se usa en el mantenimiento periódico de unidades Hino que trabajan en reparto y carga. En tienda se confirma el motor antes de entregarlo, porque un filtro que no corresponde no sella bien y puede dejar pasar suciedad al motor.",
    compatible: "Motores J05 y J08, según año y aplicación.",
    imagen: "https://ikomiperu.com/assets/img/categorias/filtros.webp",
    alt: "Ilustración de un filtro de aceite para camión Hino",
  },
  {
    slug: "kit-de-embrague-hyundai-h100",
    nombre: "Kit de embrague Hyundai H-100",
    categoria: "Embrague",
    marca: "Hyundai",
    precio: "S/ 420",
    resumen:
      "Plato, disco y collarín para la Hyundai H-100, una de las unidades más usadas en reparto urbano.",
    descripcion:
      "El kit se cambia cuando el camión patina al salir o el pedal queda muy arriba. Incluye las piezas que normalmente se reemplazan juntas para no abrir la caja dos veces.",
    compatible: "Hyundai H-100, motores D4BB, D4BH y D4CB.",
    imagen: "https://ikomiperu.com/assets/img/categorias/embrague.webp",
    alt: "Ilustración de un kit de embrague para Hyundai H-100",
  },
  {
    slug: "pastillas-de-freno-fuso",
    nombre: "Pastillas de freno Mitsubishi Fuso",
    categoria: "Frenos",
    marca: "Mitsubishi",
    precio: "S/ 160",
    resumen:
      "Juego de pastillas para freno de disco de camiones Mitsubishi Fuso de distribución.",
    descripcion:
      "Un freno gastado alarga la distancia de parada. Estas pastillas se ofrecen para las unidades Fuso que más se ven en Lima y provincias. Conviene revisar también el disco si ya está rayado.",
    compatible: "Mitsubishi Fuso, motores 4D34 y 4D35.",
    imagen: "https://ikomiperu.com/assets/img/categorias/frenos.webp",
    alt: "Ilustración de pastillas de freno para Mitsubishi Fuso",
  },
  {
    slug: "bomba-de-agua-kia-k2700",
    nombre: "Bomba de agua Kia K2700",
    categoria: "Refrigeración",
    marca: "Kia",
    precio: "S/ 210",
    resumen:
      "Bomba de agua para la Kia K2700. Si falla, el motor se calienta y la unidad se detiene.",
    descripcion:
      "Se cambia cuando hay fuga de refrigerante por la polea o el motor sube de temperatura en ruta. En el mostrador se pide el código del motor porque la K2700 salió con más de una versión.",
    compatible: "Kia K2700, motores J2, JT y D4CB.",
    imagen: "https://ikomiperu.com/assets/img/categorias/motor.webp",
    alt: "Ilustración de una bomba de agua para Kia K2700",
  },
  {
    slug: "kit-de-distribucion-isuzu",
    nombre: "Kit de distribución Isuzu",
    categoria: "Distribución",
    marca: "Isuzu",
    precio: "S/ 380",
    resumen:
      "Faja, templador y guías para la distribución de camiones Isuzu de carga.",
    descripcion:
      "La distribución se cambia por kilometraje, no cuando ya se rompe. Un kit completo evita mezclar una faja nueva con un templador vencido.",
    compatible: "Isuzu N-Series, motores 4HK1 y 6HK1.",
    imagen: "https://ikomiperu.com/assets/img/categorias/distribucion.webp",
    alt: "Ilustración de un kit de distribución para Isuzu",
  },
  {
    slug: "amortiguador-hino-500",
    nombre: "Amortiguador Hino 500",
    categoria: "Suspensión",
    marca: "Hino",
    precio: "S/ 260",
    resumen:
      "Amortiguador para Hino 500. Recupera el control de la unidad cuando la carga mueve de más el chasis.",
    descripcion:
      "Se recomienda cambiar por eje, no una sola pieza, para que la unidad no quede inclinada en el frenado. Aplica a unidades de transporte de mercancía.",
    compatible: "Hino 500, según lado y posición del eje.",
    imagen: "https://ikomiperu.com/assets/img/categorias/suspension.webp",
    alt: "Ilustración de un amortiguador para Hino 500",
  },
];

export function getProducto(slug: string) {
  return productos.find((producto) => producto.slug === slug);
}
