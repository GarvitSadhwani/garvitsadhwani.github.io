import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { resumeUrl } from '../data/resume';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="navbar-logo" href="/#/" onClick={scrollTo('top')} aria-label="Home">
        GS
      </a>

      <button
        className="navbar-burger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX size="1.4rem" /> : <FiMenu size="1.4rem" />}
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.id} className="navbar-link" href={`#${l.id}`} onClick={scrollTo(l.id)}>
            {l.label}
          </a>
        ))}
        <a className="navbar-resume" target="_blank" rel="noreferrer" href={resumeUrl}>
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
