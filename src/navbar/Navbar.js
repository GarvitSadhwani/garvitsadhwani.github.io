import React, { useState } from 'react'

function Navbar(){
    const [showName,setShowName]=useState(false);
    const [about,setAbout]=useState(false);
    const [navbarLight,setNavbarLight]=useState(false);

    window.addEventListener('scroll',()=>{
        const scrollPositionVH = (window.scrollY / window.innerHeight) * 100;
        let limitL=window.innerWidth<800?75:96;
        let limitH=window.innerWidth<800?140:155;
        if(scrollPositionVH > 30) { 
          setShowName(true);
        } else {
          setShowName(false);
        }

        if(scrollPositionVH > limitL && scrollPositionVH < limitH) { 
          setNavbarLight(true);
        } else {
          setNavbarLight(false);
        }

      });


    const homeHandler=()=>{
      setAbout(false);
    }

    const aboutHandler=()=>{
      setAbout(true);
    }

    return(
        <div className='navbar-backdrop'>
            <div className="navbar">
                <div className={`navbar-name ${showName || about ? 'navbar-visible' : ''}`}><a onClick={homeHandler} style={navbarLight?{color:'white'}:{color:'black'}} href="/#/">Garvit Sadhwani</a></div>
                <div className='navbar-element'> <a style={navbarLight?{color:'white'}:{color:'black'}} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1mPP5L1_OI7EXeEtkOPhOT-rqvJG0jiXQ/view?usp=sharing">Resume </a></div>
                <div className='navbar-element'> <a onClick={aboutHandler} style={navbarLight?{color:'white'}:{color:'black'}} href="/#/about">About </a> </div>
            </div>
        </div>
        
    );
}

export default Navbar;