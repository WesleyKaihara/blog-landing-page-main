import './style.css';
import BgPattern from '../../images/bg-pattern-intro-desktop.svg';
import { useState } from 'react';
import ArrowDown from '@mui/icons-material/ArrowDropDown';

export default function Banner() {

  const [menu, setMenu] = useState(undefined);
  const [subMenu, setSubMenu] = useState(undefined);
  const [subMenu2, setSubMenu2] = useState(undefined);
  const [subMenu3, setSubMenu3] = useState(undefined);
  const [arrow1, setArrow1] = useState(null);
  const [arrow2, setArrow2] = useState(null);
  const [arrow3, setArrow3] = useState(null);

  const OpenMenu = () => {
    if (menu === undefined) {
      setMenu("openMenu")
      unloadScrollBars();
      return
    }
    if (menu === "openMenu") {
      setMenu(undefined)
      reloadScrollBars();
      return
    }
  }

  function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
  }

  function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
  }

  function rotate1() {
    if (arrow1 === null) {
      setArrow1("rotate")
      return
    }
    if (arrow1 === "rotate") {
      setArrow1(null)
      return

    }
  }
  function rotate2() {
    if (arrow2 === null) {
      setArrow2("rotate")
      return
    }
    if (arrow2 === "rotate") {
      setArrow2(null)
      return

    }
  }
  function rotate3() {
    if (arrow3 === null) {
      setArrow3("rotate")
      return
    }
    if (arrow3 === "rotate") {
      setArrow3(null)
      return

    }
  }

  return (
    <div className='banner'>
      <img src={BgPattern} alt="bgPattern" className='bgPattern' />

      <header className='header'>
        <div className='menu'>
          <h1 className='navTitle'>Blogr </h1>

          <nav className="navMenu">
            <ul className='navMenuItem'>
              <li className='topMenu' onClick={() => {
                if (subMenu === undefined) {
                  setSubMenu('openSubMenu');
                  setSubMenu2(undefined);
                  setSubMenu3(undefined);
                  rotate1()
                  return
                }

                if (subMenu === 'openSubMenu') {
                  setSubMenu(undefined)
                  rotate1()
                  return
                }
              }}>
                <div className='arrowSubMenu'>
                  Product <ArrowDown className={arrow1} />
                </div>
                <ul className={`subMenu ${subMenu}`} >
                  <li className='subMenuItem'>Contact</li>
                  <li className='subMenuItem'>Newsletter</li>
                  <li className='subMenuItem'>Linkedin</li>
                </ul>
              </li>
            </ul>
            <ul className='navMenuItem'>
              <li className='topMenu' onClick={() => {
                if (subMenu2 === undefined) {
                  setSubMenu(undefined)
                  setSubMenu2('openSubMenu')
                  setSubMenu3(undefined)
                  rotate2()
                  return
                }

                if (subMenu2 === 'openSubMenu') {
                  setSubMenu2(undefined)
                  rotate2()
                  return
                }
              }}>
                <div className='arrowSubMenu'>
                  Company <ArrowDown className={arrow2} />
                </div>
                <ul className={`subMenu ${subMenu2}`} >
                  <li className='subMenuItem'>Contact</li>
                  <li className='subMenuItem'>Newsletter</li>
                  <li className='subMenuItem'>Linkedin</li>
                </ul>
              </li>
            </ul>

            <ul className='navMenuItem'>
              <li className='topMenu' onClick={() => {
                if (subMenu3 === undefined) {
                  setSubMenu(undefined);
                  setSubMenu2(undefined);
                  setSubMenu3('openSubMenu')
                  rotate3()
                  return
                }

                if (subMenu3 === 'openSubMenu') {
                  setSubMenu3(undefined)
                  rotate3()
                  return
                }
              }}>
                <div className='arrowSubMenu'>
                  Connect <ArrowDown className={arrow3} />
                </div>

                <ul className={`subMenu ${subMenu3}`}>
                  <li className='subMenuItem'>Contact</li>
                  <li className='subMenuItem'>Newsletter</li>
                  <li className='subMenuItem'>Linkedin</li>
                </ul>
              </li>
            </ul>

          </nav>
        </div>

        <div className='menu_icon' onClick={OpenMenu}>
          <div className='menu_line' /><div className='menu_line' /><div className='menu_line' />
        </div>


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