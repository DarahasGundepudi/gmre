import logo from "../assets/logo.png";
import call_icon from "../assets/phone-call.png";
import email_icon from "../assets/email.png";
import "./Titlebar.css";
import NavBar from "../components/Navbar";

const Titlebar = () => {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
      <nav style={{background: '#FFF'}}>
        <ul className="titlebarul">
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <div style={{ display: "flex", gap: "2rem" }}>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  textDecoration: "none",
                }}
                href="tel:+918985748092"
              >
                <img
                  style={{ height: "18px", width: "18px" }}
                  src={call_icon}
                  alt="Call Icon"
                  width="20"
                  height="20"
                />
                &nbsp;Call Us: +918985748092
              </a>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  textDecoration: "none",
                }}
                href="mailto:info@teis.in"
              >
                <img src={email_icon} alt="Call Icon" width="20" height="20" />
                &nbsp;info@teis.in
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <NavBar />
    </div>
  );
};

export default Titlebar;
