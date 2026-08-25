import Image from "next/image";
import { business, logros } from "@/lib/business";

export default function About() {
  return (
    <section id="sobre-nosotros" aria-labelledby="sobre-titulo" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative md:order-2">
          <div
            className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-20 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-glow">
            <Image
              src="/images/sobre-taller.svg"
              alt="Interior del taller de ByteFix con mostrador de atención, estanterías de componentes y un técnico revisando un ordenador"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:order-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Quiénes somos
          </p>
          <h2 id="sobre-titulo" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sobre {business.nombre}
          </h2>
          <p className="mt-4 text-muted">
            Abrimos nuestro primer local en {business.direccion.localidad} en 2014 con una idea sencilla:
            explicar las averías sin tecnicismos y arreglar lo que se pueda antes de vender nada nuevo.
          </p>
          <p className="mt-4 text-muted">
            Más de una década después seguimos siendo un taller de barrio, con el mismo equipo técnico
            de siempre y clientes que ya nos recomiendan de segunda generación.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {logros.map((logro) => (
              <div key={logro.etiqueta}>
                <dt className="sr-only">{logro.etiqueta}</dt>
                <dd className="text-2xl font-extrabold text-accent">{logro.valor}</dd>
                <dd className="mt-1 text-xs text-muted">{logro.etiqueta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
