import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
    const products = [
        {
          image: 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
          name: 'Product 1',
          description: 'This is a brief description of product 1.',
          price: '$99.99'
        },
        {
          image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
          name: 'Product 2',
          description: 'This is a brief description of product 2.',
          price: '$199.99'
        },
        {
          image: 'https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
          name: 'Product 3',
          description: 'This is a brief description of product 3.',
          price: '$299.99'
        },
        {
            image: 'https://images.unsplash.com/photo-1502898746234-cdef14a6eec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
            name: 'Product 4',
            description: 'This is a brief description of product 4.',
            price: '$399.99'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
            name: 'Product 5',
            description: 'This is a brief description of product 5.',
            price: '$499.99'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            name: 'Product 6',
            description: 'This is a brief description of product 6.',
            price: '$599.99'
        },
        {
            image: 'https://images.unsplash.com/photo-1519666251146-8e16c5518edd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            name: 'Product 7',
            description: 'This is a brief description of product 7.',
            price: '$199.99'
        },
        {
            image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            name: 'Product 8',
            description: 'This is a brief description of product 8.',
            price: '$299.99'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1682470064830-4fcc743a7f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            name: 'Product 9',
            description: 'This is a brief description of product 9.',
            price: '$399.99'
        },
        {
            image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Product 10',
            description: 'This is a brief description of product 10.',
            price: '$499.99'
        }
    ];
    return (
        <div className='product-list'>
            {products.map((product, index) => (
                <ProductCard key={index} product={product}/>
            ))}
        </div>
    );
}

export default ProductList;
