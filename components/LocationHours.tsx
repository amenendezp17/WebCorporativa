import { business } from "@/lib/business";
import { IconPin, IconClock, IconPhone } from "@/components/icons";

export default function LocationHours() {
  const direccionCompleta = `${business.direccion.calle}, ${business.direccion.codigoPostal} ${business.direccion.localidad}`;
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(direccionCompleta)}&output=embed`;

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Visítanos
        </p>
        <h2 id="contacto-titulo" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ubicación y horario
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-glow">
            <iframe
              title={`Mapa de ubicación de ${business.nombre}`}
              src={mapaSrc}
              className="h-80 w-full md:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <address className="rounded-2xl border border-border bg-surface p-6 not-italic">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <IconPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">{direccionCompleta}</p>
                  <p className="mt-1 text-sm text-muted">España</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <IconPhone className="h-4 w-4" />
                </span>
                <a href={`tel:${business.telefonoHref}`} className="font-semibold hover:text-accent">
                  {business.telefono}
                </a>
              </div>

              <div className="mt-4 flex items-center gap-3 pl-12">
                <a href={`mailto:${business.email}`} className="text-sm text-muted hover:text-accent">
                  {business.email}
                </a>
              </div>
            </address>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <IconClock className="h-4 w-4" />
                </span>
                <h3 className="font-semibold">Horario</h3>
              </div>
              <dl className="mt-4 space-y-1 text-sm">
                {business.horario.map((franja) => (
                  <div key={franja.dias} className="flex justify-between gap-4 border-b border-border py-2 last:border-0">
                    <dt className="text-muted">{franja.dias}</dt>
                    <dd className="font-medium">{franja.horas}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
