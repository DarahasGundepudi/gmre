import logo from "../assets/logo.png";
import "./Navbar.css";
import Dropdown from "react-multilevel-dropdown";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbarul">
        <li>
          <img src={logo} alt="" />
        </li>
        <li>Home</li>
        <li>About us</li>
        <li>
          <Dropdown
            title="Our products"
            openOnHover
            buttonClassName="nostyle"
            menuClassName="menuclass"
            className ="dropdownclass"
          >
            <Dropdown.Item>
              Engineering products
              <Dropdown.Submenu position="left">
                <Dropdown.Item>Stacker Reclaimer</Dropdown.Item>
                <Dropdown.Item>Cable reeling drum</Dropdown.Item>
                <Dropdown.Item>Electrical cables</Dropdown.Item>
                <Dropdown.Item>Electromagnetic clutch</Dropdown.Item>
                <Dropdown.Item>Gear motor</Dropdown.Item>
                <Dropdown.Item>Hydraulic cylinder</Dropdown.Item>
                <Dropdown.Item>Bearings</Dropdown.Item>
                <Dropdown.Item>Conveyor belt</Dropdown.Item>
                <Dropdown.Item>Stacker Reclaimer</Dropdown.Item>
                <Dropdown.Item>Bolt & nuts</Dropdown.Item>
                <Dropdown.Item>Gear box</Dropdown.Item>
                <Dropdown.Item>Pulley</Dropdown.Item>
                <Dropdown.Item>Conveyor idle roller</Dropdown.Item>
                <Dropdown.Item>Chain & Sprockets</Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
              GRC products
              <Dropdown.Submenu position="left">
                <Dropdown.Item>GRC & GFRC wall panel</Dropdown.Item>
                <Dropdown.Item>GRC Jali</Dropdown.Item>
                <Dropdown.Item>GRC Murals and Statues</Dropdown.Item>
                <Dropdown.Item>GRC Cladding panel</Dropdown.Item>
                <Dropdown.Item>GRC Cornices</Dropdown.Item>
                <Dropdown.Item>GRC Columns</Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
              Metals & Mining Ores
              <Dropdown.Submenu position="left">
                <Dropdown.Item>Stacker Reclaimer</Dropdown.Item>
                <Dropdown.Item>Cable reeling drum</Dropdown.Item>
                <Dropdown.Item>Electrical cables</Dropdown.Item>
                <Dropdown.Item>Electromagnetic clutch</Dropdown.Item>
                <Dropdown.Item>Gear motor</Dropdown.Item>
                <Dropdown.Item>Hydraulic cylinder</Dropdown.Item>
                <Dropdown.Item>Bearings</Dropdown.Item>
                <Dropdown.Item>Conveyor belt</Dropdown.Item>
                <Dropdown.Item>Stacker Reclaimer</Dropdown.Item>
                <Dropdown.Item>Bolt & nuts</Dropdown.Item>
                <Dropdown.Item>Gear box</Dropdown.Item>
                <Dropdown.Item>Pulley</Dropdown.Item>
                <Dropdown.Item>Conveyor idle roller</Dropdown.Item>
                <Dropdown.Item>Chain & Sprockets</Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
              Other products
              <Dropdown.Submenu position="left">
                <Dropdown.Item>Stacker Reclaimer</Dropdown.Item>
                <Dropdown.Item>Cable reeling drum</Dropdown.Item>
                <Dropdown.Item>Electrical cables</Dropdown.Item>
                <Dropdown.Item>Electromagnetic clutch</Dropdown.Item>
                <Dropdown.Item>Gear motor</Dropdown.Item>
                <Dropdown.Item>Hydraulic cylinder</Dropdown.Item>
                <Dropdown.Item>Bearings</Dropdown.Item>
                <Dropdown.Item>Conveyor belt</Dropdown.Item>
                <Dropdown.Item>Stacker Reclaimer</Dropdown.Item>
                <Dropdown.Item>Bolt & nuts</Dropdown.Item>
                <Dropdown.Item>Gear box</Dropdown.Item>
                <Dropdown.Item>Pulley</Dropdown.Item>
                <Dropdown.Item>Conveyor idle roller</Dropdown.Item>
                <Dropdown.Item>Chain & Sprockets</Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
