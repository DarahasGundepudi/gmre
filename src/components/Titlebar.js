import logo from "../assets/logo.png";
import "./Titlebar.css";

const Titlebar = () => {
  return (
    <nav>
      <ul className="titlebarul">
        <li>
          <img src={logo} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Titlebar;
