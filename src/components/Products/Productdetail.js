import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
    const location = useLocation();
    const product = location.state;

    return (
        <div style={{ padding: '20px' }}>
            <h2>{product.producttitle}</h2>
            <img src={product.productImage} alt={product.producttitle} style={{ width: '300px', height: 'auto' }} />
            <p>{product.productdescription}</p>
            <p>Price: ${product.productprice}</p>
        </div>
    );
};

export default ProductDetail;
