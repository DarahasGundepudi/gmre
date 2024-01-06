import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";

const Slider = () => {
    return (
      <div>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} stopOnHover={false}>
          <img src={slider1} alt="" />
          <img src={slider2} alt="" />
          <img src={slider3} alt="" />
          <img src={slider4} alt="" />
          <img src={slider5} alt="" />
        </Carousel>
      </div>
    );
};

export default Slider;
