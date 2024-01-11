import logo from "../assets/logo.png";
import call_icon from "../assets/call_icon.jpg"
import email_icon from "../assets/email_icon.png"
import "./Titlebar.css";

const Titlebar = () => {
  return (
    <nav>
      <ul className="titlebarul">
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
            <div>
              <a href="tel:+918985748092">
                <img src={call_icon} alt="Call Icon" width="20" height="20"/> Call Us: +918985748092
              </a>
              <a href="mailto:info@teis.in">
                <img src={email_icon} alt="Call Icon" width="20" height="20"/> info@teis.in
              </a>

          </div>
        </li>
      </ul>

    </nav>
  );
};

export default Titlebar;
