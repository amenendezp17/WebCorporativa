// Datos centralizados del negocio ficticio.
// Un único punto de verdad usado por metadata, JSON-LD y componentes.

export const business = {
  nombre: "ByteFix Soluciones Informáticas",
  nombreCorto: "ByteFix",
  tipo: "Reparación y soporte técnico informático",
  descripcionCorta:
    "Reparación de ordenadores, portátiles y móviles con diagnóstico gratuito y garantía por escrito.",
  eslogan: "Tu equipo vuelve a funcionar hoy",
  direccion: {
    calle: "Calle Gran Vía 45",
    localidad: "Madrid",
    codigoPostal: "28013",
    region: "Madrid",
    pais: "ES",
  },
  telefono: "+34 910 234 567",
  telefonoHref: "+34910234567",
  email: "hola@bytefix.es",
  horario: [
    { dias: "Lunes - Viernes", horas: "9:00 - 19:00" },
    { dias: "Sábados", horas: "10:00 - 14:00" },
    { dias: "Domingos", horas: "Cerrado" },
  ],
  // Horario en formato schema.org (ISO 8601): https://schema.org/openingHours
  horarioSchema: ["Mo-Fr 09:00-19:00", "Sa 10:00-14:00"],
  geo: {
    lat: 40.4200,
    lng: -3.7025,
  },
  redes: {
    instagram: "https://instagram.com/bytefix.es",
    facebook: "https://facebook.com/bytefix.es",
    linkedin: "https://linkedin.com/company/bytefix-es",
  },
  url: "https://bytefix.es",
} as const;

export const servicios = [
  {
    titulo: "Reparación de ordenadores",
    descripcion:
      "Diagnóstico gratuito, cambio de componentes y puesta a punto de sobremesas y portátiles de cualquier marca.",
  },
  {
    titulo: "Recuperación de datos",
    descripcion:
      "Rescatamos archivos de discos dañados, borrados o formateados con tasa de éxito superior al 90%.",
  },
  {
    titulo: "Soporte de redes y wifi",
    descripcion:
      "Instalación y optimización de redes domésticas y de oficina para eliminar cortes y zonas sin cobertura.",
  },
  {
    titulo: "Mantenimiento para empresas",
    descripcion:
      "Contratos de mantenimiento informático con atención prioritaria y revisiones periódicas para tu negocio.",
  },
] as const;

export const logros = [
  { valor: "10+", etiqueta: "años en el barrio" },
  { valor: "6.000+", etiqueta: "equipos reparados" },
  { valor: "90%", etiqueta: "éxito en recuperación de datos" },
] as const;

export const testimonios = [
  {
    nombre: "Laura Martín",
    valoracion: 5,
    texto:
      "Se me estropeó el portátil dos días antes de una entrega y lo tuve listo en menos de 24 horas. Servicio rapidísimo y honesto.",
  },
  {
    nombre: "Javier Rodríguez",
    valoracion: 5,
    texto:
      "Recuperaron todas las fotos de un disco duro que daba por perdido. Explican todo con claridad y sin tecnicismos innecesarios.",
  },
  {
    nombre: "Marta Sánchez",
    valoracion: 4,
    texto:
      "Llevamos el mantenimiento de los 12 equipos de la oficina con ellos. Responden rápido y los precios son justos.",
  },
] as const;
