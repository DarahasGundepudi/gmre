import "./ProductSidebar.css";
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import { useState } from "react";


const ProductSidebar = () => {
  const data = [
    {
      name: "Engineering products",
      products: [
        "Stacker reclaimer",
        "Cable reeling drum",
        "Electric cables",
        "Electromagnetic Clutch",
        "Gear motors",
        "Hydraulic Cylinder",
        "Bearings",
        "Conveyor belt",
        "Bolts & Nuts",
        "Gearbox",
        "Pulley",
        "Conveyor Idler Roller",
        "Chain & Sprockets",
        "Rail Sections",
      ],
    },
    {
      name: "GRC Products",
      products: [
        "GRC & GRFC wallpanel",
        "GRC Jali",
        "GRC Murals and Statues",
        "GRC Cladding panel",
        "GRC Cornices",
        "GRC Columns",
      ],
    },
    {
      name: "Metals & Mining Ores",
      products: [
        "Ground Granulated Blast Furnace Slag",
        "Industrial coal",
        "Fly ash",
        "Petroleum coke",
        "Iron ores",
        "Gypsum Powder",
        "Phospogypsum powder",
        "Copper ore",
        "Copper Millberry Scrap",
        "Copper Slag",
      ],
    },
    {
      name: "Other products",
      products: [
        "Maize cattle feed",
        "Cashew Nut",
        "Mens underwear",
        "Dried Ginger Powder",
        "Black Pepper Powder",
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div style={{ backgroundColor: '#FFF', border: "1px solid #dddddd", padding: "1rem", height: 'fit-content'}}>
      <p style={{ marginBlockStart: 0, fontWeight: "bold", color: "#1b65b0" }}>
        Products
      </p>
      <div className="horizontalLine"></div>
      {data.map((dt, index) => {
        return (
          <div key={dt.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: '1px solid #dddddd'
              }}
            >
              <p>{dt.name}</p>
              <img
                style={{ height: "15px", width: "15px" }}
                onClick={() => {
                  activeIndex !== index
                    ? setActiveIndex(index)
                    : setActiveIndex(-1);
                }}
                src={activeIndex === index ? minus : plus}
                alt=""
              />
            </div>
            <div>
              {activeIndex === index &&
                dt.products.map((name) => {
                  return <p key={name}>{name}</p>;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSidebar;