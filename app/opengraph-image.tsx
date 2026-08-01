import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
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
          justifyContent: "space-between",
          background: "#e7eae8",
          backgroundImage:
            "linear-gradient(#d3d9d5 1px, transparent 1px), linear-gradient(90deg, #d3d9d5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: "#121715",
            }}
          >
            Zendriq
          </div>
          <div
            style={{
              fontSize: 17,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#78837d",
            }}
          >
            Concept → Production
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            color: "#121715",
            maxWidth: 940,
          }}
        >
          The technical half of your startup.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #121715",
            paddingTop: 26,
            fontSize: 20,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#4e5a55",
          }}
        >
          <div style={{ display: "flex" }}>
            Discovery · Architecture · Build · Run
          </div>
          <div style={{ display: "flex", color: "#2a34c8" }}>{site.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
