import React from 'react';
import { Products } from '../data/Product';
import ProductCard from './PraktikCard';

const ProductList = () => {
  return (
    <div className="cards">
      {Products.map((item) => (
        <ProductCard key={item.id} nameCar={item.nama} descCar={item.deskripsi} imgUrl={item.imageURL} />
      ))}
    </div>
  );
};

export default ProductList;
