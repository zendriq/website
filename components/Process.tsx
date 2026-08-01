import { Fragment } from "react";
import s from "./Process.module.css";

const PHASES = [
  {
    key: "Discovery",
    span: "Weeks 1–2",
    col: "1 / 3",
    tone: s.barLead,
    body: "We learn the business, pressure-test what's technically possible, cut the MVP to the features that prove the model, and put a number on it.",
  },
  {
    key: "Architecture",
    span: "Weeks 3–5",
    col: "3 / 6",
    tone: s.barLead,
    body: "System, data, cloud, security and scale, designed and written down. This is the artifact that lets a team change without a rewrite.",
  },
  {
    key: "Build",
    span: "Weeks 5–16",
    col: "6 / 17",
    tone: s.barBuild,
    body: "A team assembled for your scope ships in two-week increments against the architecture, with our review on every pull request.",
  },
  {
    key: "Run",
    span: "Ongoing",
    col: "17 / 18",
    tone: s.barRun,
    body: "We stay on: hosting, monitoring, on-call, the next hire, the next architecture call. Or we hand it to the CTO you hire, cleanly.",
  },
];

const RULER = [
  { at: 1, label: "W1" },
  { at: 5, label: "W5" },
  { at: 9, label: "W9" },
  { at: 13, label: "W13" },
  { at: 17, label: "Ongoing" },
];

export default function Process() {
  return (
    <section className="band" id="process">
      <div className="shell">
        <div className={s.head}>
          <p className="eyebrow">How an engagement runs</p>
          <h2 className="sectionTitle">
            Roughly four months from first call to real customers.
          </h2>
          <p className="lede">
            These timings are typical for a first product, not a promise — we
            scope yours in discovery. What doesn&rsquo;t change is the order.
          </p>
        </div>

        <div className={s.chart}>
          <div className={s.gantt}>
            <div className={s.rulerSpacer} aria-hidden="true" />
            <div className={s.ruler} aria-hidden="true">
              {RULER.map((mark) => (
                <span
                  key={mark.at}
                  className={s.rulerMark}
                  style={{ gridColumn: `${mark.at} / span 1` }}
                >
                  {mark.label}
                </span>
              ))}
            </div>

            {PHASES.map((phase) => (
              <Fragment key={phase.key}>
                <div className={s.rowLabel}>
                  <span className={s.rowName}>{phase.key}</span>
                  <span className={s.rowSpan}>{phase.span}</span>
                </div>
                <div className={s.rowTrack}>
                  <div
                    className={`${s.bar} ${phase.tone}`}
                    style={{ gridColumn: phase.col }}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className={s.detail}>
          {PHASES.map((phase) => (
            <article key={phase.key} className={s.phase}>
              <p className={s.phaseSpan}>{phase.span}</p>
              <h3 className={s.phaseTitle}>{phase.key}</h3>
              <p className={s.phaseBody}>{phase.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
