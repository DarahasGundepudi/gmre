import Slider from "./Slider";
import LatestProducts from "./LatestProducts";
import WelcomeMsg from "./WelcomeMsg";

const Body = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Slider />
            <LatestProducts />
            <WelcomeMsg />
        </>
    );
}

export default Body;