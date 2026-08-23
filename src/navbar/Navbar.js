import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const RESUME_URL =
  'https://drive.google.com/file/d/1mPP5L1_OI7EXeEtkOPhOT-rqvJG0jiXQ/view?usp=sharing';

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="navbar-name" href="/#/">Garvit Sadhwani</a>
      <div className="navbar-links">
        <a
          className="navbar-link"
          target="_blank"
          rel="noreferrer"
          href={RESUME_URL}
        >
          Resume
        </a>
        <a className="navbar-link" href="/#/about">About</a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FiSun size="1.15rem" /> : <FiMoon size="1.15rem" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
