import { LOGO_PATHS, LOGO_VIEWBOX } from "@/lib/logo";

/**
 * The Zendriq mark. Inherits currentColor, stays crisp at any size, and
 * costs no network request. Set a colour and a width on the parent.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={LOGO_VIEWBOX}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {LOGO_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
