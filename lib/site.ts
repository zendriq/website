// Single place to edit the details that change. Everything else reads from here.

export const site = {
  name: "Zendriq",
  tagline: "We take your idea from concept to production.",
  description:
    "Zendriq is the technical half of your startup: discovery, architecture, an engineering team assembled for your build, and a CTO who stays on after launch.",
  email: "hello@zendriq.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zendriq.com",
  // The drafting-sheet reference printed under the hero diagram.
  sheetRef: "ZQ-001 · REFERENCE ARCHITECTURE · REV A",
};

export const nav = [
  { label: "What we do", href: "#services" },
  { label: "How it runs", href: "#process" },
  { label: "Working together", href: "#engagements" },
  { label: "Focus", href: "#focus" },
];
