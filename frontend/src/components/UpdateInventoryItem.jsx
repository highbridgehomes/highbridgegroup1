import React, { useState } from "react";

const UpdateInventoryItem = ({ item, handleUpdate }) => {
  const [formData, setFormData] = useState(item);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="particulars"
        value={formData.particulars}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="productCode"
        value={formData.productCode}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="qty"
        value={formData.qty}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="unitPrice"
        value={formData.unitPrice}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="qtyIn"
        value={formData.qtyIn}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="qtyOut"
        value={formData.qtyOut}
        onChange={handleInputChange}
      />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateInventoryItem;