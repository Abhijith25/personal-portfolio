import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, eyebrow, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 scroll-mt-28 ${className}`}>
      {title && (
        <div className="mb-8 md:mb-12">
          {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}
