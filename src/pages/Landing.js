import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import ExperienceTabs from '../components/ExperienceTabs';
import Project from '../components/Project';
import { resumeUrl, summary, experience, projects, education, contact } from '../data/resume';
import display from '../elements/display.jpeg';

function Landing() {
  return (
    <main className="landing">
      {/* ---------- Fixed side rails ---------- */}
      <aside className="rail rail-left" aria-hidden="false">
        <a className="rail-icon" target="_blank" rel="noreferrer" href={contact.github} aria-label="GitHub">
          <AiOutlineGithub size="1.25rem" />
        </a>
        <a className="rail-icon" target="_blank" rel="noreferrer" href={contact.linkedin} aria-label="LinkedIn">
          <AiOutlineLinkedin size="1.25rem" />
        </a>
        <a className="rail-icon" target="_blank" rel="noreferrer" href={contact.instagram} aria-label="Instagram">
          <AiOutlineInstagram size="1.25rem" />
        </a>
        <a className="rail-icon" target="_blank" rel="noreferrer" href={`mailto:${contact.email}`} aria-label="Email">
          <AiOutlineMail size="1.25rem" />
        </a>
      </aside>
      <aside className="rail rail-right" aria-hidden="false">
        <a className="rail-email" href={`mailto:${contact.email}`}>{contact.email}</a>
      </aside>

      {/* ---------- Hero ---------- */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="mono-eyebrow">Hi, my name is</p>
          <h1 className="hero-name">Garvit Sadhwani.</h1>
          <h2 className="hero-tagline">I build solutions that scale.</h2>
          <p className="hero-sub">
            I'm a Software Engineer II at <span className="accent-text">Zepto</span>, working on
            high-scale backend services, running at <strong>800K+ RPM</strong> with{' '}
            <strong>sub-30ms p99</strong> latencies and serving <strong>7M daily users</strong>.
          </p>
          <div className="hero-cta">
            <Link className="btn-outline" to="/writings">Writings</Link>
            <a className="btn-outline" target="_blank" rel="noreferrer" href={resumeUrl}>
              View Résumé
            </a>
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="section-block" id="about">
        <h2 className="section-heading"><span className="sh-num">01.</span> About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            {summary.split(/\n+/).map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>
          <div className="about-photo-wrap">
            <img className="about-photo" src={display} alt="Garvit Sadhwani" />
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="section-block" id="experience">
        <h2 className="section-heading"><span className="sh-num">02.</span> Where I've Worked</h2>
        <ExperienceTabs roles={experience} />
      </section>

      {/* ---------- Projects ---------- */}
      <section className="section-block" id="projects">
        <h2 className="section-heading"><span className="sh-num">03.</span> Projects</h2>
        <div className="project-list">
          {projects.map((p, i) => (
            <Project key={i} project={p} />
          ))}
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="section-block" id="education">
        <h2 className="section-heading"><span className="sh-num">04.</span> Education</h2>
        <div className="edu-card">
          <div className="edu-head">
            <h3 className="edu-school">{education.school}</h3>
            <span className="tab-dates">{education.dates}</span>
          </div>
          <p className="edu-degree">{education.degree}</p>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="contact" id="contact">
        <p className="mono-eyebrow center">05. What's Next?</p>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-sub">
          I'm always happy to talk about backend and systems problems, or just to connect.
          My inbox is open, so say hello.
        </p>
        <a className="btn-outline" href={`mailto:${contact.email}`}>Say Hello</a>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer">
        <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
          Design inspired by Brittany Chiang
        </a>
      </footer>
    </main>
  );
}

export default Landing;
