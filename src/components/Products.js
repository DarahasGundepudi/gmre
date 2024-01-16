import "./Products.css";
import ProductCard from "./ProductCard";
import Bearings from "../assets/engineering-products/Bearings.jpeg";
import BoltsNuts from "../assets/engineering-products/BoltsAndNuts.jpeg";
import CableReelingDrum from "../assets/engineering-products/CableReelingDrum.jpg";
import ChainsAndSprockets from "../assets/engineering-products/ChainsAndSprockets.jpeg";
import ConveyorBelt from "../assets/engineering-products/ConveyorBelt.jpeg";
import ConveyorIdlerRoller from "../assets/engineering-products/ConveyorIdlerRoller.jpeg";
import ElectricalCables from "../assets/engineering-products/ElectricalCables.jpeg";
import ElectromagneticClutch from "../assets/engineering-products/ElectromagneticClutch.jpeg";
import GearBox from "../assets/engineering-products/GearBox.jpeg";
import GearMotor from "../assets/engineering-products/GearMotor.jpeg";
import HydraulicCylinder from "../assets/engineering-products/HydraulicCylinder.jpeg";
import Pulley from "../assets/engineering-products/Pulley.jpeg";
import RailSections from "../assets/engineering-products/RailSections.jpeg";
import stackerreclaimer from "../assets/engineering-products/stacker-reclaimer.jpg";

const egProducts = [
  {
    name: "Stacker Reclaimer",
    id: 98501,
    "Business Type": "Exporter, Supplier",
    Type: "Stacker Reclaimer",
    Material: "Steel",
    Application: "Stacker Reclaimer",
    Feature:
      "Drive Location, Statis and Dynamic Analysis, Take-up Performance Requirement",
    Warranty: "2 Yrs",
    "Country of Origin": "India",
    "Product Description": "",
  },
  {
    name: "Cable Reeling Drum",
    id: 98502,
    "Business Type": "Exporter, Supplier",
    "Country of Origin": "India",
    "Product Description":
      "We make available premium grade Cable Reeling Drum having sturdy make. Power Cable Reeling Drum (PCRD) is mainly using for the heavy machines which are require to move one place to another. We offered the Motorized Cable Reeling Drums are supports various cables reeling applications. Powered with springs and supported by automatic rewind feature. The reel drums are available in wide range of cable length & sizes and as per the requirement of clients choice. We offer these PCRD's at very economical price range with a maximum guarantee period.",
  },
  {
    name: "Electrical Cables",
    id: 985013,
    "Business Type": "Exporter, Supplier",
    "Product Description": "",
  },
  {
    name: "Electromagnetic Clutch",
    id: 98504,
    "Business Type": "Exporter, Supplier",
    Type: "Electromagnetic Clutch",
    Material: "Steel",
    Application: "",
    Feature: "Easy To Fit, Non Breakable, Stylish Look, Polished Finishing",
    Thickness: "10-15mm",
    Warranty: "2 Yrs",
    "Country of Origin": "India",
    "Product Description": "",
  },
  {
    name: "Gear Motor",
    id: 98505,
    "Business Type": "Exporter, Supplier",
    Speciality: "Robust Construction, Easy To Use, High Efficiency",
    "Water Capacity": "40 LPM, 60 LPM",
    "Number of Poles": "4 Pole, 6 Pole",
    Usage: "Chemical Industry",
    Material: "Stainless Steel",
    Shape: "Round",
  },
  {
    name: "Hydraulic Cylinder",
    id: 98506,
    "Business Type": "Exporter, Supplier",
    Material: "Stainless Steel",
    Shape: "Round",
    Color: "Blue",
    Feature:
      "Anti-corrosive, Easy To Operate, Optimum Finish, Require Low Maintenance",
    Finishing: "Polished",
    "Automatic Grade": "Semi-Automatic",
    Pressure: "High Pressure",
  },
  {
    name: "Bearings",
    id: 98507,
    "Business Type": "Exporter, Supplier",
    Types:
      "Ball bearings, Jewel Bearings, Fluid Bearings, Magnetic Bearings, Slew Bearing etc.,",
  },
  {
    name: "Conveyor Belt",
    id: 98508,
    "Business Type": "Exporter, Supplier",
  },
  {
    name: "Bolts & Nuts",
    id: 98509,
    "Business Type": "Manufacturer, Supplier",
    Description:
      "We supply all types of Bolts & Nuts for Industries including SS & MS in all sizes in Bulk Quantity. We also supply of Screws and fasteners, washers & foundation Bolts etc.,",
  },
  {
    name: "Gearbox",
    id: 98510,
    "Business Type": "Manufacturer, Supplier",
  },
  {
    name: "Pulley",
    id: 98511,
    "Business Type": "Manufacturer, Supplier",
  },
  {
    name: "Conveyor Idler Roller",
    id: 98512,
    "Business Type": "Manufacturer, Supplier",
    Type: "Conveyor Idler Roller",
    Material: "Stainless Steel",
    Thickness: "0-10mm, 10-20mm",
    Feature: "\tHeat Resistant, Long Life, Vibration Free",
    Finishing: "Polished",
    "Country of Origin": "India",
  },
  {
    name: "Chains & Sprockets",
    id: 98513,
    "Business Type":
      "Manufacturer, Exporter, Supplier, Retailer, Wholesaler, Trader, Distributor, Importer",
    Color: "Grey-Black",
    Thickness: "10-15mm",
  },
  {
    name: "Rail Sections",
    id: 98514,
    "Business Type": "Manufacturer, Supplier",
    Material: "Stainless Steel",
    Thickness: "0-5mm",
    Length: "100-200mm",
    Color: "Silver",
    Feature: "Accuracy Durable, Auto Reverse, Dimensional, High Quality",
    "Surface Finishing": "Polished",
    Description:
      "We offer both new rail as well as relay rail to our clients. Our new rail types comprises of ASCE, AREA, ARA-A, ARA-B and CR rail section.",
  },
];
const egImages = [
  Bearings,
  BoltsNuts,
  CableReelingDrum,
  ChainsAndSprockets,
  ConveyorBelt,
  ConveyorIdlerRoller,
  ElectricalCables,
  ElectromagneticClutch,
  GearBox,
  GearMotor,
  HydraulicCylinder,
  Pulley,
  RailSections,
  stackerreclaimer,
];

const Products = () => {
    window.scrollTo(0, 0);
  return (
    <div>
      <h2 className="headings">Engineering products</h2>
      <div className="manyProducts">
        {egProducts.map((product, index) => {
          let igm = { img: egImages[index] };
          return <ProductCard {...product} {...igm} />;
        })}
      </div>
    </div>
  );
};

export default Products;
