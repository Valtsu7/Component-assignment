
import React, { useState } from 'react';

const ProductForm = ({ products, prices, onOrder }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const handleOrder = () => {
    onOrder({
      product: products[selectedProductIndex],
      price: prices[selectedProductIndex],
      quantity: quantity
    });
  };

  return (
    <div>
      <select value={selectedProductIndex} onChange={handleProductChange}>
        {products.map((product, index) => (
          <option key={index} value={index}>{product}</option>
        ))}
      </select>
      <div>
        <button onClick={decrementQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default ProductForm;
