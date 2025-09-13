import "./Brands.css";

function Brands() {
  return (
    <section className="brands-section">
      {/* 🔹 Brand Logos */}
      <h2>Shop Phones by Brands</h2>
      <div className="brands-logos">
        <div className="brand"><img src="/images/brands/sam.avif" alt="Samsung" /><p>Samsung</p></div>
        <div className="brand"><img src="/images/brands/op.avif" alt="Oppo" /><p>Oppo</p></div>
        <div className="brand"><img src="/images/brands/itel.avif" alt="Itel" /><p>Itel</p></div>
        <div className="brand"><img src="/images/brands/nokia.avif" alt="Nokia" /><p>Nokia</p></div>
        <div className="brand"><img src="/images/brands/rem.avif" alt="Realme" /><p>Realme</p></div>
        <div className="brand"><img src="/images/brands/app.avif" alt="Apple" /><p>Apple</p></div>
        <div className="brand"><img src="/images/brands/xio.avif" alt="Xiaomi" /><p>Xiaomi</p></div>
        <div className="brand"><img src="/images/brands/one.avif" alt="OnePlus" /><p>OnePlus</p></div>
        <div className="brand"><img src="/images/brands/techno.avif" alt="Tecno" /><p>Tecno</p></div>
        <div className="brand"><img src="/images/brands/vivo.avif" alt="Vivo" /><p>Vivo</p></div>
        <div className="brand"><img src="/images/brands/gp.avif" alt="Google Pixel" /><p>Google Pixel</p></div>
      </div>

      {/* 🔹 Best Selling Phones */}
      <div className="best-selling">
        <h2>Best Selling Phones</h2>
        <div className="phone-cards">
          <div className="phone-card">
            <img src="/images/selling/smg.webp" alt="Samsung" />
            <h3>Samsung Galaxy A17 5G</h3>
            <p className="price">₹19,499 <span className="old-price">₹23,499</span></p>
          </div>
          <div className="phone-card">
            <img src="/images/selling/gp.avif" alt="Pixel" />
            <h3>Google Pixel 10</h3>
            <p className="price">₹62,122 <span className="old-price">₹70,999</span></p>
          </div>
          <div className="phone-card">
            <img src="/images/selling/redmin.webp" alt="Redmi" />
            <h3>Redmi 15 5G 6GB 128GB</h3>
            <p className="price">₹15,999 <span className="old-price">₹18,999</span></p>
          </div>
          <div className="phone-card">
            <img src="/images/selling/vivo.webp" alt="Vivo" />
            <h3>Vivo V60 5G</h3>
            <p className="price">₹33,499 <span className="old-price">₹41,999</span></p>
          </div>
          <div className="phone-card">
            <img src="/images/selling/poco.webp" alt="Poco" />
            <h3>POCO C71</h3>
            <p className="price">₹6,499 <span className="old-price">₹8,999</span></p>
          </div>
        </div>
      </div>

      {/* 🔹 Small Scrollable Banner Cards */}
      <div className="scroll-banner">
        <h2>Hot Deals</h2>
        <div className="scroll-container">
          <div className="scroll-card"><img src="/images/scrollcards/redmi.webp" alt="Redmi 15" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/giftcard.webp" alt="Gift Card" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/opop.webp" alt="Oppo A5" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/watch.webp" alt="Watch" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/redmi.webp" alt="Redmi 15" /></div>
          <div className="scroll-card"><img src="/images/banner/samsung.jpg" alt="Samsung" /></div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
