"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import s from "./Contact.module.css";

const EXPECT = [
  { when: "Day 1", what: "A reply from an engineer, not a sales inbox." },
  { when: "Day 2–3", what: "A 45-minute call about the business, not the tech." },
  { when: "Week 1", what: "A written view of what we'd build first, and what it costs." },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [project, setProject] = useState("");

  function compose(event: React.FormEvent) {
    event.preventDefault();
    const subject = `New project — ${company.trim() || name.trim() || "enquiry"}`;
    const body = [
      `Name: ${name.trim()}`,
      `Company: ${company.trim()}`,
      "",
      "What we're building:",
      project.trim(),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className={s.band} id="contact">
      <div className={`shell ${s.grid}`}>
        <div>
          <p className={s.eyebrow}>Start here</p>
          <h2 className={s.title}>Tell us what you&rsquo;re building.</h2>
          <p className={s.blurb}>
            A paragraph is enough. If we&rsquo;re not the right fit we&rsquo;ll
            tell you on the first call and point you at someone who is.
          </p>

          <ul className={s.expect}>
            {EXPECT.map((row) => (
              <li key={row.when} className={s.expectItem}>
                <span className={s.expectWhen}>{row.when}</span>
                <span>{row.what}</span>
              </li>
            ))}
          </ul>

          <p className={s.direct}>
            Or write to us directly:{" "}
            <a className={s.directLink} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <form className={s.form} onSubmit={compose}>
          <div className={s.field}>
            <label className={s.label} htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              className={s.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className={s.field}>
            <label className={s.label} htmlFor="company">
              Company
            </label>
            <input
              id="company"
              className={s.input}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="organization"
              placeholder="Or “still deciding on the name”"
            />
          </div>

          <div className={s.field}>
            <label className={s.label} htmlFor="project">
              What are you building?
            </label>
            <textarea
              id="project"
              className={s.textarea}
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="The idea, who it's for, and where you are today."
              required
            />
          </div>

          <button className={s.submit} type="submit">
            Compose the email
          </button>
          <p className={s.fine}>
            This opens your email app with the details filled in. Nothing is
            sent from this page.
          </p>
        </form>
      </div>
    </section>
  );
}
