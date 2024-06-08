import { useContext, useEffect } from 'react';
import './components/ProductCard.css';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';
import ProductContext from './context/ProductContext';


function App() {

  const {fetchProduct} = useContext(ProductContext)

  useEffect(() => {
    fetchProduct();
  }, []);

  

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate  />
      <ProductList  />
    </>
  );
}

export default App;
