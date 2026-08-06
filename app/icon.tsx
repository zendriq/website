import { ImageResponse } from "next/og";
import { LOGO_PATHS, LOGO_VIEWBOX } from "@/lib/logo";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// The mark, knocked out of a solid brand tile.
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
          background: "#ff500a",
        }}
      >
        <svg width="54" height="54" viewBox={LOGO_VIEWBOX} fill="#171614">
          {LOGO_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </div>
    ),
    size,
  );
}
