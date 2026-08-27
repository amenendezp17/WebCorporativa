# ByteFix Soluciones Informáticas

Web corporativa para un negocio local ficticio (reparación y soporte técnico informático),
construida como plantilla vendible a clientes reales. 

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (solo fade-in de entrada)
- `next/image` para todas las imágenes
- Metadata API + JSON-LD (`schema.org/ElectronicsStore`, subtipo de `LocalBusiness`)
- Sitemap y robots nativos del App Router

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Tests automáticos (Playwright)

Accesibilidad (WCAG 2.1 AA vía axe-core) y SEO técnico, contra un build de producción real
(no `next dev`, que distorsiona resultados):

```bash
npm run test:e2e        # headless, terminal
npm run test:e2e:ui     # modo interactivo con inspector
```

`playwright.config.ts` levanta `npm run build && npm run start` automáticamente si el puerto
3000 está libre; si ya tienes `npm run dev` corriendo, ciérralo antes de testear — si no, los
tests corren contra la versión de desarrollo (sin optimizar, con overlays) y no representan lo
que ve un usuario o Google real.

Cobertura actual:
- `tests/a11y.spec.ts` — cero violaciones axe-core (WCAG 2.1 A/AA), navegación por teclado,
  `lang`, un único `h1`, `alt` en todas las imágenes.
- `tests/seo.spec.ts` — title/description con longitud correcta, canonical, Open Graph,
  Twitter Card, JSON-LD `LocalBusiness` válido, `sitemap.xml`, `robots.txt`, NAP visible en HTML.

## Auditoría Lighthouse local

1. Genera el build de producción y arráncalo (`npm run build && npm run start`) —
   Lighthouse sobre `next dev` da resultados peores por el modo desarrollo, no es representativo.
2. Con el sitio sirviendo en `http://localhost:3000`, abre Chrome DevTools → pestaña **Lighthouse**.
3. Selecciona modo **Navigation**, categorías **Performance, Accessibility, Best Practices, SEO**,
   dispositivo **Mobile** (el más exigente), y pulsa **Analyze page load**.
4. Alternativa por CLI, sin abrir Chrome manualmente (mobile, la más exigente):
   ```bash
   npx lighthouse http://localhost:3000 --view
   ```
5. Objetivo del proyecto: **95+** en las cuatro categorías.

**Último resultado local** (mobile, build de producción):

| Categoría | Score |
|---|---|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Nota de rendimiento: el `<h1>` del Hero es el elemento de Largest Contentful Paint. Al llevar
animación de entrada con Framer Motion (opacity inicial 0 hasta que React hidrata), el LCP subía
a 5.1s — el navegador no lo pintaba a opacidad completa hasta que el JS del cliente corría. Se
quitó la animación de ese elemento (queda estático, server component) y el fade-in de la spec se
aplicó en las tarjetas de [Services](components/Services.tsx) vía `whileInView`, que solo se
dispara al hacer scroll y no compite por el LCP. Resultado: LCP 2.0s, Performance 81 → 99.

## Estructura

```
app/
  layout.tsx        Metadata global, fuentes, JSON-LD
  page.tsx           Composición de secciones
  opengraph-image.tsx Imagen OG/Twitter generada (next/og)
  sitemap.ts / robots.ts
components/          Nav, Hero, Services, About, Testimonials, LocationHours, Footer, icons
lib/business.ts      Datos del negocio (NAP, servicios, testimonios) — punto único de verdad
public/images/       Ilustraciones SVG locales (hero y sección "sobre nosotros")
```

## Datos de negocio (placeholder)

Todos los datos ficticios (nombre, dirección, teléfono, horario, servicios) están centralizados en
[lib/business.ts](./lib/business.ts). Para reutilizar esta plantilla en un negocio real, basta con
editar ese archivo.
