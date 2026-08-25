import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const runtime = "edge";
export const alt = business.nombre;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1d2a4f",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 64, height: 6, background: "#ff9f1c", marginBottom: 24 }} />
        <div style={{ display: "flex", fontSize: 34, color: "#38b6ff", fontWeight: 700 }}>
          {business.tipo}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, marginTop: 20 }}>
          {business.nombre}
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 30, color: "#c7d2e0", maxWidth: 900 }}>
          {business.descripcionCorta}
        </div>
      </div>
    ),
    { ...size }
  );
}
