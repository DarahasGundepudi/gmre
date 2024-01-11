import "./App.css";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Titlebar from "./components/Titlebar";
import LatestProducts from "./components/LatestProducts";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

function App() {
  return <div>
  <Titlebar />  
	<Navbar />
	<Slider />
  <LatestProducts />
  <FloatingWhatsapp />
  </div>;
}

export default App;
