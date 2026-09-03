import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      // Come back to the landing page first, then scroll to the section.
      navigate('/');
      setTimeout(() => scrollToId(id), 60);
    } else {
      scrollToId(id);
    }
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
        <Link className="navbar-link navbar-link-featured" to="/writings" onClick={() => setMenuOpen(false)}>
          Writings
        </Link>
        <a className="navbar-resume" target="_blank" rel="noreferrer" href={resumeUrl}>
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
