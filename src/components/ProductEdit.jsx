import React, { useState } from 'react';

const ProductEdit = (props) => {
  const { id, imgUrl, nameCar, descCar, onCancelEdit, onSaveEdit } = props;

  const initialState = {
    nama: nameCar,
    deskripsi: descCar,
    imageUrl: imgUrl,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveEdit(id, formData);
  }

  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input onChange={handleChange} type="text" className="edit-input-text" placeholder="Nama Product" name='nama' value={formData.nama} />
        </div>
        <div className="form-group">
          <input onChange={handleChange} type="text" className="edit-input-text " placeholder="Deskripsi Product" name='deskripsi' value={formData.deskripsi}/>
        </div>
        <div className="form-group">
          <input onChange={handleChange} type="text" className="edit-input-text " placeholder="Image Url Product" name='imageUrl' value={formData.imageUrl} />
        </div>
        <input onChange={handleChange} type="submit" className="edit-input-submit save" value="Save" />
        <button className="edit-input-submit cancel" onClick={onCancelEdit}>Cancel</button>
      </form>
    </div>
  );
};

export default ProductEdit;
