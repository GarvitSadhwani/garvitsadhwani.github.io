import './App.css';
import Navbar from './navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { Routes, HashRouter, Route } from "react-router-dom";

import About from './pages/About';
import Landing from './pages/Landing';
import Notfound from './pages/Notfound';

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  // Fall back to the OS preference the first time.
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <HashRouter>
      <div className="bg-decor" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
