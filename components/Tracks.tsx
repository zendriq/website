import s from "./Tracks.module.css";

const TRACKS = [
  {
    mark: "A",
    tone: "a",
    name: "Assess & Remediate",
    fear: "“Something already runs the business, and I don’t know how fragile it is.”",
    who: "Established businesses, 10–200 staff, depending on infrastructure nobody has looked at in years.",
    meta: [
      ["Starts with", "Baseline Assessment"],
      ["Shape", "Fixed fee · about 12 days"],
      ["Then", "We fix what we found, in priority order"],
    ],
  },
  {
    mark: "B",
    tone: "b",
    name: "Plan & Build",
    fear: "“I’m about to spend a lot of money, and I don’t know if the plan is right.”",
    who: "Early-stage startups, pre-product or pre-scale, about to commit a budget to a build.",
    meta: [
      ["Starts with", "Discovery & architecture sprint"],
      ["Shape", "Fixed fee · 2–5 weeks"],
      ["Then", "The build — your team, ours, or shared"],
    ],
  },
];

export default function Tracks() {
  return (
    <section className="band" id="tracks">
      <div className="shell">
        <div className={s.head}>
          <p className="eyebrow">Two ways in</p>
          <h2 className="sectionTitle">
            One practice. Two front doors.
          </h2>
        </div>

        <div className={s.split}>
          {TRACKS.map((t) => (
            <article key={t.mark} className={`${s.card} ${s[t.tone]}`}>
              <header className={s.cardHead}>
                <span className={s.mark} aria-hidden="true">
                  {t.mark}
                </span>
                <h3 className={s.name}>{t.name}</h3>
              </header>

              <p className={s.fear}>{t.fear}</p>
              <p className={s.who}>{t.who}</p>

              <dl className={s.meta}>
                {t.meta.map(([key, value]) => (
                  <div key={key} className={s.metaRow}>
                    <dt className={s.metaKey}>{key}</dt>
                    <dd className={s.metaValue}>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className={s.verdict}>
          Same engineers, same standards, same one number to call. Only the
          front door changes.
        </p>
      </div>
    </section>
  );
}
