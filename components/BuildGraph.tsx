import { site } from "@/lib/site";
import s from "./BuildGraph.module.css";

type Node = {
  label: string;
  sub: string;
  delay: number;
};

const NODES: Node[] = [
  { label: "Client", sub: "web · mobile", delay: 0.72 },
  { label: "API gateway", sub: "auth · rate limits", delay: 0.82 },
  { label: "Services", sub: "kubernetes", delay: 0.92 },
  { label: "Data", sub: "postgres · redis · queue", delay: 1.02 },
  { label: "Platform", sub: "ci/cd · logs · alerts", delay: 1.12 },
];

const DESCRIPTION =
  "System architecture diagram: an undefined idea on the left routes into a client, API gateway, Kubernetes services, data layer and platform, and out to production on the right.";

function d(seconds: number) {
  return { "--d": `${seconds}s` } as React.CSSProperties;
}

/* --- wide layout: a bus with five branches ------------------------- */

const W_BOX_X = 206;
const W_BOX_W = 204;
const W_BOX_R = W_BOX_X + W_BOX_W;
const W_BUS_L = 164;
const W_BUS_R = 452;
const W_CY = [50, 138, 226, 314, 402];

function WideGraph() {
  return (
    <svg className={s.wide} viewBox="0 0 680 460" aria-hidden="true">
      <g className={s.tick}>
        <path d="M8 34V24h10M662 24h10v10M672 418v10h-10M18 428H8v-10" fill="none" />
      </g>

      <g className={s.node} style={d(0.05)}>
        <rect className={s.boxIdea} x="8" y="200" width="122" height="52" rx="2" />
        <text className={`${s.label} ${s.labelMuted}`} x="24" y="222">
          Your idea
        </text>
        <text className={s.sub} x="24" y="239">
          scope: unknown
        </text>
      </g>

      <path className={s.wire} style={d(0.3)} d="M130 226H164" pathLength={1} />
      <path className={s.wire} style={d(0.44)} d="M164 50V402" pathLength={1} />

      {NODES.map((n, i) => {
        const cy = W_CY[i];
        return (
          <g key={n.label}>
            <path
              className={s.wire}
              style={d(n.delay - 0.1)}
              d={`M${W_BUS_L} ${cy}H${W_BOX_X}`}
              pathLength={1}
            />
            <g className={s.node} style={d(n.delay)}>
              <rect className={s.box} x={W_BOX_X} y={cy - 26} width={W_BOX_W} height="52" rx="2" />
              <circle className={s.port} cx={W_BOX_X} cy={cy} r="3.5" />
              <circle className={s.port} cx={W_BOX_R} cy={cy} r="3.5" />
              <text className={s.label} x={W_BOX_X + 18} y={cy - 4}>
                {n.label}
              </text>
              <text className={s.sub} x={W_BOX_X + 18} y={cy + 13}>
                {n.sub}
              </text>
            </g>
            <path
              className={s.wire}
              style={d(n.delay + 0.5)}
              d={`M${W_BOX_R} ${cy}H${W_BUS_R}`}
              pathLength={1}
            />
          </g>
        );
      })}

      <path className={s.wire} style={d(1.72)} d="M452 50V402" pathLength={1} />
      <path className={s.wire} style={d(1.86)} d="M452 226H494" pathLength={1} />

      <g className={s.node} style={d(1.96)}>
        <rect className={s.boxProd} x="494" y="200" width="178" height="52" rx="2" />
        <circle className={`${s.port} ${s.portProd}`} cx="494" cy="226" r="3.5" />
        <text className={`${s.label} ${s.labelBlue}`} x="512" y="222">
          In production
        </text>
        <text className={s.sub} x="512" y="239">
          shipped · monitored
        </text>
      </g>
    </svg>
  );
}

/* --- narrow layout: the same system, stacked ----------------------- */

const N_BOX_X = 30;
const N_BOX_W = 300;
const N_TOP = 100;
const N_PITCH = 74;
const N_SPINE = 180;

function NarrowGraph() {
  const lastBottom = N_TOP + (NODES.length - 1) * N_PITCH + 52;
  return (
    <svg className={s.narrow} viewBox="0 0 360 574" aria-hidden="true">
      <g className={s.tick}>
        <path d="M8 26V16h10M342 16h10v10M352 548v10h-10M18 558H8v-10" fill="none" />
      </g>

      <g className={s.node} style={d(0.05)}>
        <rect className={s.boxIdea} x="70" y="16" width="220" height="46" rx="2" />
        <text className={`${s.label} ${s.labelMuted}`} x="86" y="36">
          Your idea
        </text>
        <text className={s.sub} x="86" y="52">
          scope: unknown
        </text>
      </g>

      {NODES.map((n, i) => {
        const y = N_TOP + i * N_PITCH;
        const prevBottom = i === 0 ? 62 : y - N_PITCH + 52;
        return (
          <g key={n.label}>
            <path
              className={s.wire}
              style={d(n.delay - 0.1)}
              d={`M${N_SPINE} ${prevBottom}V${y}`}
              pathLength={1}
            />
            <g className={s.node} style={d(n.delay)}>
              <rect className={s.box} x={N_BOX_X} y={y} width={N_BOX_W} height="52" rx="2" />
              <circle className={s.port} cx={N_SPINE} cy={y} r="3.5" />
              <text className={s.label} x={N_BOX_X + 18} y={y + 22}>
                {n.label}
              </text>
              <text className={s.sub} x={N_BOX_X + 18} y={y + 39}>
                {n.sub}
              </text>
            </g>
          </g>
        );
      })}

      <path
        className={s.wire}
        style={d(1.72)}
        d={`M${N_SPINE} ${lastBottom}V496`}
        pathLength={1}
      />

      <g className={s.node} style={d(1.86)}>
        <rect className={s.boxProd} x="50" y="496" width="260" height="52" rx="2" />
        <circle className={`${s.port} ${s.portProd}`} cx={N_SPINE} cy="496" r="3.5" />
        <text className={`${s.label} ${s.labelBlue}`} x="68" y="518">
          In production
        </text>
        <text className={s.sub} x="68" y="535">
          shipped · monitored
        </text>
      </g>
    </svg>
  );
}

/**
 * The hero. A reference architecture that draws itself: an idea at one end
 * that never stops shifting, a system in the middle, production at the other.
 */
export default function BuildGraph() {
  return (
    <figure className={s.frame}>
      <div className={s.plate} role="img" aria-label={DESCRIPTION}>
        <WideGraph />
        <NarrowGraph />
      </div>

      <figcaption className={s.titleBlock}>
        <span className={s.ref}>{site.sheetRef}</span>
        <span className={s.live}>
          <span className={s.liveDot} aria-hidden="true" />
          Live
        </span>
      </figcaption>
    </figure>
  );
}
