import s from "./Coverage.module.css";

const AREAS = [
  {
    name: "Cloud infrastructure",
    body: "Designed for the load you’ll have, priced for the one you have now.",
  },
  {
    name: "Networking",
    body: "Segmentation, access and routing that hold up under audit.",
  },
  {
    name: "DevOps & automation",
    body: "Ship without a release ritual. Roll back without a meeting.",
  },
  {
    name: "AI integration",
    body: "Models wired into the product, with cost and evaluation controls.",
  },
  {
    name: "Cybersecurity",
    body: "In the architecture, not bolted on before the first enterprise deal.",
  },
  {
    name: "Full-stack engineering",
    body: "Web, mobile, and the services behind them.",
  },
];

export default function Coverage() {
  return (
    <section className="band" id="coverage">
      <div className="shell">
        <div className={s.head}>
          <div>
            <p className="eyebrow">What we cover</p>
            <h2 className="sectionTitle">
              The whole technical surface, not one slice of it.
            </h2>
          </div>
          <p className="lede">
            One read across all of it, instead of three vendors each defending
            their piece.
          </p>
        </div>

        <div className={s.areas}>
          {AREAS.map((a) => (
            <article key={a.name} className={s.area}>
              <h3 className={s.aName}>{a.name}</h3>
              <p className={s.aBody}>{a.body}</p>
            </article>
          ))}
        </div>

        <p className={s.honest}>
          If something needs expertise we don&rsquo;t hold, we say so on the
          first call and bring in a specialist — under our management, on our
          contract.
        </p>
      </div>
    </section>
  );
}
