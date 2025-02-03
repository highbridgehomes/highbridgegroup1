// src/components/EnergyInventoryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EnergyInventoryList.css';

const EnergyInventoryList = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/energy-inventory')
      .then((response) => {
        setInventoryItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inventory:', error);
      });
  }, []);

  const handleEditClick = (item) => {
    setEditingItem(item._id);
    setUpdatedItem(item);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = (id) => {
    axios
      .put(`http://localhost:5000/api/energy-inventory/${id}`, updatedItem)
      .then((response) => {
        alert(response.data.message);
        setInventoryItems((prevItems) =>
          prevItems.map((item) => (item._id === id ? { ...item, ...updatedItem } : item))
        );
        setEditingItem(null);
      })
      .catch((error) => {
        alert('Error updating item');
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/energy-inventory/${id}`)
      .then((response) => {
        alert(response.data.message);
        setInventoryItems((prevItems) => prevItems.filter((item) => item._id !== id));
      })
      .catch((error) => {
        alert('Error deleting item');
        console.error(error);
      });
  };

  return (
    <div className="energy-inventory-list">
        {/* Add logo image here */}
      <img src="/assets/images/logo/highbridge2.png" alt="Highbridge Homes Logo" className="logo" />
      <h2>Energy Store Inventory List</h2>
      <table className="inventory-table">
      <thead>
  <tr>
    <th>No</th>
    <th>Particulars</th>
    <th>Product Code</th>
    <th>Quantity</th>
    <th>Unit Price</th>
    <th>Amount</th>
    <th>Quantity In</th>
    <th>Quantity Out</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {inventoryItems.map((item) => (
    <tr key={item._id}>
      {editingItem === item._id ? (
        <>
          <td><input type="number" name="no" value={updatedItem.no} onChange={handleUpdateChange} /></td>
          <td><input type="text" name="particulars" value={updatedItem.particulars} onChange={handleUpdateChange} /></td>
          <td><input type="text" name="productCode" value={updatedItem.productCode} onChange={handleUpdateChange} /></td>
          <td><input type="number" name="qty" value={updatedItem.qty} onChange={handleUpdateChange} /></td>
          <td><input type="number" name="unitPrice" value={updatedItem.unitPrice} onChange={handleUpdateChange} /></td>
          <td>{updatedItem.qty * updatedItem.unitPrice}</td>
          <td><input type="number" name="qtyIn" value={updatedItem.qtyIn} onChange={handleUpdateChange} /></td>
          <td><input type="number" name="qtyOut" value={updatedItem.qtyOut} onChange={handleUpdateChange} /></td>
          <td>
            <button onClick={() => handleUpdateSubmit(item._id)}>Save</button>
            <button onClick={() => setEditingItem(null)}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{item.no}</td>
          <td>{item.particulars}</td>
          <td>{item.productCode}</td>
          <td>{item.qty}</td>
          <td>{item.unitPrice}</td>
          <td>{item.amount}</td>
          <td>{item.qtyIn}</td>
          <td>{item.qtyOut}</td>
          <td>
            <button onClick={() => handleEditClick(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default EnergyInventoryList;