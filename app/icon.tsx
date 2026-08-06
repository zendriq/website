import { ImageResponse } from "next/og";
import { LOGO_PATHS, LOGO_VIEWBOX_TIGHT } from "@/lib/logo";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * The mark itself, in brand orange on transparent — the logo as drawn, rather
 * than knocked out of a tile. Cropped to the art's own bounds so it fills the
 * square as far as its 1.389:1 proportion allows.
 */
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
        }}
      >
        <svg width="62" height="45" viewBox={LOGO_VIEWBOX_TIGHT} fill="#ff500a">
          {LOGO_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </div>
    ),
    size,
  );
}
