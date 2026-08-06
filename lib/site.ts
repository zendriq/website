// Single place to edit the details that change. Everything else reads from here.

export const site = {
  name: "Zendriq",
  tagline: "Technical consulting and infrastructure engineering.",
  description:
    "Zendriq is the senior technical partner for businesses whose systems matter. We find out what's actually true about the technology you depend on — or design what you should build — and stay accountable for fixing it.",
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
