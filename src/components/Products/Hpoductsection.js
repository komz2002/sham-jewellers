import React, { useState } from 'react';

const product = [
  {
    productid: "1",
    productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/2-500x500.jpg",
    productprice: "78",
    productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
    reviews: [] 
  },
  {
    productid: "2",
    productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/1-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection",
     reviews: [] 
  },
  {
    productid: "3",
    productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/3-500x500.jpg",  
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection",
     reviews: [] 
  },
  {
    productid: "4",
    productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/1-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection",
     reviews: [] 
  },
  {
    productid: "5",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-07-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection",
     reviews: [] 
  },
  {
    productid: "6",
    productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/4-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "7",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-08-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "8",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-07-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "9",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-13-300x300.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "10",
    productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/2-1-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "11",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-11-300x300.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "12",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/3-5-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "13",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/1-2-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "14",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/2-2-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "15",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/2-3-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "16",
    productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/4-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "17",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/1-1-500x500.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
  {
    productid: "18",
    productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/6.jpg", 
    productprice: "78",
     productdetail:"Splendid Kundan jhumkas meet the might of  Meenakari, manifesting a medley of two timeless traditions beautifully in this pair from the Riwaaz collection.",
     reviews: [] 
  },
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedProduct ? (
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              margin: '50px auto', 
              padding: '20px', 
              width: '80vw', 
              boxSizing: 'border-box',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <img 
              src={selectedProduct.productImage} 
              alt={selectedProduct.producttitle} 
              style={{ width: '30vw', height: 'auto', marginRight: '20px' }} 
            />
            <div style={{ flex: 1 }}>
              <h3>{selectedProduct.producttitle}</h3>
              <h4>Price</h4> ${selectedProduct.productprice}
              <h4>productdetail</h4><p>{selectedProduct.productdetail}</p>
              
              <div style={{ textAlign: 'left', marginTop: '20px', width: '100%' }}>
                <h4>Reviews:</h4>
                {selectedProduct.reviews && selectedProduct.reviews.length > 0 ? (
                  <ul>
                    {selectedProduct.reviews.map((review, index) => (
                      <li key={index}>{review}</li>
                    ))}
                  </ul>
                ) : (
                  <p>"Beautiful design!", "Amazing quality!", "Love these earrings!"</p>
                )}
              </div>
              
              <button 
                onClick={() => setSelectedProduct(null)}
                style={{
                  padding: '10px 20px',
                  marginTop: '20px',
                  marginleft: '20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                 
                }}
              >
                Back to List
              </button>
            </div>
          </div>
        ) : (
          product.map((item) => (
            <div 
              key={item.productid} 
              style={{ 
                margin: '10px', 
                padding: '10px', 
                width: '30%', 
                boxSizing: 'border-box', 
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3>{item.producttitle}</h3>
              <img 
                src={item.productImage} 
                alt={item.producttitle} 
                style={{ width: '100%', height: 'auto', cursor: 'pointer' }} 
                onClick={() => handleImageClick(item)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
