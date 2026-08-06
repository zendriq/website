import { site } from "@/lib/site";
import s from "./BuildGraph.module.css";

type Node = {
  label: string;
  sub: string;
  delay: number;
};

/* The technical surface we look at — the same five layers whether the system
   already exists or is still a drawing. */
const NODES: Node[] = [
  { label: "Infrastructure", sub: "servers · cloud", delay: 0.72 },
  { label: "Network", sub: "routing · access", delay: 0.82 },
  { label: "Application", sub: "services · APIs", delay: 0.92 },
  { label: "Data", sub: "storage · backup", delay: 1.02 },
  { label: "Platform", sub: "logs · alerts · CI", delay: 1.12 },
];

const DESCRIPTION =
  "Diagram: a running system of unknown health and a new product of unknown scope both feed into the same five layers — infrastructure, network, application, data and platform — and come out the other side under control.";

function d(seconds: number) {
  return { "--d": `${seconds}s` } as React.CSSProperties;
}

/* --- wide layout: two inputs, a bus with five branches, one outcome --- */

const W_IN_X = 8;
const W_IN_W = 156;
const W_IN_R = W_IN_X + W_IN_W;
const W_BOX_X = 232;
const W_BOX_W = 196;
const W_BOX_R = W_BOX_X + W_BOX_W;
const W_BUS_L = 190;
const W_BUS_R = 466;
const W_CY = [50, 138, 226, 314, 402];
const W_IN_CY = [170, 282];

function WideGraph() {
  return (
    <svg className={s.wide} viewBox="0 0 680 460" aria-hidden="true">
      <g className={s.tick}>
        <path d="M8 34V24h10M662 24h10v10M672 418v10h-10M18 428H8v-10" fill="none" />
      </g>

      <g className={s.node} style={d(0.05)}>
        <rect
          className={s.boxUnknown}
          x={W_IN_X}
          y={W_IN_CY[0] - 26}
          width={W_IN_W}
          height="52"
          rx="2"
        />
        <text className={`${s.label} ${s.labelMuted}`} x={W_IN_X + 16} y={W_IN_CY[0] - 4}>
          Running system
        </text>
        <text className={s.sub} x={W_IN_X + 16} y={W_IN_CY[0] + 13}>
          health: unknown
        </text>
      </g>

      <g className={s.node} style={d(0.14)}>
        <rect
          className={s.boxIdea}
          x={W_IN_X}
          y={W_IN_CY[1] - 26}
          width={W_IN_W}
          height="52"
          rx="2"
        />
        <text className={`${s.label} ${s.labelMuted}`} x={W_IN_X + 16} y={W_IN_CY[1] - 4}>
          New product
        </text>
        <text className={s.sub} x={W_IN_X + 16} y={W_IN_CY[1] + 13}>
          scope: unknown
        </text>
      </g>

      <path className={s.wire} style={d(0.3)} d={`M${W_IN_R} ${W_IN_CY[0]}H${W_BUS_L}`} pathLength={1} />
      <path className={s.wire} style={d(0.36)} d={`M${W_IN_R} ${W_IN_CY[1]}H${W_BUS_L}`} pathLength={1} />
      <path className={s.wire} style={d(0.44)} d={`M${W_BUS_L} 50V402`} pathLength={1} />

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

      <path className={s.wire} style={d(1.72)} d={`M${W_BUS_R} 50V402`} pathLength={1} />
      <path className={s.wire} style={d(1.86)} d={`M${W_BUS_R} 226H506`} pathLength={1} />

      <g className={s.node} style={d(1.96)}>
        <rect className={s.boxProd} x="506" y="200" width="166" height="52" rx="2" />
        <circle className={`${s.port} ${s.portProd}`} cx="506" cy="226" r="3.5" />
        <text className={`${s.label} ${s.labelBrand}`} x="524" y="222">
          Under control
        </text>
        <text className={s.sub} x="524" y="239">
          assessed · shipped
        </text>
      </g>
    </svg>
  );
}

/* --- narrow layout: the same system, stacked ----------------------- */

const N_BOX_X = 30;
const N_BOX_W = 300;
const N_TOP = 110;
const N_PITCH = 74;
const N_SPINE = 180;
const N_JOIN = 86;

function NarrowGraph() {
  const lastBottom = N_TOP + (NODES.length - 1) * N_PITCH + 52;
  return (
    <svg className={s.narrow} viewBox="0 0 360 574" aria-hidden="true">
      <g className={s.tick}>
        <path d="M8 26V16h10M342 16h10v10M352 548v10h-10M18 558H8v-10" fill="none" />
      </g>

      <g className={s.node} style={d(0.05)}>
        <rect className={s.boxUnknown} x="8" y="14" width="164" height="48" rx="2" />
        <text className={`${s.label} ${s.labelMuted}`} x="22" y="36">
          Running system
        </text>
        <text className={s.sub} x="22" y="52">
          health: unknown
        </text>
      </g>

      <g className={s.node} style={d(0.14)}>
        <rect className={s.boxIdea} x="188" y="14" width="164" height="48" rx="2" />
        <text className={`${s.label} ${s.labelMuted}`} x="202" y="36">
          New product
        </text>
        <text className={s.sub} x="202" y="52">
          scope: unknown
        </text>
      </g>

      {/* both inputs drop onto one bus */}
      <path className={s.wire} style={d(0.3)} d={`M90 62V${N_JOIN}`} pathLength={1} />
      <path className={s.wire} style={d(0.36)} d={`M270 62V${N_JOIN}`} pathLength={1} />
      <path className={s.wire} style={d(0.44)} d={`M90 ${N_JOIN}H270`} pathLength={1} />

      {NODES.map((n, i) => {
        const y = N_TOP + i * N_PITCH;
        const prevBottom = i === 0 ? N_JOIN : y - N_PITCH + 52;
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
        <text className={`${s.label} ${s.labelBrand}`} x="68" y="518">
          Under control
        </text>
        <text className={s.sub} x="68" y="535">
          assessed · shipped
        </text>
      </g>
    </svg>
  );
}

/**
 * The hero. Two front doors — a system nobody has looked at in years, and a
 * product that doesn't exist yet — drawn onto the same technical surface.
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
