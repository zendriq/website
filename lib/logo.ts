/**
 * The Zendriq mark, from public/logo.svg.
 *
 * The source wraps its two paths in a `<g transform="matrix(...)">`. That
 * transform is baked into the coordinates below, because next/og (Satori)
 * renders the favicon and social card and does not handle group transforms
 * reliably. Verified pixel-identical to the source at 500x500.
 *
 * Two separate filled shapes, not one shape with a hole — so leave the fill
 * rule alone. Re-bake from the SVG rather than hand-editing these.
 */
/** The source's square box. The art is centred in it with generous margin. */
export const LOGO_VIEWBOX = "0 0 500 500";

/**
 * The same art cropped to its own bounds — 450 x 324, so 1.389:1. Use this
 * where the mark has to earn every pixel, like the favicon; the square box
 * wastes 35% of the height on margin.
 */
export const LOGO_VIEWBOX_TIGHT = "25 88 450 324";

export const LOGO_PATHS = [
  "M 160,88 C 110.294,88 70,127.836 70,176.977 H 115 c -0,-24.57 20.147,-44.489 45,-44.489 h 55.389 167.072 L 287.791,251.705 231.158,323.023 h 57.21 L 345.002,251.705 439.672,132.488 475,88 h -57.211 z",
  "M 340,412 c 49.706,0 90,-39.836 90,-88.977 h -45 c 0,24.57 -20.147,44.489 -45,44.488 H 284.611 117.539 L 212.209,248.295 268.842,176.977 H 211.631 L 154.998,248.295 60.328,367.512 25,412 h 57.211 z",
];
