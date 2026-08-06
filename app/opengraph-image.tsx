import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { LOGO_PATHS, LOGO_VIEWBOX } from "@/lib/logo";

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
          background: "#eae9e6",
          backgroundImage:
            "linear-gradient(#d7d6d1 1px, transparent 1px), linear-gradient(90deg, #d7d6d1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="50" height="50" viewBox={LOGO_VIEWBOX} fill="#ff500a">
            {LOGO_PATHS.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "#171614",
            }}
          >
            Zendriq
          </div>
          <div
            style={{
              fontSize: 17,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6a665e",
            }}
          >
            Consulting &amp; engineering
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.07,
            color: "#171614",
            maxWidth: 960,
          }}
        >
          The technical decisions you can&rsquo;t afford to get wrong.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "3px solid #ff500a",
            paddingTop: 26,
            fontSize: 20,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#57544c",
          }}
        >
          <div style={{ display: "flex" }}>
            Assess · Architect · Build · Oversee
          </div>
          <div style={{ display: "flex", color: "#b33f00" }}>{site.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
