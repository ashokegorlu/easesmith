import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"

const ProductCard = ({ product, openModal }) => {
  const navigate = useNavigate();

  const viewProduct = () => {
    navigate('/thank-you', { state: { productName: product.name } });
  };

  return (
    <div className="product-card">
      <img className='plant_images' src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <div className="buttons">
        <button className='v_btn_' onClick={viewProduct}>View Product</button>
        <button className='v_btn_' onClick={() => openModal(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
