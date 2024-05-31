import React, { useState } from 'react';
import './ProductCard.css';
import Swal from 'sweetalert2';

const ProductCreate = (props) => {
  const { onCreateProduct } = props;

  const initialState = {
    nama: '',
    deskripsi: '',
    imageURL: '',
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;

  const handleShow = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);

    //? Sweet Alert
    Swal.fire({
      title: 'Success!',
      text: 'Product add successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="product-create">
      <div className="toggle-add">
        <button className="edit-input-submit add-toggle" onClick={handleShow}>
          {showForm ? 'Close Form' : 'Add Product'}
        </button>
      </div>

      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-add-title ">Add Product</div>
          <div className="form-group">
            <input type="text" className="add-input-text" name="nama" value={nama} onChange={handleChange} placeholder="Nama product" />
          </div>
          <div className="form-group">
            <input type="text" className="add-input-text" name="deskripsi" value={deskripsi} onChange={handleChange} placeholder="Deskripsi Product" />
          </div>
          <div className="form-group">
            <input type="text" className="add-input-text" name="imageURL" value={imageURL} onChange={handleChange} placeholder="Image Product" />
          </div>
          <input type="submit" className="edit-input-submit add" />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
