import { useEffect } from 'react';
import './components/ProductCard.css';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';


function App() {


  useEffect(() => {
    fetchProduct();
  }, []);

  

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList products={products} onDeleteProduct={onDeleteProduct} onSaveEdit={onSaveEdit} />
    </>
  );
}

export default App;
