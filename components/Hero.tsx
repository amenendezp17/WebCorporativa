import Image from "next/image";
import { business } from "@/lib/business";

// Server component, sin framer-motion: es contenido above-the-fold y candidato a
// Largest Contentful Paint. Una animación de entrada aquí obliga al navegador a
// esperar hidratación de React antes de pintar a opacidad completa (medido: +4.6s
// de "Render Delay" en Lighthouse). El fade-in de la spec se aplica en Services,
// que no compite por el LCP.

const stats = [
  { valor: "10+", etiqueta: "años de experiencia" },
  { valor: "500+", etiqueta: "reparaciones al mes" },
  { valor: "98%", etiqueta: "clientes satisfechos" },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Presentación"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="glow-blob pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {business.tipo}
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {business.nombre}
              <br />
              <span className="text-accent">{business.eslogan}</span>
            </h1>
            <p className="mt-5 max-w-prose text-lg text-muted">
              {business.descripcionCorta}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Reservar diagnóstico
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Ver servicios
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.etiqueta}>
                  <dt className="sr-only">{stat.etiqueta}</dt>
                  <dd className="text-2xl font-extrabold text-accent">{stat.valor}</dd>
                  <dd className="mt-1 text-xs text-muted">{stat.etiqueta}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-glow">
              <Image
                src="/images/hero-taller.svg"
                alt="Portátil abierto en la mesa de reparación de ByteFix, rodeado de herramientas de diagnóstico informático"
                fill
                priority
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-glow backdrop-blur sm:block">
              <p className="text-xl font-extrabold text-accent">24h</p>
              <p className="text-xs text-muted">tiempo medio de entrega</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
