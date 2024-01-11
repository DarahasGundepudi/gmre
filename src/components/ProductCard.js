import './ProductCard.css';

const ProductCard = (items) => {
    return (
      <div className="productCard">
        <img src={items.img} alt="" />
        <div className='cardButtons'>
          <button className='primaryCardButton'>Enquiry</button>
          <button className='secondaryCardButton'>View more</button>
        </div>
      </div>
    );
}

export default ProductCard;