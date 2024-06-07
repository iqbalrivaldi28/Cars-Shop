import { useEffect, useState } from 'react';
import './components/ProductCard.css';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';
import axios from 'axios';
import { BASE_URL } from './constant/BASE_URL';

function App() {
  const [products, setProducts] = useState([]);

  //? Nampilin product
  const fetchProduct = async () => {
    const response = await axios.get(BASE_URL);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  //? Create Product
  const onCreateProduct = async (product) => {
    const response = await axios.post(BASE_URL, product);

    setProducts([...products, response.data]);
  };

  //? Delete Product
  const onDeleteProduct = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);

    const updatedProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProduct);
  };

  //? Edit prodct
  const onSaveEdit = async (id, updatedData) => {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData);

    const updatedProduct = products.map((prod) => {
      if (prod.id === id) {
        return {
          ...prod,
          ...response.data,
        };
      }

      return prod
    });

    setProducts(updatedProduct)
  };

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList products={products} onDeleteProduct={onDeleteProduct} onSaveEdit={onSaveEdit} />
    </>
  );
}

export default App;
