import s from "./Principles.module.css";

const ITEMS = [
  {
    claim: "We won't promise every technology.",
    detail:
      "If something sits outside what we can stand behind, we say so on the first call and bring in a specialist rather than learning on your budget.",
  },
  {
    claim: "We're accountable for the code, not just the plan.",
    detail:
      "Contractors may write most of it, but the architecture, the reviews and the delivery are ours. When something breaks, there's one number to call.",
  },
  {
    claim: "You own everything at the end.",
    detail:
      "Source, infrastructure, accounts, documentation and the intellectual property — assigned to you in writing before work begins. Leaving is never a negotiation.",
  },
  {
    claim: "We reuse our own work so you don't pay to reinvent it.",
    detail:
      "Discovery, deployment templates and platform tooling are standardized across clients. That's why week one starts at week one and not week zero.",
  },
];

export default function Principles() {
  return (
    <section className="band" id="principles">
      <div className="shell">
        <div className={s.wrap}>
          <p className={s.label}>How we work</p>
          <div className={s.list}>
            {ITEMS.map((item) => (
              <div key={item.claim} className={s.item}>
                <h3 className={s.claim}>{item.claim}</h3>
                <p className={s.detail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
