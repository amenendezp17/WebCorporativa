import { testimonios } from "@/lib/business";
import { IconStar } from "@/components/icons";

function Rating({ valor }: { valor: number }) {
  return (
    <div
      className="flex gap-0.5 text-accent"
      role="img"
      aria-label={`Valoración: ${valor} de 5 estrellas`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <IconStar key={i} className="h-4 w-4" filled={i < valor} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonios-titulo" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Opiniones
        </p>
        <h2 id="testimonios-titulo" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Lo que dicen nuestros clientes
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonios.map((t) => (
            <li key={t.nombre}>
              <figure className="card-hover relative h-full rounded-2xl border border-border bg-background p-7">
                <span
                  className="absolute right-6 top-5 select-none font-serif text-6xl leading-none text-accent/15"
                  aria-hidden="true"
                >
                  “
                </span>
                <Rating valor={t.valoracion} />
                <blockquote className="relative mt-4 text-sm leading-relaxed text-muted">
                  “{t.texto}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-sm font-bold">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs text-accent-foreground">
                    {t.nombre.charAt(0)}
                  </span>
                  {t.nombre}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
