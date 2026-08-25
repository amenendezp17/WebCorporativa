import { business } from "@/lib/business";
import { IconPhone } from "@/components/icons";

// Banda de marca deliberada: navy fijo de identidad, no se adapta a tema claro/oscuro.
export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-titulo" className="relative overflow-hidden bg-brand-navy py-16">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 id="cta-titulo" className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          ¿Tu equipo ha dejado de funcionar?
        </h2>
        <p className="max-w-prose text-white/90">
          Diagnóstico gratuito en el mismo día. Llámanos o pásate por el taller sin cita previa.
        </p>
        <a
          href={`tel:${business.telefonoHref}`}
          className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3 text-sm font-semibold text-brand-navy transition-transform hover:scale-[1.03]"
        >
          <IconPhone className="h-4 w-4" />
          Llamar ahora · {business.telefono}
        </a>
      </div>
    </section>
  );
}
