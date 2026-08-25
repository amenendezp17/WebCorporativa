import Link from "next/link";
import { business } from "@/lib/business";
import { IconPhone } from "@/components/icons";
import BrandIcon from "@/components/BrandIcon";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-nosotros", label: "Sobre nosotros" },
  { href: "#testimonios", label: "Opiniones" },
  { href: "#contacto", label: "Ubicación y horario" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
      >
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-border">
            <BrandIcon className="h-full w-full" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-foreground">Byte</span>
            <span className="text-accent">Fix</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${business.telefonoHref}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <IconPhone className="h-4 w-4" />
          <span className="hidden sm:inline">{business.telefono}</span>
          <span className="sm:hidden">Llamar</span>
        </a>
      </nav>
    </header>
  );
}
