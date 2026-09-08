// Single place to edit the details that change. Everything else reads from here.

export const site = {
  name: "Zendriq",
  tagline: "Technical consulting and infrastructure engineering.",
  description:
    "Zendriq reviews the software a business runs on — what could break, what it would cost, and what to fix first — then fixes it. Fixed-fee Baseline Assessment, about twelve days. For teams about to build something new, a discovery and architecture sprint before anyone writes code.",
  email: "hello@zendriq.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zendriq.com",
  // The drafting-sheet reference printed under the hero diagram.
  sheetRef: "ZQ-001 · TECHNICAL SURFACE · REV B",
};

export const nav = [
  { label: "Two ways in", href: "#tracks" },
  { label: "What we do", href: "#services" },
  { label: "How it runs", href: "#process" },
  { label: "Coverage", href: "#coverage" },
];
