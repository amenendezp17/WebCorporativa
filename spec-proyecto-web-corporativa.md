# Especificación — Proyecto 1: Web Corporativa (Negocio Local)

> Documento listo para pegar en Claude Code. Este es el primer proyecto real a construir para dejar de mostrar "En desarrollo" en el portfolio.

---

## 1. Objetivo

Sitio web para un negocio local ficticio (elige uno: estudio de arquitectura, clínica dental, restaurante, gestoría...) que demuestre visualmente:
- SEO técnico bien hecho (metadata, sitemap, datos estructurados).
- Rendimiento real (Core Web Vitals en verde, Lighthouse 95+).
- Accesibilidad (a11y) cuidada, no solo de palabra.

Es el proyecto más simple de los 4 — el objetivo es terminarlo rápido y que sirva de plantilla vendible a clientes reales que pidan "una web para mi negocio".

---

## 2. Stack tecnológico

| Capa | Elección | Por qué |
|---|---|---|
| Framework | **Next.js 14 (App Router) + TypeScript** | Metadata API nativa, sitemap/robots automáticos, SSG para máximo rendimiento |
| Estilos | **Tailwind CSS** | Consistencia y velocidad |
| Animaciones | **Framer Motion** (mínimo, solo fade-in) | No debe restar rendimiento — usar con moderación aquí |
| Imágenes | **next/image** | Optimización automática, lazy loading, evita layout shift |
| SEO | **Metadata API + JSON-LD (schema.org LocalBusiness)** | Rich snippets en Google (horario, dirección, valoraciones) |
| Mapa | **iframe de Google Maps embed** (gratuito, sin API key) | Ubicación sin coste ni configuración |
| Hosting | **Vercel** | Edge network, Core Web Vitals óptimos out-of-the-box |

---

## 3. Estructura de páginas/secciones

Página única (`app/page.tsx`):

1. **Hero** — nombre del negocio, propuesta de valor, CTA "Reservar/Contactar" y CTA secundario "Ver servicios"
2. **Servicios** — grid de 3-4 servicios con icono, título, descripción corta
3. **Sobre el negocio** — historia breve + foto (usar placeholder realista, no stock genérico)
4. **Testimonios** — 2-3 reseñas ficticias con nombre y valoración (estrellas)
5. **Ubicación y horario** (`#contacto`) — mapa embed + horario + teléfono + dirección (NAP — Name, Address, Phone — clave para SEO local)
6. **Footer** — NAP repetido + redes sociales

---

## 4. Requisitos técnicos no negociables

- `generateMetadata` con title, description, Open Graph y Twitter Card por página
- `sitemap.ts` y `robots.ts` (soportados nativamente en App Router)
- JSON-LD `LocalBusiness` con nombre, dirección, teléfono, horario, geo (puede ir en `<script type="application/ld+json">` en el layout)
- Todas las imágenes con `alt` descriptivo real (no "imagen1.jpg")
- Contraste de color mínimo AA (usa el mismo sistema de tokens del portfolio: `--accent`, `--foreground`, `--muted`)
- HTML semántico: `<nav>`, `<main>`, `<section>`, `<address>` para el NAP
- Lighthouse objetivo: **95+ en Performance, SEO, Accesibilidad y Best Practices**

---

## 5. Datos a rellenar (placeholders)

```
Estos datos elige tu los datos ya que no existe, me gustaria que tuviese algo que ver con tecnologia
NOMBRE_NEGOCIO = "[Nombre del negocio ficticio]"
TIPO_NEGOCIO = "[ej. Estudio de arquitectura / Clínica dental / Restaurante]"
DIRECCION = "[Dirección ficticia pero con formato real]"
TELEFONO = "[Teléfono ficticio]"
HORARIO = "[Lunes-Viernes 9:00-18:00]"
SERVICIOS = ["Servicio 1", "Servicio 2", "Servicio 3"]
```

---

## 6. Prompt para pegar en Claude Code

```
Crea la web de un negocio local en Next.js 14 (App Router) + TypeScript + Tailwind CSS,
siguiendo la especificación completa de spec-proyecto-web-corporativa.md.

Pasos:
1. Scaffoldea el proyecto (o reutiliza la estructura del portfolio si aplica).
2. Crea las secciones de la sección 3: Hero, Servicios, Sobre el negocio, Testimonios,
   Ubicación/Horario, Footer.
3. Implementa generateMetadata, sitemap.ts, robots.ts y JSON-LD LocalBusiness (sección 4).
4. Usa next/image para todas las imágenes con alt descriptivo.
5. Verifica accesibilidad: contraste AA, HTML semántico, navegación por teclado.
6. Al terminar, corre un build y reporta cualquier warning de accesibilidad o SEO.
7. Dime cómo correr Lighthouse localmente para verificar el score antes de deploy.
```

---

## 7. Siguiente paso

1. Decide el tipo de negocio ficticio (arquitectura, clínica, restaurante...).
2. Rellena los placeholders de la sección 5.
3. Pega este archivo + el prompt de la sección 6 en una sesión nueva de Claude Code.
