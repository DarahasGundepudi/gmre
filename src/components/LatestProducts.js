import ProductCard from "./ProductCard";
import "./LatestProducts.css";

const latestProducts = [
  {
    name: "Chain & Sprockets",
    img: "https://2.wlimg.com/product_images/bc-full/2021/9/2267801/industrial-chains-sprockets-1632232027-2804364.jpeg",
    businessType:
      "Manufacturer, Exporter, Supplier, Retailer, Wholesaler, Trader, Distributor, Importer",
    color: "Grey-Black",
    thickness: "10-15mm",
    location: "Worldwide",
  },
  {
    name: "Cable reeling drum",
    img: "https://2.wlimg.com/product_images/bc-full/dir_76/2267801/cable-reeling-drum-1491221975-2804333.jpeg",
    businessType: "Exporter, Supplier",
    location: "Worldwide",
    description:
      "We make available premium grade Cable Reeling Drum having sturdy make. Power Cable Reeling Drum (PCRD) is mainly using for the heavy machines which are require to move one place to another. We offered the Motorized Cable Reeling Drums are supports various cables reeling applications. Powered with springs and supported by automatic rewind feature. The reel drums are available in wide range of cable length & sizes and as per the requirement of clients choice. We offer these PCRD’s at very economical price range with a maximum guarantee period.",
  },
  {
    name: "Electrical cables",
    img: "https://2.wlimg.com/product_images/bc-full/dir_76/2267801/electrical-cables-1491222012-2804337.jpeg",
    businessType: "Exporter, Supplier",
    location: "Worldwide",
    description:
      "We supply of all types of Electrical Cables both copper and aluminums. We have wide range of industrial cables and we deal with all leading brands in India with incomparable prices.",
  },
  {
    name: "Electromagnetic clutch",
    img: "https://2.wlimg.com/product_images/bc-full/2023/4/2267801/electromagnetic-clutch-1680500770-2804338.jpeg",
    businessType: "Exporter, Supplier",
    location: "Worldwide",
    type: "Electromagnetic clutch",
    material: "steel",
    thickness: "10-15mm",
    features: "Easy To Fit, Non Breakable, Stylish Look",
    finishing: "Polished",
    Warranty: "2yr",
    description:
      "Electromagnetic clutches operate electrically but transmit torque mechanically. Its simply called as EM Clutch. The main advantage of EM Clutch is the complicated linkage is not required to control clutch. We are one of leading suppliers of Electro Mechanical Clutches in India.",
  },
  {
    name: "Gear motor",
    img: "https://2.wlimg.com/product_images/bc-full/dir_76/2267801/gear-motor-1491222043-2804340.jpeg",
    businessType: "Exporter, Supplier",
    location: "Worldwide",
    speciality: "Robust Construction, Easy To Use, High Efficiency",
    waterCapacity: "40 LPM, 60 LPM",
    "Number of poles": "4 pole, 6 pole",
    usage: "Chemical industry",
    material: "Stainless steel",
    shape: "round",
    description:
      "A gear motor is a specific type of electrical motor that is designed to produce high torque while maintaining a low horsepower, or low speed, motor output. We supply all types of AC Geared Motors and DC Geared Motors.",
  },
  {
    name: "Hydraulic cylinder",
    img: "https://2.wlimg.com/product_images/bc-full/dir_76/2267801/hydraulic-cylinder-1491222236-2804354.jpeg",
    businessType: "Exporter, Supplier",
    location: "Worldwide",
    material: "Stainless steel",
    shape: "round",
    color: "Blue",
    features:
      "Anti-corrosive, Easy To Operate, Optimum Finish, Require Low Maintenance",
    finishing: "Polished",
    automaticGrade: "Semi-Automatic",
    pressure: "High pressure",
    description:
      "A hydraulic cylinder is a mechanical actuator that is used to give a unidirectional force through a unidirectional stroke. We supply all types of Hydraulic Cylinders as well as Pneumatic Cylinders and Marine equipments for various Industrial Applications.",
  },
];

const LatestProducts = () => {
  return (
    <div style={{marginBottom: '4rem'}}>
      <h2 className="lpHeading">Latest Products</h2>
      <div className="lpContainer">
        {latestProducts.map((product)=><ProductCard key={product.img} {...product} />)}
      </div>
    </div>
  );
};

export default LatestProducts;
