import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// A node with a wire leaving it — the diagram, reduced to a favicon.
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
          background: "#121715",
          color: "#e7eae8",
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          fontFamily: "sans-serif",
        }}
      >
        Z
      </div>
    ),
    size,
  );
}
