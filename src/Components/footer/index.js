import './style.css';

export default function Footer() {
  return (
    <footer className='footer'>

      <h1 className='footerTitle'>Blogr</h1>

      <div className="footerItens">
        <h1 className='footerItemTitle'>Product</h1>
        <a href="/" className='footerLink'>Overview</a>
        <a href="/" className='footerLink'>Pricing</a>
        <a href="/" className='footerLink'>Marketplace</a>
        <a href="/" className='footerLink'>Features</a>
        <a href="/" className='footerLink'>Integrations</a>
      </div>

      <div className="footerItens">
        <h1 className='footerItemTitle'>Company</h1>
        <a href="/" className='footerLink'>About</a>
        <a href="/" className='footerLink'>Team</a>
        <a href="/" className='footerLink'>Blog</a>
        <a href="/" className='footerLink'>Careers</a>
      </div>

      <div className="footerItens">
        <h1 className='footerItemTitle'>Connect</h1>
        <a href="/" className='footerLink'>Contact</a>
        <a href="/" className='footerLink'>Newsletter</a>
        <a href="/" className='footerLink'>Linkedin</a>
      </div>

    </footer>
  )
}