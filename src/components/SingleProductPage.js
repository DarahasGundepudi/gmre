import './SingleProductPage.css';
import { useLocation } from "react-router-dom";

const SingleProductPage = () => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const state = location.state;
    console.log(state);
    return (
      <div className="spMain">
        <div className="imgdiv">
          <img
            // className="hover:scale-125 transition-all duration-500 w-[25vw] h-[45vh]"
            src={state.img}
            alt=""
          />
        </div>
        <div>
          <h2 className="statename">{state.name}</h2>
          <div>
            <div className="descdiv">
              <p>Business Type:</p>
              <p>Manufacturer, Exporter, Supplier, Retailer</p>
            </div>
            <div className="descdiv">
              <p>Color: </p>
              <p>Grey-black</p>
            </div>
            <div className="descdiv">
              <p>Thickness: </p>
              <p>10-15 min</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleProductPage;