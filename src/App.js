import './App.css';
import Navbar from './navbar/Navbar';
import React from 'react';
import { Routes, HashRouter, Route } from "react-router-dom";

import Landing from './pages/Landing';
import Writings from './pages/Writings';
import Writing from './pages/Writing';
import Notfound from './pages/Notfound';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/writings' element={<Writings />} />
        <Route path='/writings/:slug' element={<Writing />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
