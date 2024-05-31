import { useState } from 'react';
import './components/ProductCard.css';
import ProductList from './components/ProductList';
import { Products } from './data/Product';
import ProductCreate from './components/ProductCreate';

function App() {
  const [products, setProducts] = useState(Products)

  const onCreateProduct = (product) => {
    // console.log('Data parent: ', product);
    setProducts([...products, {id: Math.round(Math.random() * 7777), ...product} ])
  }

  return (
    <>
      <div className="app-title">Belanjda Mobil </div>
      <ProductCreate onCreateProduct = {onCreateProduct} />
      <ProductList products= { products } />
    </>
  );
}

export default App;
