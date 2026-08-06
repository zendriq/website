"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import s from "./Contact.module.css";

const EXPECT = [
  { when: "Day 1", what: "A reply from an engineer, not a sales inbox." },
  { when: "Day 2–3", what: "A free 20–30 minute scoping call." },
  { when: "Week 1", what: "A one-page scope with a fixed fee on it." },
];

const SITUATIONS = {
  assess: {
    option: "Something already runs",
    subject: "Assessment enquiry",
    label: "What are you running?",
    placeholder:
      "What the business depends on, roughly how big it is, and what made you look.",
  },
  build: {
    option: "Something’s about to be built",
    subject: "New build enquiry",
    label: "What are you building?",
    placeholder: "The idea, who it’s for, and where you are today.",
  },
} as const;

type Situation = keyof typeof SITUATIONS;

export default function Contact() {
  const [situation, setSituation] = useState<Situation>("assess");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [detail, setDetail] = useState("");

  const active = SITUATIONS[situation];

  function compose(event: React.FormEvent) {
    event.preventDefault();
    const subject = `${active.subject} — ${company.trim() || name.trim() || "enquiry"}`;
    const body = [
      `Name: ${name.trim()}`,
      `Company: ${company.trim()}`,
      `Situation: ${active.option}`,
      "",
      `${active.label}`,
      detail.trim(),
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
          <h2 className={s.title}>Book a scoping call.</h2>
          <p className={s.blurb}>
            Twenty minutes, no charge, and no number quoted until we&rsquo;ve
            seen enough to stand behind it. If we&rsquo;re not the right fit,
            you&rsquo;ll hear that on the call.
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
          <fieldset className={s.choice}>
            <legend className={s.label}>Which sounds like you?</legend>
            <div className={s.choiceRow}>
              {(Object.keys(SITUATIONS) as Situation[]).map((key) => (
                <label
                  key={key}
                  className={`${s.choiceOption} ${
                    situation === key ? s.choiceOn : ""
                  }`}
                >
                  <input
                    className={s.choiceInput}
                    type="radio"
                    name="situation"
                    value={key}
                    checked={situation === key}
                    onChange={() => setSituation(key)}
                  />
                  {SITUATIONS[key].option}
                </label>
              ))}
            </div>
          </fieldset>

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
            />
          </div>

          <div className={s.field}>
            <label className={s.label} htmlFor="detail">
              {active.label}
            </label>
            <textarea
              id="detail"
              className={s.textarea}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder={active.placeholder}
              required
            />
          </div>

          <button className={s.submit} type="submit">
            Compose the email
          </button>
          <p className={s.fine}>
            Opens your email app with the details filled in. Nothing is sent
            from this page.
          </p>
        </form>
      </div>
    </section>
  );
}
