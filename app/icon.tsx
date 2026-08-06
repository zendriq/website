import { ImageResponse } from "next/og";
import { LOGO_PATH } from "@/lib/logo";

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
          background: "#ff6500",
        }}
      >
        <svg width="52" height="52" viewBox="0 0 100 100" fill="#171614" fillRule="evenodd">
          <path d={LOGO_PATH} />
        </svg>
      </div>
    ),
    size,
  );
}
