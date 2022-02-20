import './style.css';
import Banner from '../../Components/banner';
import Footer from '../../Components/footer';
import Editor from '../../images/illustration-editor-desktop.svg';
import Circles from '../../images/bg-pattern-circles.svg';
import Phones from '../../images/illustration-phones.svg';
import Laptop from '../../images/illustration-laptop-desktop.svg';

export default function Home() {
  return (
    <div>
      <Banner />
      <main>
        <h1 className='main_title'>Desgined for the future</h1>
        <div className="about">
          <div className="aboutText">
            <div>
              <h1 className='aboutTitle'>Introducing an extensible editor </h1>
              <p className='aboutParagraph'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creative content.The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,videos, and Markdown.Extensibility with plugins and themes provide easy wayps to add functionality or change the looks of a blog.</p>
            </div>

            <div>
              <h1 className='aboutTitle'>Robust content management</h1>
              <p className='aboutParagraph'>Flexible content management enables users to easily move through posts.Increase the usability of your blog by adding customized categories,sections,format, or flow.With this functionality,you are in full control.</p>
            </div>

          </div>
          <img src={Editor} alt="Editor" className='editorImg' />
        </div>

        <div className="infrastructure">
          <div className="infrastructureText">
            <h1 className='infrastructureTitle'>State of the Art Infrastructure</h1>
            <p className='infrastructureParagraph'>With reliability and speed in mind,worldwide data centers provide the backbone for ultra-fast conneectivity.This ensures your site will load instantly,no matter where your readers are,keeping your site competitive.</p>
          </div>
          <img src={Phones} alt="phones" className='phones' />
          <img src={Circles} alt="Circles" className='circles' />
        </div>

        <div className="values">
          <img src={Laptop} alt="Laptop" className='laptop' />
          <div>
            <div className='valuesText'>
              <h1 className='aboutTitle'>Free, open , simple </h1>
              <p className='aboutParagraph'>Blogr is a free open source application backed by a large community of helpful developers.It supports features such as code syntax highlighting,RSS feeds,social medial integration,third-party commenting tools,and works seamlessly with Google Analytics.The architecture is clean and is relatively easy to learn.</p>

              <div>
                <h1 className='aboutTitle'>Power tooling</h1>
                <p className='aboutParagraph'>Batteries included.We built a simple and straightforward CLI tool that makes customization and deployment a breeze,but capable of producing even the most commmplicated sites.</p>
              </div>
            </div>


          </div>


        </div>
      </main>
      <Footer />
    </div>
  );
}

