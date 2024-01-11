import "./App.css";
import Navbar from "./components/Navbar";
import Titlebar from "./components/Titlebar";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Titlebar />
      {/* <Navbar /> */}
      <Outlet />
      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}

export default App;
