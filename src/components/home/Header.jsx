import "./Header.css";

function Header({ onEmailClick }) {
    return (
      <div className="header">
        <div className='contact_line'>
            <a href="" draggable="false">aleksim.com</a>
            <a href="" id='my-email' onClick={onEmailClick}>hello@aleksim.com</a>
        </div>
        <div className="shouter-line">
          <div>
            <p>Hi, I’m Alex Simonov and I create <br /> interactive digital experiences on <br /> the web that are visually stunning <br /> and technically sound.</p>
            <div>
              <p>Last updated</p>
              <p>10- 01- 2024</p>
            </div>
          </div>
          <div>
            <h3>An Aspiring Independent <br /> Front-end Developer <br /> currently based in Vilnius</h3>
          </div>
        </div>
      </div>
    );
  }
  
export default Header;