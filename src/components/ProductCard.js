import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = (items) => {
  window.scrollTo(0, 0);
    return (
      <div className="productCard">
        <img src={items.img} alt="" />
        <div className="cardButtons">
          <button className="primaryCardButton">Enquiry</button>
          <Link to={`/viewProduct/${items.id}`} state={items}>
            <button className="secondaryCardButton">View more</button>
          </Link>
        </div>
      </div>
    );
}

export default ProductCard;