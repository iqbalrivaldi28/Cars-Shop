import { useContext, useState } from 'react';
import './ProductCard.css';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import ProductEdit from './ProductEdit';
import ProductContext from '../context/ProductContext';

const ProductCard = (Props) => {
  const { id, imgUrl, nameCar, descCar, onSaveEdit } = Props;

  const {onDeleteProduct} = useContext(ProductContext)

  const [jmlProduct, setJmlProduct] = useState(0);
  const [showEdit, setShowEdit] = useState(false);

  const kurangProduct = () => {
    setJmlProduct(jmlProduct - 1);
  };

  const tambahProduct = () => {
    setJmlProduct(jmlProduct + 1);
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteProduct(id);
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      }
    });
  };

  const handleShow = () => {
    setShowEdit(!showEdit);
  };

  const handleSaveEdit = (id, updatedData) => {
    onSaveEdit(id, updatedData);
    setShowEdit(false)
  }

  return (
    <div className="card">
      {showEdit ? (
        <ProductEdit id ={id} nameCar={nameCar} imgUrl={imgUrl} descCar={descCar} onCancelEdit={handleShow} onSaveEdit={handleSaveEdit} />
      ) : (
        <>
          <div className="edit-delete">
            <FaEdit onClick={handleShow} className="icon-delete" />
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
        </>
      )}
    </div>
  );
};

export default ProductCard;
