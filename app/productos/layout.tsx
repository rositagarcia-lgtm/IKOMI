export default function ProductosLayout({ children }: LayoutProps<"/productos">) {
  return (
    <div>
      <p className="bg-navy-soft px-4 py-3 text-center text-sm text-white">
        Catálogo de repuestos · envíos a Lima y a provincias
      </p>
      {children}
    </div>
  );
}
