import { nav, site } from "@/lib/site";
import s from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={s.nav}>
      <div className={`shell ${s.inner}`}>
        <a className={s.brand} href="#top">
          <span className={s.wordmark}>{site.name}</span>
          <span className={s.brandNote}>Concept → Production</span>
        </a>

        <nav className={s.links} aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} className={s.link} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={s.cta} href="#contact">
          Start a project
        </a>
      </div>
    </header>
  );
}
