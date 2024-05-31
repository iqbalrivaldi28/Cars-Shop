import { useState } from 'react';
import './ProductCard.css';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

const ProductCard = (Props) => {
  const { id, imgUrl, nameCar, descCar, onDeleteProduct } = Props;
  const [jmlProduct, setJmlProduct] = useState(0);

  const kurangProduct = () => {
    setJmlProduct(jmlProduct - 1);
  };

  const tambahProduct = () => {
    setJmlProduct(jmlProduct + 1);
  };

  const handleDelete = () => {
    onDeleteProduct(id)
  }

  return (
    <div className="card">
      <div className="edit-delete">
        <FaEdit className="icon-delete" />
        <RiDeleteBin7Line onClick={handleDelete} className="icon-edit" />
      </div>

      <img style={{ width: '100%', height: '200px', borderRadius: '10px 10px 0px 0px' }} src={imgUrl} alt={nameCar} />
      <div className="container">
        <h4>
          <b>{nameCar}</b>
        </h4>
        <p>{descCar}</p>
      </div>
      <div className={`card-keranjang ${jmlProduct > 0 ? 'jumlah-product' : 'show-keranjang'}`}>
        {jmlProduct > 0 ? (
          <>
            <button onClick={kurangProduct} className="button">
              -
            </button>
            <div>{jmlProduct}</div>
            <button onClick={tambahProduct} className="button">
              +
            </button>
          </>
        ) : (
          <div className="keranjang" onClick={tambahProduct}>
            + Keranjang
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
