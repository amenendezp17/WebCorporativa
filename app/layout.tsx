import type { Metadata } from "next";
import localFont from "next/font/local";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = `${business.nombreCorto} — ${business.tipo} en ${business.direccion.localidad}`;
const description = business.descripcionCorta;

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: title,
    template: `%s — ${business.nombreCorto}`,
  },
  description,
  keywords: [
    "reparación de ordenadores",
    "reparación de portátiles",
    "recuperación de datos",
    "soporte informático",
    business.direccion.localidad,
  ],
  authors: [{ name: business.nombre }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: business.url,
    siteName: business.nombre,
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: business.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
