import s from "./Engagements.module.css";

const ROWS = [
  {
    name: "Discovery & architecture sprint",
    what: "Two to five weeks that end in a scoped MVP, a system design, a cost model and a roadmap.",
    fee: "Fixed fee",
    recurring: false,
    when: "You need to know what you're getting into before you commit a budget.",
  },
  {
    name: "MVP build",
    what: "We assemble and run the team that ships version one, against the architecture we designed.",
    fee: "Per project",
    recurring: false,
    when: "The plan exists and you want it built without hiring in-house first.",
  },
  {
    name: "Fractional CTO",
    what: "A named senior engineer in your leadership meetings: architecture calls, hiring, vendors, diligence.",
    fee: "Monthly retainer",
    recurring: true,
    when: "You have engineers, or you're about to, and nobody senior is steering them.",
  },
  {
    name: "Managed platform",
    what: "We host, monitor, patch and stay on-call for the system we built.",
    fee: "Monthly",
    recurring: true,
    when: "The product is live and you'd rather not own an ops team yet.",
  },
];

export default function Engagements() {
  return (
    <section className="band" id="engagements">
      <div className="shell">
        <div className={s.head}>
          <p className="eyebrow">Working together</p>
          <h2 className="sectionTitle">
            Four ways in. Most clients start at the top and stay.
          </h2>
        </div>

        <div className={s.table}>
          <div className={s.rowHead} aria-hidden="true">
            <span>Engagement</span>
            <span>What happens</span>
            <span>Fee</span>
            <span>Right when</span>
          </div>

          {ROWS.map((row) => (
            <div key={row.name} className={s.row}>
              <div>
                <p className={`${s.cellLabel} ${s.cellLabelQuiet}`}>Engagement</p>
                <h3 className={s.name}>{row.name}</h3>
              </div>
              <div>
                <p className={`${s.cellLabel} ${s.cellLabelQuiet}`}>What happens</p>
                <p className={s.what}>{row.what}</p>
              </div>
              <div>
                <p className={s.cellLabel}>Fee</p>
                <p className={`${s.fee} ${row.recurring ? s.recurring : ""}`}>
                  {row.fee}
                </p>
              </div>
              <div>
                <p className={s.cellLabel}>Right when</p>
                <p className={s.when}>{row.when}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={s.note}>
          Every engagement is written down before it starts: scope, milestones,
          payment terms, and who owns the intellectual property. You do — always.
        </p>
      </div>
    </section>
  );
}
