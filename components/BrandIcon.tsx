// Icono de marca ByteFix: engranaje + móvil + circuito "B" + llave inglesa,
// recreado en SVG a partir de imagenCorporativa.jpg con los colores exactos de marca.
// Colores fijos (--brand-*): un logo no debe cambiar de color al alternar tema.

type Props = {
  className?: string;
};

export default function BrandIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Icono de ByteFix"
    >
      <path
        d="M24 6l2.4 4.2 4.6-1.6 1 4.8 4.9.4-1 4.8 4.1 2.6-3 4 3 4-4.1 2.6 1 4.8-4.9.4-1 4.8-4.6-1.6L24 42l-2.4-4.2-4.6 1.6-1-4.8-4.9-.4 1-4.8-4.1-2.6 3-4-3-4 4.1-2.6-1-4.8 4.9-.4 1-4.8 4.6 1.6L24 6z"
        fill="var(--brand-blue)"
      />
      <rect x="15" y="12" width="18" height="26" rx="4" fill="none" stroke="var(--brand-navy)" strokeWidth="2.4" />
      <path
        d="M22 17v3.5h4.5L21.5 27v-3.5H17L22 17z"
        fill="var(--brand-navy)"
      />
      <circle cx="26.5" cy="17.5" r="1.6" fill="var(--brand-orange)" />
      <path
        d="M14 30l-4 4 3 3 4-4"
        fill="none"
        stroke="var(--brand-orange)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="35" r="2" fill="none" stroke="var(--brand-orange)" strokeWidth="2" />
    </svg>
  );
}
