import { business } from "@/lib/business";
import BrandIcon from "@/components/BrandIcon";

const redes = [
  { nombre: "Instagram", href: business.redes.instagram },
  { nombre: "Facebook", href: business.redes.facebook },
  { nombre: "LinkedIn", href: business.redes.linkedin },
];

export default function Footer() {
  const direccionCompleta = `${business.direccion.calle}, ${business.direccion.codigoPostal} ${business.direccion.localidad}`;

  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-border">
                <BrandIcon className="h-full w-full" />
              </span>
              <p className="text-lg font-extrabold tracking-tight">
                <span className="text-foreground">Byte</span>
                <span className="text-accent">Fix</span>
              </p>
            </div>
            <address className="mt-3 not-italic text-sm text-muted">
              {direccionCompleta}
              <br />
              <a href={`tel:${business.telefonoHref}`} className="hover:text-accent">
                {business.telefono}
              </a>
            </address>
          </div>

          <nav aria-label="Redes sociales">
            <ul className="flex gap-5 text-sm font-medium">
              {redes.map((red) => (
                <li key={red.nombre}>
                  <a
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {red.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {business.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
