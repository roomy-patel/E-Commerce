import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import './ProductPage.css';

const ProductPage = () => {
  const [products, setProducts] = useLocalStorage('products', []);
  const [product, setProduct] = useState({
    image: '',
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProducts = [...products, product];
    setProducts(newProducts);
    setProduct({
      image: '',
      name: '',
      description: '',
      price: ''
    });
  };

  const handleDelete = (index) => { 
    const newProducts = products.filter((_, i) => i !== index); 
    setProducts(newProducts); 
  };
  
  return (
    <div>
      <h2>Add/Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" name="image" value={product.image} onChange={handleChange} />
        </label>
        <label>
          Product Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={product.description} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </label>
        <button type="submit">Save Product</button>
      </form>

      <h2>Product List</h2>
      <table> 
        <thead> 
          <tr> 
            <th>Image</th> 
            <th>Name</th> 
            <th>Description</th> 
            <th>Price</th> 
            <th>Actions</th>
          </tr>
        </thead> 
        <tbody> 
          {products.map((prod, index) => ( 
            <tr key={index}> 
              <td><img src={prod.image} alt={prod.name} width="100"/></td> 
              <td>{prod.name}</td> 
              <td>{prod.description}</td> 
              <td>${prod.price}</td> 
              <td> <button onClick={() => handleDelete(index)}>Delete</button> </td>
            </tr> 
          ))} 
        </tbody> 
      </table>
    </div>
  );
};

export default ProductPage;
