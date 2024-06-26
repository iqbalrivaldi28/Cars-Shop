import React from 'react';
import ProductCard from './ProductCard';

const ProductList = (props) => {
  const { products, onDeleteProduct, onSaveEdit } = props;

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
