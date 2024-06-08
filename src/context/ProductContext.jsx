import { createContext, useState } from 'react';
import { createProductAPI, deleteProductAPI, editProductAPI, fetchProductAPI } from '../api/ProductAPI';

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  //? Nampilin product
  const fetchProduct = async () => {
    const response = await fetchProductAPI();
    setProducts(response.data);
  }; 

  //? Create Product
  const onCreateProduct = async (product) => {
    const response = await createProductAPI(product);

    setProducts([...products, response.data]);
  };

  //? Delete Product
  const onDeleteProduct = async (id) => {
    await deleteProductAPI(id);

    const updatedProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProduct);
  };

  //? Edit prodct
  const onSaveEdit = async (id, updatedData) => {
    const response = await editProductAPI(id, updatedData);

    const updatedProduct = products.map((prod) => {
      if (prod.id === id) {
        return {
          ...prod,
          ...response.data,
        };
      }

      return prod;
    });

    setProducts(updatedProduct);
  };

  const valueToShare = {
    products,
    onCreateProduct,
    onDeleteProduct,
    onSaveEdit,
    fetchProduct,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
        {children}
    </ProductContext.Provider>
  )
}


export {Provider}
export default ProductContext
