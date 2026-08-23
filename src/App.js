import './App.css';
import Navbar from './navbar/Navbar';
import React from 'react'
import {Routes, HashRouter,Route} from "react-router-dom"

import About from './pages/About';
import Landing from './pages/Landing';
import Notfound from './pages/Notfound'

function App() {
  return (
    <HashRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<Notfound/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
