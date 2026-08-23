import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import Experience from '../components/Experience';
import { experience, skills, education, contact } from '../data/resume';

const RESUME_URL =
  'https://drive.google.com/file/d/1mPP5L1_OI7EXeEtkOPhOT-rqvJG0jiXQ/view?usp=sharing';

function Landing() {
  return (
    <main className="landing">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Backend Software Engineer</div>
          <h1 className="hero-name">
            Hi there, I'm <span className="accent-text">Garvit Sadhwani</span>
          </h1>
          <p className="hero-sub">
            I build high-scale backend systems — services running at
            <strong> 800K+ RPM</strong> with <strong>sub-30ms p99</strong>, serving
            <strong> 7M daily users</strong>.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" target="_blank" rel="noreferrer" href={RESUME_URL}>
              View Résumé
            </a>
            <a className="btn btn-ghost" href="/#/about">About me</a>
          </div>
          <div className="hero-socials">
            <a className="icon-link" target="_blank" rel="noreferrer" href={contact.linkedin} aria-label="LinkedIn">
              <AiOutlineLinkedin size="1.35rem" />
            </a>
            <a className="icon-link" target="_blank" rel="noreferrer" href={contact.github} aria-label="GitHub">
              <AiOutlineGithub size="1.35rem" />
            </a>
            <a className="icon-link" target="_blank" rel="noreferrer" href={`mailto:${contact.email}`} aria-label="Email">
              <AiOutlineMail size="1.35rem" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="section-block" id="experience">
        <h2 className="section-heading">Experience</h2>
        <div className="exp-list">
          {experience.map((role, i) => (
            <Experience key={i} role={role} />
          ))}
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="section-block" id="skills">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="glass skill-card" key={s.group}>
              <div className="skill-group">{s.group}</div>
              <div className="skill-pills">
                {s.items.map((it) => (
                  <span className="pill" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="section-block" id="education">
        <h2 className="section-heading">Education</h2>
        <div className="glass edu-card">
          <div className="edu-head">
            <h3 className="edu-school">{education.school}</h3>
            <span className="exp-dates">{education.dates}</span>
          </div>
          <p className="edu-degree">{education.degree}</p>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <footer className="contact" id="contact">
        <h2 className="contact-title">Let's get in touch</h2>
        <p className="contact-sub">Open to interesting backend and systems problems.</p>
        <div className="contact-icons">
          <a className="icon-link" target="_blank" rel="noreferrer" href={contact.linkedin} aria-label="LinkedIn">
            <AiOutlineLinkedin size="1.5rem" />
          </a>
          <a className="icon-link" target="_blank" rel="noreferrer" href={contact.github} aria-label="GitHub">
            <AiOutlineGithub size="1.5rem" />
          </a>
          <a className="icon-link" target="_blank" rel="noreferrer" href={`mailto:${contact.email}`} aria-label="Email">
            <AiOutlineMail size="1.5rem" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Landing;
