import "./App.css";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Titlebar from "./components/Titlebar";
import LatestProducts from "./components/LatestProducts";

function App() {
  return <div>
  <Titlebar />  
	<Navbar />
	<Slider />
  <LatestProducts />
  </div>;
}

export default App;
