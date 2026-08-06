import { nav, site } from "@/lib/site";
import Logo from "./Logo";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`shell ${s.inner}`}>
        <div className={s.brand}>
          <Logo className={s.mark} />
          <span className={s.wordmark}>{site.name}</span>
          <span className={s.meta}>
            © {new Date().getFullYear()} · Consulting &amp; engineering
          </span>
        </div>

        <nav className={s.links} aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} className={s.link} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className={s.link} href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
