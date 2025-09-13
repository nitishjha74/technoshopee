import "./Watch.css";

function Watch() {
  const brands = [
    { name: "Samsung", img: "/images/brands/sam.avif" },
    { name: "Apple", img: "/images/brands/app.avif" },
    { name: "Pebble", img: "/images/brands/peble.avif" },
    { name: "Conekt", img: "/images/brands/coc.png" },
    { name: "boAt", img: "/images/brands/boat.png" },
    { name: "Inbase", img: "/images/brands/inb.png" },
    { name: "Noise", img: "/images/brands/noise.png" },
    { name: "Maxima", img: "/images/brands/max.png" },
    { name: "OnePlus", img: "/images/brands/one.avif" },
  ];

  const watches = [
    { img: "/images/mobile/apple.png", title: "Apple iPhone 16 pro 128GB", price: "₹103900.00", oldPrice: "₹119900.00" },
    { img: "/images/mobile/app.png", title: "Apple iPhone 15 128GB Pink", price: "₹52999.00", oldPrice: "₹69900.00" },
    { img: "/images/mobile/oppo.png", title: "Oppo K12X 5G 6GB 128GB", price: "₹11999.00", oldPrice: "₹12999.00" },
    { img: "/images/mobile/redmi.png", title: "Redmi Note 14 5G 6GB 128GB", price: "₹16499.00", oldPrice: "₹3,999" },
    { img: "/images/mobile/opn.png", title: "Oppo Reno 13 5G 8GB 128GB", price: "₹32999.00", oldPrice: "₹1999.00" },
    { img: "/images/mobile/oppor.png", title: "Oppo Reno 13 Pro 5G 12GB", price: "₹45999.00", oldPrice: "₹54999.00" },
  ];

  const scrollImages = [
    "/images/scrollcards/a9.png", "/images/scrollcards/a10.png",
    "/images/scrollcards/a12.png", "/images/scrollcards/a3.png",
    "/images/scrollcards/a9.png", "/images/scrollcards/a10.png",
    "/images/scrollcards/a12.png", "/images/scrollcards/a3.png",
  ];

  return (
    <section className="watch-section">
      <h2>Shop Smart Watches by Brands</h2>
      <div className="watch-logos">
        {brands.map((brand, idx) => (
          <div key={idx} className="brand">
            <img src={brand.img} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>

      <div className="best-selling">
        <h2>Top-Rated for Performance</h2>
        <div className="watch-cards">
          {watches.map((watch, idx) => (
            <div key={idx} className="watch-card">
              <img src={watch.img} alt={watch.title} />
              <h3>{watch.title}</h3>
              <p className="price">{watch.price} <span className="old-price">{watch.oldPrice}</span></p>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-banner">
        <h2>Hot Deals</h2>
        <div className="scroll-container">
          {scrollImages.map((img, idx) => (
            <div key={idx} className="scroll-card">
              <img src={img} alt="Smart Watch" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Watch;
