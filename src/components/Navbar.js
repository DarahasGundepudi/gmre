import "./Navbar.css";
import  Dropdown  from "react-multilevel-dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbarul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Dropdown
              title="Engineering products"
              trigger={["click", "hover"]}
              className="dropdownclass"
            >
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
            </Dropdown>
          </li>
          <li>
            <Dropdown
              title="GRC products"
              trigger={["click", "hover"]}
              className="dropdownclass"
            >
              <Dropdown.Item>GRC & GFRC wall panel</Dropdown.Item>
              <Dropdown.Item>GRC Jali</Dropdown.Item>
              <Dropdown.Item>GRC Murals and Statues</Dropdown.Item>
              <Dropdown.Item>GRC Cladding panel</Dropdown.Item>
              <Dropdown.Item>GRC Cornices</Dropdown.Item>
              <Dropdown.Item>GRC Columns</Dropdown.Item>
            </Dropdown>
          </li>
          <li>
            <Dropdown
              title="Metals & Mining Ores"
              trigger={["click", "hover"]}
              className="dropdownclass"
            >
              <Dropdown.Item>Ground Granulated Blast Furnace Slag</Dropdown.Item>
              <Dropdown.Item>Industrial Coal</Dropdown.Item>
              <Dropdown.Item>Fly Ash</Dropdown.Item>
              <Dropdown.Item>Petroleum Coke</Dropdown.Item>
              <Dropdown.Item>Iron Ores</Dropdown.Item>
              <Dropdown.Item>Gypsum Powder</Dropdown.Item>
              <Dropdown.Item>Phosphogypsum Powder</Dropdown.Item>
              <Dropdown.Item>Copper Ore</Dropdown.Item>
              <Dropdown.Item>Copper Millberry Scrap</Dropdown.Item>
              <Dropdown.Item>Copper Slag</Dropdown.Item>
            </Dropdown>
          </li>
          <li>
            <Dropdown
              title="Other products"
              trigger={["click", "hover"]}
              className="dropdownclass"
            >
              <Dropdown.Item>Maize Cattle Feed</Dropdown.Item>
              <Dropdown.Item>Cashew Nut</Dropdown.Item>
              <Dropdown.Item>Mens Underwear</Dropdown.Item>
              <Dropdown.Item>Dried Ginger Powder</Dropdown.Item>
              <Dropdown.Item>Black Pepper Powder</Dropdown.Item>
            </Dropdown>
          </li>
          <li>
            <Link to="contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
