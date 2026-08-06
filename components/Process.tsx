import { Fragment } from "react";
import s from "./Process.module.css";

type Chart = {
  mark: string;
  tone: string;
  name: string;
  caption: string;
  cols: string;
  ruler: { at: number; label: string }[];
  rows: { key: string; span: string; col: string; tone: string }[];
};

const CHARTS: Chart[] = [
  {
    mark: "A",
    tone: "a",
    name: "Assess & Remediate",
    caption: "Twelve days from access to a report in your hands.",
    cols: "repeat(12, 1fr) 4fr",
    ruler: [
      { at: 1, label: "D0" },
      { at: 5, label: "D5" },
      { at: 10, label: "D10" },
      { at: 13, label: "Then" },
    ],
    rows: [
      { key: "Scoping call", span: "Day 0 · free", col: "1 / 2", tone: "point" },
      { key: "Assessment", span: "Days 3–10", col: "4 / 12", tone: "lead" },
      { key: "Delivery call", span: "Day 12 · live", col: "12 / 13", tone: "point" },
      { key: "Remediation", span: "Day 12 on", col: "13 / 14", tone: "run" },
    ],
  },
  {
    mark: "B",
    tone: "b",
    name: "Plan & Build",
    caption: "About four months from first call to real customers.",
    cols: "repeat(16, 1fr) 4fr",
    ruler: [
      { at: 1, label: "W1" },
      { at: 5, label: "W5" },
      { at: 9, label: "W9" },
      { at: 13, label: "W13" },
      { at: 17, label: "Ongoing" },
    ],
    rows: [
      { key: "Discovery", span: "Weeks 1–2", col: "1 / 3", tone: "lead" },
      { key: "Architecture", span: "Weeks 3–5", col: "3 / 6", tone: "lead" },
      { key: "Build", span: "Weeks 5–16 · you, us or both", col: "6 / 17", tone: "optional" },
      { key: "Oversight", span: "Ongoing", col: "6 / 18", tone: "run" },
    ],
  },
];

export default function Process() {
  return (
    <section className="band" id="process">
      <div className="shell">
        <div className={s.head}>
          <p className="eyebrow">How it runs</p>
          <h2 className="sectionTitle">
            Days to a first answer. Weeks to a plan you can act on.
          </h2>
          <p className="lede">
            Typical shapes, not promises. We quote after a scoping call, never
            before it.
          </p>
        </div>

        <div className={s.charts}>
          {CHARTS.map((chart) => (
            <section key={chart.mark} className={`${s.chart} ${s[chart.tone]}`}>
              <header className={s.chartHead}>
                <span className={s.mark} aria-hidden="true">
                  {chart.mark}
                </span>
                <h3 className={s.chartName}>{chart.name}</h3>
                <p className={s.caption}>{chart.caption}</p>
              </header>

              <div className={s.gantt}>
                <div className={s.rulerSpacer} aria-hidden="true" />
                <div
                  className={s.ruler}
                  style={{ gridTemplateColumns: chart.cols }}
                  aria-hidden="true"
                >
                  {chart.ruler.map((m) => (
                    <span
                      key={m.at}
                      className={s.rulerMark}
                      style={{ gridColumn: `${m.at} / span 1` }}
                    >
                      {m.label}
                    </span>
                  ))}
                </div>

                {chart.rows.map((row) => (
                  <Fragment key={row.key}>
                    <div className={s.rowLabel}>
                      <span className={s.rowName}>{row.key}</span>
                      <span className={s.rowSpan}>{row.span}</span>
                    </div>
                    <div
                      className={s.rowTrack}
                      style={{ gridTemplateColumns: chart.cols }}
                    >
                      <div
                        className={`${s.bar} ${s[row.tone]}`}
                        style={{ gridColumn: row.col }}
                      />
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
