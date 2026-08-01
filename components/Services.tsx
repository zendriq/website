import s from "./Services.module.css";

const CARDS = [
  {
    role: "Your product partner",
    title: "Discovery",
    body: "Before anyone writes code, we work out what the software has to do to move the business, and what it costs. Half the value is the features we talk you out of.",
    chips: ["Feasibility", "MVP scope", "Cost model", "Roadmap"],
    output: "A build plan you could hand to any competent team",
  },
  {
    role: "Your lead architect",
    title: "Architecture",
    body: "System, data, cloud, security, scale — decided deliberately and written down, so the reasoning outlives whoever is on the project this quarter.",
    chips: ["System design", "Data model", "Cloud", "Security", "AI strategy"],
    output: "Diagrams, decision records, environments, budgets",
  },
  {
    role: "Your engineering manager",
    title: "Team assembly",
    body: "We stand up a team shaped for your project from a vetted network, and stand it back down when the work changes. You aren't paying to keep specialists idle.",
    chips: ["Frontend", "Backend", "Mobile", "UI/UX", "DevOps", "QA", "AI/ML"],
    output: "A staffed, managed team — one contract, one point of contact",
  },
  {
    role: "Your CTO",
    title: "Technical leadership",
    body: "The part most agencies skip. We review the work, hold the standard, and keep every technical decision pointed at your business goals — including the ones made while you're in fundraising.",
    chips: ["Code review", "Delivery cadence", "Hiring", "Vendors", "Board decks"],
    output: "Sprint reviews, hiring calls, an escalation path with a name on it",
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
              Not &ldquo;we build software.&rdquo; We own the technology end of
              your company.
            </h2>
          </div>
          <p className="lede">
            Four things, in this order. Skip the first two and the last two get
            expensive.
          </p>
        </div>

        <div className={s.cards}>
          {CARDS.map((card) => (
            <article key={card.title} className={s.card}>
              <p className={s.role}>{card.role}</p>
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
                  <span className={s.outputKey}>You get</span>
                  <span>{card.output}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
