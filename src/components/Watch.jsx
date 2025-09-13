import "./Watch.css";

function Watch() {
  return (
    <section className="watch-section">
      {/* 🔹 Watch Brands */}
      <h2>Shop Smart Watches by Brands</h2>
      <div className="watch-logos">
        <div className="brand"><img src="/images/brands/sam.avif" alt="Samsung" /><p>Samsung</p></div>
        <div className="brand"><img src="/images/brands/app.avif" alt="Apple" /><p>Apple</p></div>
        <div className="brand"><img src="/images/brands/peble.avif" alt="Pebble" /><p>Pebble</p></div>
        <div className="brand"><img src="/images/brands/coc.png" alt="Conekt" /><p>Conekt</p></div>
        <div className="brand"><img src="/images/brands/boat.png" alt="boAt" /><p>boAt</p></div>
        <div className="brand"><img src="/images/brands/inb.png" alt="Inbase" /><p>Inbase</p></div>
        <div className="brand"><img src="/images/brands/noise.png" alt="Noise" /><p>Noise</p></div>
        <div className="brand"><img src="/images/brands/max.png" alt="Maxima" /><p>Maxima</p></div>
        <div className="brand"><img src="/images/brands/one.avif" alt="OnePlus" /><p>OnePlus</p></div>
      </div>

      {/* 🔹 Best Selling Smart Watches */}
      <div className="best-selling">
        <h2>Top-Rated for Performance</h2>
        <div className="watch-cards">
          <div className="watch-card">
            <img src="/images/mobile/apple.png" alt="Samsung Watch" />
            <h3>Apple iPhone 16 pro 128GB </h3>
            <p className="price">₹103900.00 <span className="old-price">₹119900.00</span></p>
          </div>

          <div className="watch-card">
            <img src="/images/mobile/app.png" alt="Samsung Watch" />
            <h3>Apple iPhone 15 128GB Pink</h3>
            <p className="price">₹52999.00 <span className="old-price">₹69900.00</span></p>
          </div>

          <div className="watch-card">
            <img src="/images/mobile/oppo.png" alt="Apple Watch" />
            <h3>Oppo K12X 5G 6GB 128GB </h3>
            <p className="price">₹11999.00 <span className="old-price">₹12999.00</span></p>
          </div>

          <div className="watch-card">
            <img src="/images/mobile/redmi.png" alt="Noise" />
            <h3>Redmi Note 14 5G 6GB 128GB</h3>
            <p className="price">₹16499.00 <span className="old-price">₹3,999</span></p>
          </div>

          <div className="watch-card">
            <img src="/images/mobile/opn.png" alt="Pebble" />
            <h3>Oppo Reno 13 5G 8GB 128GB</h3>
            <p className="price">₹32999.004 <span className="old-price">₹1999.00</span></p>
          </div>

          <div className="watch-card">
            <img src="/images/mobile/oppor.png" alt="OnePlus Watch" />
            <h3>Oppo Reno 13 Pro 5G 12GB</h3>
            <p className="price">₹45999.00 <span className="old-price">₹54999.00</span></p>
          </div>
        </div>
      </div>

      {/* 🔹 Hot Deals Scrollable Cards */}
      <div className="scroll-banner">
        <h2>Hot Deals</h2>
        <div className="scroll-container">
          <div className="scroll-card"><img src="/images/scrollcards/a9.png" alt="Smart Watch" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a10.png" alt="Apple Watch" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a12.png" alt="Noise Watch" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a3.png" alt="Pebble Watch" /></div>

          {/* 🔁 Duplicates for infinite scroll */}
          <div className="scroll-card"><img src="/images/scrollcards/a9.png" alt="Smart Watch" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a10.png" alt="Apple Watch" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a12.png" alt="Noise Watch" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a3.png" alt="Pebble Watch" /></div>
        </div>
      </div>
    </section>
  );
}

export default Watch;
