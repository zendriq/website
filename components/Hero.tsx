import BuildGraph from "./BuildGraph";
import s from "./Hero.module.css";

const PROOF = [
  "Cloud architecture",
  "Kubernetes",
  "Networking",
  "AI integration",
  "Automation",
];

function Arrow() {
  return (
    <svg className={s.arrow} width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M0 5h12M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={s.hero} id="top">
      <div className={`shell ${s.grid}`}>
        <div className={s.copy}>
          <p className={s.stamp}>
            <span className={s.stampDot} aria-hidden="true" />
            Engineering partner for founders
          </p>

          <h1 className={s.h1}>
            We take your idea from concept to <em>production</em>.
          </h1>

          <p className={s.sub}>
            You know the business. We own the technology: what to build, how to
            architect it, who writes the code, and how it runs once real
            customers depend on it.
          </p>

          <div className={s.actions}>
            <a className={s.primary} href="#contact">
              Tell us what you&rsquo;re building <Arrow />
            </a>
            <a className={s.secondary} href="#process">
              See how an engagement runs
            </a>
          </div>

          <ul className={s.proof}>
            {PROOF.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={s.diagram}>
          <BuildGraph />
        </div>
      </div>
    </section>
  );
}
