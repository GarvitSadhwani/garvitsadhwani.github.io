import React from 'react';
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { contact } from '../data/resume';

function About() {
  return (
    <main className="about">
      <div className="glass about-card">
        <h1 className="about-title">Nice to meet you</h1>
        <p className="about-text">
          I'm Garvit, a backend software engineer who enjoys designing systems that stay
          fast and reliable under serious load.
        </p>
        <p className="about-text">
          I completed my dual degree in Electrical &amp; Electronics Engineering from
          BITS Pilani in 2023. I've always been drawn to problem solving and to
          understanding how things work end to end.
        </p>
        <p className="about-text">
          Away from the keyboard you'll find me playing badminton, gaming, reading, or
          planning the next trip — a beach person all the way. Currently based in
          Bengaluru, India. Let's catch up sometime!
        </p>
        <div className="about-contact">
          <a className="icon-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/garvit.sdh/" aria-label="Instagram">
            <AiOutlineInstagram size="1.5rem" />
          </a>
          <a className="icon-link" target="_blank" rel="noreferrer" href={contact.linkedin} aria-label="LinkedIn">
            <AiOutlineLinkedin size="1.5rem" />
          </a>
          <a className="icon-link" target="_blank" rel="noreferrer" href={`mailto:${contact.email}`} aria-label="Email">
            <AiOutlineMail size="1.5rem" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default About;
