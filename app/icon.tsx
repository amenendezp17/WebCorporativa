import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d2a4f",
          borderRadius: 7,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", color: "#38b6ff", fontSize: 20, fontWeight: 800 }}>B</div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 4,
            right: 4,
            width: 6,
            height: 6,
            borderRadius: 3,
            background: "#ff9f1c",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
