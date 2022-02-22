import './style.css';
import BgPattern from '../../images/bg-pattern-intro-desktop.svg';
import { useState } from 'react';
export default function Banner() {

  const [menu, setMenu] = useState(undefined);

  const OpenMenu = () => {
    if (menu === undefined) {
      setMenu("openMenu")
      console.log(menu);
      unloadScrollBars();
      return
    }
    if (menu === "openMenu") {
      setMenu(undefined)
      console.log(menu)
      reloadScrollBars();
      return
    }
  }

  function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; // IE
  }

  function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // IE
  }

  return (
    <div className='banner'>
      <img src={BgPattern} alt="bgPattern" className='bgPattern' />

      <header className='header'>
        <h1 className='navTitle'>Blogr</h1>

        <div className='menu_icon' onClick={OpenMenu}>
          <div className='menu_line' /><div className='menu_line' /><div className='menu_line' />
        </div>

        <nav className="navMenu">
          <ul className='navMenuItem'>
            <li>Product</li>
          </ul>
          <ul className='navMenuItem'>
            <li>Company</li>
          </ul>

          <ul className='navMenuItem'>
            <li>Connect</li>
          </ul>

        </nav>

        <div className='navMenuLogin'>
          <a href="/" className='login'>Login</a>
          <button className='signUp'>Sign Up</button>
        </div>

      </header>

      <div className={`mobileMenu ${menu}`}>
        <ul className="mobileMenuItem">
          <li className='mobileMenuLink'>Product</li>
        </ul>
        <ul className="mobileMenuItem">
          <li className='mobileMenuLink'>Company</li>
        </ul>
        <ul className="mobileMenuItem">
          <li className='mobileMenuLink'>Connect</li>
        </ul>
        <div className='mobileLine' />

        <a href="/" className='mobileLogin'>Login</a><br />
        <button className='mobileSignUp'>Sign Up</button>
      </div>
      <div className="bannerContent">
        <h1 className='bannerContentTitle'>A modern publishing platform</h1>
        <p className='bannerContentDesc'>Grow your audience and build your online brand</p>
        <div className="bannerContentButtons">
          <button className='signUp'>Start for Free</button>
          <button className='LearnMore'>Sign Up</button>
        </div>

      </div>

    </div >
  )
}