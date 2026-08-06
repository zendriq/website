import s from "./Services.module.css";

const CARDS = [
  {
    track: "Track A",
    tone: "a",
    title: "Baseline Assessment",
    flag: "Start here",
    body: "What could break, what it would cost you, and what to fix first — ranked in plain language and walked through live, not emailed.",
    chips: ["Infrastructure", "Network", "Security", "Backup & DR"],
    shape: "Fixed fee · about 12 days",
  },
  {
    track: "Track A",
    tone: "a",
    title: "Remediation",
    body: "We fix what we found, in priority order, and verify it. No separate discovery — the findings are the scope.",
    chips: ["Backups", "Segmentation", "Patching", "Monitoring"],
    shape: "Fixed fee or T&M · 1–8 weeks",
  },
  {
    track: "Track B",
    tone: "b",
    title: "Discovery & architecture",
    flag: "Start here",
    body: "What to build, what it costs, and how it should be put together — a build plan you could hand to any competent team, including one that isn’t us.",
    chips: ["MVP scope", "Cost model", "System design", "Decision records"],
    shape: "Fixed fee · 2–5 weeks",
  },
  {
    track: "Track B",
    tone: "b",
    title: "Team assembly",
    body: "Who should build it, and how those people get in place — screened by someone who will be reviewing their work.",
    chips: ["Role scoping", "Sourcing", "Technical interviews"],
    shape: "Fixed fee · 3–6 weeks",
  },
  {
    track: "Track B",
    tone: "b",
    title: "Build & delivery",
    body: "We assemble the team, run the sprints and review every change. One contract, one invoice, and you own what ships.",
    chips: ["Delivery management", "Code review", "QA", "Release"],
    shape: "Milestone · 8–16 weeks",
    note: "One build at a time. We never quote delivery against people we haven’t already confirmed.",
  },
  {
    track: "Both tracks",
    tone: "both",
    title: "Fractional CTO",
    body: "The senior technical seat, one or two days a week — architecture, review, hiring, vendors, and the answer when the board asks.",
    chips: ["Architecture", "Code review", "Hiring", "Vendors"],
    shape: "Monthly retainer · ongoing",
  },
];

export default function Services() {
  return (
    <section className="band" id="services">
      <div className="shell">
        <div className={s.head}>
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="sectionTitle">
              Judgment first. Then the hands to act on it.
            </h2>
          </div>
          <p className="lede">
            Nothing downstream is sold without the thing upstream. No
            remediation without an assessment, no build without a plan.
          </p>
        </div>

        <div className={s.cards}>
          {CARDS.map((card) => (
            <article key={card.title} className={`${s.card} ${s[card.tone]}`}>
              <p className={s.role}>
                <span className={s.track}>{card.track}</span>
                {card.flag ? <span className={s.flag}>{card.flag}</span> : null}
              </p>

              <h3 className={s.title}>{card.title}</h3>
              <p className={s.body}>{card.body}</p>

              <ul className={s.list}>
                {card.chips.map((chip) => (
                  <li key={chip} className={s.chip}>
                    {chip}
                  </li>
                ))}
              </ul>

              <div className={s.output}>
                <p className={s.outputInner}>
                  <span className={s.outputKey}>Shape</span>
                  <span>{card.shape}</span>
                </p>
                {card.note ? <p className={s.note}>{card.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
