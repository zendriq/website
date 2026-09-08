import BuildGraph from "./BuildGraph";
import s from "./Hero.module.css";

const PROOF = [
  "Cloud infrastructure",
  "Networking",
  "DevOps",
  "AI integration",
  "Cybersecurity",
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
            Technical consulting &amp; infrastructure engineering
          </p>

          <h1 className={s.h1}>
            The person who built it has moved on. The software your business
            runs on <em>hasn&rsquo;t</em>.
          </h1>

          <p className={s.sub}>
            We do fixed-fee reviews of the software a business depends on —
            what could break, what it would cost you, and what to fix first.
            Twelve days, one report, plain English. Then we fix it.
          </p>

          <div className={s.actions}>
            <a className={s.primary} href="#contact">
              Book a scoping call <Arrow />
            </a>
            <a className={s.secondary} href="#tracks">
              See the two ways in
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
