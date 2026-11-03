type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
};

export function SectionTitle({ eyebrow, title, text, light = false }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2
        className={`mt-2 font-display text-4xl font-bold uppercase leading-none md:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-3 text-lg ${light ? "text-white/75" : "text-muted"}`}>{text}</p>
      ) : null}
    </div>
  );
}
