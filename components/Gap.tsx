import s from "./Gap.module.css";

const HAVE = [
  "A business that should exist",
  "Years inside the industry you're fixing",
  "Customers who already answer your calls",
  "Funding, or a credible path to it",
];

const NEED = [
  "Which stack, and what it costs to live with",
  "An architecture that survives the first 10,000 users",
  "Engineers worth hiring, and how to tell",
  "Security and compliance before an auditor asks",
  "Someone senior reviewing the code you paid for",
];

export default function Gap() {
  return (
    <section className="band" id="gap">
      <div className="shell">
        <div className={s.head}>
          <p className="eyebrow">The gap</p>
          <h2 className="sectionTitle">
            You have the idea. The hard part is everything underneath it.
          </h2>
        </div>

        <div className={s.split}>
          <div className={`${s.col} ${s.colHave}`}>
            <p className={s.colLabel}>What you bring</p>
            <ul className={s.list}>
              {HAVE.map((item) => (
                <li key={item} className={s.item}>
                  <span className={s.mark} aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${s.col} ${s.colNeed}`}>
            <p className={`${s.colLabel} ${s.colLabelNeed}`}>What&rsquo;s missing</p>
            <ul className={s.list}>
              {NEED.map((item) => (
                <li key={item} className={s.item}>
                  <span className={`${s.mark} ${s.markNeed}`} aria-hidden="true">
                    ?
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.verdict}>
          <p className={s.verdictLabel}>Usually</p>
          <p className={s.verdictText}>
            Founders fill that column with freelancers and no technical
            oversight. Six months later there&rsquo;s software, and it has to be
            rewritten. Zendriq exists to make that the road not taken.
          </p>
        </div>
      </div>
    </section>
  );
}
