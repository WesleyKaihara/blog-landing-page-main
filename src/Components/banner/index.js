import './style.css';
import BgPattern from '../../images/bg-pattern-intro-desktop.svg';
export default function Banner() {
  return (
    <div className='banner'>
      <img src={BgPattern} alt="bgPattern" className='bgPattern' />
      <header className='header'>
        <nav className='navMenu'>
          <h1 className='navTitle'>Blogr</h1>
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
          <a href="#" className='login'>Login</a>
          <button className='signUp'>Sign Up</button>
        </div>

      </header>

      <div className="bannerContent">
        <h1 className='bannerContentTitle'>A modern publishing platform</h1>
        <p className='bannerContentDesc'>Grow your audience and build your online brand</p>
        <div className="bannerContentButtons">
          <button className='signUp'>Start for Free</button>
          <button className='LearnMore'>Sign Up</button>
        </div>

      </div>
    </div>
  )
}