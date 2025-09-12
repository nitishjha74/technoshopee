import { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 🔹 Later replace with API call (fetch/axios)
    setProducts([
      { id: 1, name: "iPhone 15", price: "₹79,999", image: "/images/iphone1.jpeg" },
      { id: 2, name: "Samsung Galaxy S23", price: "₹69,999", image: "/images/iphone2.jpeg" },
      { id: 3, name: "OnePlus 11", price: "₹59,999", image: "/images/iphone3.jpeg" },
      { id: 4, name: "Vivo X90", price: "₹49,999", image: "/images/iphone4.jpeg" },
      { id: 5, name: "Realme GT Neo", price: "₹39,999", image: "/images/iphone1.jpeg" },
      { id: 6, name: "Google Pixel 7", price: "₹67,999", image: "/images/iphone3.jpeg" },
    ]);
  }, []);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
