import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import ProductContext from '../context/ProductContext';

const ProductList = ({ onDeleteProduct, onSaveEdit}) => {

  const {products} = useContext(ProductContext) 

  return (
  
    <div className="cards">
      {products.map((item) => (
        <ProductCard 
          key={item.id} 
          id={item.id}
          nameCar={item.nama} 
          descCar={item.deskripsi} 
          imgUrl={item.imageURL} 
          onDeleteProduct={onDeleteProduct} 
          onSaveEdit={onSaveEdit} // fix 
        />
      ))}
    </div>
  );
};

export default ProductList;
