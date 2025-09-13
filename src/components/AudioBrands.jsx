import "./AudioBrands.css";

function AudioBrands() {
  return (
    <section className="audio-section">
      {/* 🔹 Audio Brand Logos */}
      <h2>Shop Audio by Brands</h2>
      <div className="brands-logos">
        <div className="brand"><img src="/images/brands/boat.png" alt="boAt" /><p>boAt</p></div>
        <div className="brand"><img src="/images/brands/jbl.png" alt="JBL" /><p>JBL</p></div>
        <div className="brand"><img src="/images/brands/app.avif" alt="Apple" /><p>Apple</p></div>
        <div className="brand"><img src="/images/brands/just.png" alt="just" /><p>Just</p></div>
        <div className="brand"><img src="/images/brands/noise.png" alt="Noise" /><p>Noise</p></div>
        <div className="brand"><img src="/images/brands/sam.avif" alt="Samsung" /><p>Samsung</p></div>
        <div className="brand"><img src="/images/brands/rem.avif" alt="Realme" /><p>Realme</p></div>
        <div className="brand"><img src="/images/brands/one.avif" alt="OnePlus" /><p>OnePlus</p></div>
      </div>

      {/* 🔹 Best Selling Audio Products */}
      <div className="best-selling">
        <h2>Newly Launched and Trending</h2>
        <div className="phone-cards">
          <div className="phone-card">
            <img src="/images/audio/aaa.png" alt="Apple AirPods 4" />
            <h3>Apple AirPods 4</h3>
            <p className="price">₹10,999 <span className="old-price">₹12,900</span></p>
          </div>

          <div className="phone-card">
            <img src="/images/audio/redmi.jpeg" alt="Redmi Buds 5" />
            <h3>Redmi Buds 5</h3>
            <p className="price">₹2,999 <span className="old-price">₹3,999</span></p>
          </div>

          <div className="phone-card">
            <img src="/images/audio/boata.png" alt="boAt Airdopes 141" />
            <h3>boAt Airdopes 141</h3>
            <p className="price">₹1,749 <span className="old-price">₹4,490</span></p>
          </div>

          <div className="phone-card">
            <img src="/images/audio/ss.jpeg" alt="Sennheiser Accentum" />
            <h3>Sennheiser Accentum</h3>
            <p className="price">₹12,990</p>
          </div>

          <div className="phone-card">
            <img src="/images/audio/boata.webp" alt="Redmi Buds 6" />
            <h3>Redmi Buds 6</h3>
            <p className="price">₹2,999 <span className="old-price">₹4,999</span></p>
          </div>
        </div>
      </div>

      {/* 🔹 Hot Deals Scroll Banner */}
      <div className="scroll-banner">
        <h2>Hot Deals</h2>
        <div className="scroll-container">
          <div className="scroll-card"><img src="/images/scrollcards/a8.png" alt="Hot Deal 1" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a3.png" alt="Hot Deal 3" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a4.png" alt="Hot Deal 4" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a8.png" alt="Hot Deal 1" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a2.png" alt="Hot Deal 2" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a3.png" alt="Hot Deal 3" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a4.png" alt="Hot Deal 4" /></div>

          {/* 🔁 duplicate items for seamless loop */}
          <div className="scroll-card"><img src="/images/scrollcards/a1.png" alt="Hot Deal 1" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a6.png" alt="Hot Deal 2" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a7.png" alt="Hot Deal 1" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a8.png" alt="Hot Deal 2" /></div>
          <div className="scroll-card"><img src="/images/scrollcards/a2.png" alt="Hot Deal 2" /></div>
        </div>
      </div>
    </section>
  );
}

export default AudioBrands;
