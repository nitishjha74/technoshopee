import "./Deals.css";

function Deals() {
  return (
    <section className="deals-section">
      <h2>🔥 Hurry Up! Get Up to 40% Off</h2>
      <div className="deals-grid">
        {/* Example deal cards – replace with real product data later */}
        <div className="deal-card">
          <span className="discount-tag">43% off</span>
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h3>Google Pixel 8A 8GB 128GB</h3>
          <p className="price">₹28,454 <span className="old-price">₹49,999</span></p>
          <button className="add-btn">+ Add to Cart</button>
        </div>

        <div className="deal-card">
          <span className="discount-tag">34% off</span>
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h3>Samsung A35 5G 8GB 256GB</h3>
          <p className="price">₹22,279 <span className="old-price">₹33,999</span></p>
          <button className="add-btn">+ Add to Cart</button>
        </div>

        <div className="deal-card">
          <span className="discount-tag">22% off</span>
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h3>Google Pixel 9a 8GB 256GB</h3>
          <p className="price">₹39,061 <span className="old-price">₹49,999</span></p>
          <button className="add-btn">+ Add to Cart</button>
        </div>
         <div className="deal-card">
          <span className="discount-tag">22% off</span>
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h3>Google Pixel 9a 8GB 256GB</h3>
          <p className="price">₹39,061 <span className="old-price">₹49,999</span></p>
          <button className="add-btn">+ Add to Cart</button>
        </div>
         <div className="deal-card">
          <span className="discount-tag">22% off</span>
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h3>Google Pixel 9a 8GB 256GB</h3>
          <p className="price">₹39,061 <span className="old-price">₹49,999</span></p>
          <button className="add-btn">+ Add to Cart</button>
        </div>
        
      </div>
    </section>
  );
}

export default Deals; // ✅ this fixes the error
