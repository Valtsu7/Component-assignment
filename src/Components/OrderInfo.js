
import React from 'react';

const OrderInfo = ({ product, price, quantity }) => (
  <div>
    <h2>Order Summary</h2>
    <p>Product: {product}</p>
    <p>Price: ${price.toFixed(2)}</p>
    <p>Quantity: {quantity}</p>
    <p>Total: ${(price * quantity).toFixed(2)}</p>
  </div>
);

export default OrderInfo;
