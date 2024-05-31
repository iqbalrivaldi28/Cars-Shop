import React from 'react';
import ProductCard from './ProductCard';

const ProductList = (props) => {
  const {products} = props;

  return (
    <div className="cards">
      {products.map((item) => (
        <ProductCard key={item.id} nameCar={item.nama} descCar={item.deskripsi} imgUrl={item.imageURL} />
      ))}
    </div>
  );
};

export default ProductList;
