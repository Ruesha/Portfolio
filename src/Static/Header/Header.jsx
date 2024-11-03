import Git from '../../assets/git.svg';
import Twi from '../../assets/twitter.svg';
import link from '../../assets/linkedin.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import './Header.css';

const Header= () =>{
const [isSideNavOpen, setIsSideNavOpen] = useState(false);
const [isFadingOut, setIsFadingOut] = useState(false);

const toggleSideNav = () => {
  if (isSideNavOpen) {
    setIsFadingOut(true); 
    setTimeout(() => {
      setIsSideNavOpen(false);
      setIsFadingOut(false); 
    }, 300); 
  } else {
    setIsSideNavOpen(true);
  }
};

  return (
    <div className='nav'>
      <div className="name">
        <h2>DevRuesha</h2>
      </div>
      <div className="navs">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/techstack">Tech Stack</a>
        <a href="/pro">Projects</a>
        <a href="/contact">Contacts</a>
        <a href="https://github.com/Ruesha"><img src={Git} alt="GitHub" /></a>
        <a href="https://x.com/rue_sha8?s=21"><img src={Twi} alt="Twitter" /></a>
        <a href="https://www.linkedin.com/in/ebenezer-o2-313488298/"><img src={link} alt="LinkedIn" /></a>
      </div>
      <div className="ham" onClick={toggleSideNav}>
        <GiHamburgerMenu />
      </div>
      {isSideNavOpen && (
        <div className={`side-nav ${isSideNavOpen ? '' : isFadingOut ? 'fadeOut' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/techstack">Tech Stack</a>
          <a href="/pro">Projects</a>
          <a href="/contact">Contacts</a>
          <a href="https://github.com/Ruesha">GitHub Profile</a>
          <a href="https://x.com/rue_sha8?s=21">Twitter Handle</a>
          <a href="https://www.linkedin.com/in/ebenezer-o2-313488298/">Linkedin Profile</a>
        </div>
      )}
    </div>
  );
};

export default Header;
