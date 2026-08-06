import { LOGO_PATH } from "@/lib/logo";

/**
 * The Zendriq mark. Inherits currentColor, stays crisp at any size, and
 * costs no network request. Set a colour and a width on the parent.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      fillRule="evenodd"
      aria-hidden="true"
      focusable="false"
    >
      <path d={LOGO_PATH} />
    </svg>
  );
}
