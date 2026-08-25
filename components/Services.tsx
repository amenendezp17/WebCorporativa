"use client";

import { motion } from "framer-motion";
import { servicios } from "@/lib/business";
import { IconWrench, IconDatabase, IconWifi, IconBriefcase } from "@/components/icons";

const iconos = [IconWrench, IconDatabase, IconWifi, IconBriefcase];

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Qué hacemos
        </p>
        <h2 id="servicios-titulo" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Servicios
        </h2>
        <p className="mt-3 max-w-prose text-muted">
          Soluciones de principio a fin para particulares y empresas, con presupuesto cerrado antes de tocar el equipo.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {servicios.map((servicio, i) => {
            const Icon = iconos[i % iconos.length];
            const esNaranja = i % 2 === 1;
            return (
              <motion.li
                key={servicio.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-hover group rounded-2xl border border-border bg-background p-7"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl transition-transform group-hover:scale-110 ${
                    esNaranja ? "bg-brand-orange text-brand-navy" : "bg-accent text-accent-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{servicio.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{servicio.descripcion}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
