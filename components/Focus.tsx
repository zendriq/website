import s from "./Focus.module.css";

const VERTICALS = [
  {
    name: "AI-native SaaS",
    body: "Products where the model is the feature. We design the retrieval, evaluation and cost controls that decide whether it works in production or only in the demo.",
    hard: "Evals · inference cost · data boundaries",
  },
  {
    name: "Healthcare",
    body: "Clinical and patient-facing software where the compliance posture has to be in the architecture, not bolted on before the first enterprise deal.",
    hard: "HIPAA · audit trails · PHI segregation",
  },
  {
    name: "Industrial technology",
    body: "Devices, telemetry and the networks between them. Systems that have to keep working when the connection doesn't.",
    hard: "Edge · time-series · offline-first",
  },
];

const CAPS = [
  "AWS",
  "GCP",
  "Azure",
  "Kubernetes",
  "Terraform",
  "Networking",
  "PostgreSQL",
  "Event streaming",
  "LLM integration",
  "MLOps",
  "CI/CD",
  "Observability",
  "Zero-trust access",
  "Automation",
];

export default function Focus() {
  return (
    <section className="band" id="focus">
      <div className="shell">
        <div className={s.head}>
          <div>
            <p className="eyebrow">Where we&rsquo;re strongest</p>
            <h2 className="sectionTitle">
              We&rsquo;d rather be the obvious choice in three industries than an
              option in thirty.
            </h2>
          </div>
          <p className="lede">
            Specializing means we arrive with reference architectures instead of
            questions, and your first four weeks aren&rsquo;t spent teaching us
            your industry.
          </p>
        </div>

        <div className={s.verticals}>
          {VERTICALS.map((v) => (
            <article key={v.name} className={s.vertical}>
              <h3 className={s.vName}>{v.name}</h3>
              <p className={s.vBody}>{v.body}</p>
              <p className={s.vHard}>
                <b>The hard part</b>
                <br />
                {v.hard}
              </p>
            </article>
          ))}
        </div>

        <div className={s.capsWrap}>
          <p className={s.capsLabel}>What we work in</p>
          <ul className={s.caps}>
            {CAPS.map((cap) => (
              <li key={cap} className={s.cap}>
                {cap}
              </li>
            ))}
          </ul>
          <p className={s.honest}>
            If your project needs something that isn&rsquo;t on this list,
            we&rsquo;ll say so and bring in a specialist we&rsquo;ve worked with
            — under our management, on our contract.
          </p>
        </div>
      </div>
    </section>
  );
}
