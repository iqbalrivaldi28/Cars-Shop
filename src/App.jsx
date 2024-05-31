import { useState } from 'react';
import './components/ProductCard.css';
import ProductList from './components/ProductList';
import { Products } from './data/Product';

function App() {
  const [products, setProducts] = useState(Products)

  return (
    <>
      <div className="app-title">Belanjda Mobil </div>
      <ProductList products= { products} />
    </>
  );
}

export default App;
