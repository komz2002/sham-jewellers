import React from 'react';

const Product = ({ item }) => {
    return (
        <div>
            <h3>{item.producttitle}</h3>
            <p>{item.productdescription}</p>
            <img src={item.productImage} alt={item.producttitle} style={{ width: '100%', height: 'auto' }} />
            <p>Price: ${item.productprice}</p>
        </div>
    );
};

export default Product;
