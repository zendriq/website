import s from "./Principles.module.css";

const ITEMS = [
  {
    claim: "Every finding comes with what it costs you.",
    detail:
      "“Unpatched server” is an observation. “This is internet-facing and would stop invoicing for a day” is a finding.",
  },
  {
    claim: "We quote after scoping, never before.",
    detail:
      "A fixed fee is only safe once we’ve seen the environment. That protects your number as much as ours.",
  },
  {
    claim: "We don’t sell capacity we haven’t already sourced.",
    detail:
      "Every build is quoted against named engineers with confirmed availability. One build at a time.",
  },
  {
    claim: "You own everything at the end.",
    detail:
      "Source, infrastructure, accounts and IP — assigned to you in writing before work begins. Leaving is never a negotiation.",
  },
  {
    claim: "We won’t promise every technology.",
    detail:
      "If something sits outside what we can stand behind, you hear it on the first call, not on your budget.",
  },
];

export default function Principles() {
  return (
    <section className="band" id="principles">
      <div className="shell">
        <div className={s.wrap}>
          <p className="eyebrow">How we work</p>
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
