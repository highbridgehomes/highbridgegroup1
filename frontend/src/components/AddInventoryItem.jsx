import React, { useState } from "react";

const AddInventoryItem = ({ handleAdd }) => {
  const [formData, setFormData] = useState({
    particulars: "",
    productCode: "",
    qty: 0,
    unitPrice: 0,
    qtyIn: 0,
    qtyOut: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(formData);
    setFormData({
      particulars: "",
      productCode: "",
      qty: 0,
      unitPrice: 0,
      qtyIn: 0,
      qtyOut: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="particulars"
        placeholder="Particulars"
        value={formData.particulars}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="productCode"
        placeholder="Product Code"
        value={formData.productCode}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="qty"
        placeholder="Quantity"
        value={formData.qty}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="unitPrice"
        placeholder="Unit Price"
        value={formData.unitPrice}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="qtyIn"
        placeholder="Quantity In"
        value={formData.qtyIn}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="qtyOut"
        placeholder="Quantity Out"
        value={formData.qtyOut}
        onChange={handleInputChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddInventoryItem;