export type Marca = {
  nombre: string;
  origen: string;
  detalle: string;
  logo: string;
};

export const marcas: Marca[] = [
  {
    nombre: "Hyundai",
    origen: "Corea",
    detalle: "H-100, Mighty, HD y County. Repuestos de motor, embrague y frenos.",
    logo: "/marcas/hyundai.webp",
  },
  {
    nombre: "Kia",
    origen: "Corea",
    detalle: "K2700 y unidades ligeras de reparto. Motores J2, JT y D4CB.",
    logo: "/marcas/kia.webp",
  },
  {
    nombre: "Mitsubishi",
    origen: "Japón",
    detalle: "Fuso Canter y familias 4D. Muy usadas en distribución de carga.",
    logo: "/marcas/mitsubishi.webp",
  },
  {
    nombre: "Hino",
    origen: "Japón",
    detalle: "Serie 300 y 500. Motores J05 y J08 para transporte de mercancía.",
    logo: "/marcas/hino.webp",
  },
  {
    nombre: "Isuzu",
    origen: "Japón",
    detalle: "N-Series y camiones con motores 4HK1 y 6HK1.",
    logo: "/marcas/isuzu.webp",
  },
  {
    nombre: "Nissan",
    origen: "Japón",
    detalle: "Camiones diésel de trabajo urbano y carga mediana.",
    logo: "/marcas/nissan.webp",
  },
];
