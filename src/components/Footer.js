import React from "react";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import navigation from "../assets/navigation.png";
import user from "../assets/user.png";
import phone from "../assets/wapp.png";
import mail from "../assets/mail.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerMain">
      <div>
        <p className="followUs">Follow us:</p>
        <div className="socialIcons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <a
            href="https://api.whatsapp.com/send?phone=919704233306"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginRight: "1.5rem",
                cursor: "pointer",
              }}
              src={whatsapp}
              alt=""
            />
          </a>
        </div>
      </div>
      <div>
        <p className="followUs">General links</p>
        <ul className="someul">
          <li className="singleLink">
            <Link to="/">Home</Link>
          </li>
          <li className="singleLink">
            <Link to="/products">Products</Link>
          </li>
          <li className="singleLink">
            <Link to="/about">About us</Link>
          </li>
          <li className="singleLink">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="followUs">Products</p>
        <ul className="someul">
          <li className="singleLink">Engineering products</li>
          <li className="singleLink">Metals & Mining ores</li>
          <li className="singleLink">GRC products</li>
          <li className="singleLink">Other products</li>
        </ul>
      </div>
      <div>
        <p className="followUs">Contact us</p>
        <div className="ownerName">
          <img src={user} alt="" />
          <p style={{ marginBlock: 0 }}>Mr. Madhava Rao</p>
        </div>
        <div className="phonemail">
          <img src={phone} alt="" />
          <a
            href="https://api.whatsapp.com/send?phone=919704233306"
            target="_blank"
            rel="noreferrer"
          >
            <p style={{ marginBlock: 0 }}>+91 9704233306</p>
          </a>
        </div>
        <div className="phonemail">
          <img src={mail} alt="" />
          <a href="mailto:thrayeesales@gmail.com">
            <p style={{ marginBlock: 0 }}>thrayeesales@gmail.com</p>
          </a>
        </div>
        <div className="ownerName">
          <img src={navigation} alt="" />
          <p style={{ marginBlock: 0 }}>
            D.No.2-22-310/39C/402, Plot No.39C, Addagutta Society, Opp. JNTU,
            Kukatpally, Hyderabad, Telangana - 500085, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
