import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header id={id} className="mb-8 scroll-mt-28">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <div className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">{description}</div> : null}
    </header>
  );
}
