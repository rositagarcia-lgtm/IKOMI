import Image from "next/image";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  text: string;
  image?: { src: string; alt: string };
  children?: ReactNode;
};

export function Hero({ eyebrow, title, highlight, text, image, children }: HeroProps) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
            {title} {highlight ? <span className="text-brand">{highlight}</span> : null}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">{text}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={640}
            height={480}
            priority
            className="w-full rounded-2xl border border-white/10"
          />
        ) : null}
      </div>
    </section>
  );
}
