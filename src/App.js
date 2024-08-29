import React, { useState } from 'react';
import Header from './Components/Header';
import ProductForm from './Components/Productform';
import OrderInfo from './Components/OrderInfo';
import './App.css';

function App() {
  const products = ["Product 1", "Product 2", "Product 3"];
  const prices = [10, 15, 20];


  const [order, setOrder] = useState(null);

  return (
    <div className="App">
      
      <Header title="Welcome to the Product Page" />

     
      <ProductForm 
        products={products} 
        prices={prices} 
        onOrder={setOrder} 
      />

     
      {order && <OrderInfo {...order} />}
    </div>
  );
}

export default App;
