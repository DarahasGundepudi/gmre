import './WelcomeMsg.css';
import { Link } from 'react-router-dom';
const WelcomeMsg = () => {
    return (
      <div className="welcomemsg">
        <h2>Welcome to our website</h2>
        <p>
          <span>Thrayee Engineering & Infra Solutions</span> stands as a
          distinguished manufacturer, exporter, and supplier in the realm of
          industrial machinery and spares. Our repertoire extends to the
          provision of top-tier products encompassing Cable Reeling Drum, Copper
          Slag Abrasive, Electric Motor, Electrical Cables, Electromagnetic
          Clutch, Gear Motor, Hydraulic Brakes, among others, all offered at
          competitive market prices. Our expertise extends to serving as an
          Engineering, Procurement, and Construction (EPC) contractor for Bulk
          Material Handling Systems, catering to prominent entities in the
          cement, steel, power, fertilizer, salt, chemical, mining, and sea port
          industries. We specialize in facilitating the seamless handling of
          diverse materials such as coal, limestone, ore, fertilizer, salt, and
          briquettes. Our footprint in project exports spans across key regions
          including Africa, the UAE, Myanmar, Nepal, and Oman, establishing us
          as a pivotal player in the global landscape of industrial solutions.
        </p>
        <button>
          <Link to="/about">Read more</Link>
        </button>
      </div>
    );
}

export default WelcomeMsg;