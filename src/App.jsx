import { useState } from 'react';
import './components/ProductCard.css';
import ProductList from './components/ProductList';
import { Products } from './data/Product';
import ProductCreate from './components/ProductCreate';

function App() {
  const [products, setProducts] = useState(Products);

  const onCreateProduct = (product) => {
    setProducts([...products, { id: Math.round(Math.random() * 7777), ...product }]);
  };

  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((prod) => {
      return prod.id != id;
    });
    setProducts(updatedProduct);
  };

  const onSaveEdit = (id, updatedData) => {
    const updatedProducts = products.map((prod) => {
      prod.id === id ? { ...prod, ...updatedData } : prod;
    });
    setProducts(updatedProducts)
  };

  return (
    <>
      <div className="app-title">Belanjda Mobil </div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList products={products} onDeleteProduct={onDeleteProduct} onSaveEdit={onSaveEdit} />
    </>
  );
}

export default App;
