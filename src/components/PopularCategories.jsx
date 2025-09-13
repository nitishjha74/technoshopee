import "./PopularCategories.css";

function PopularCategories() {
  const categories = [
    { name: "Truly Wireless Buds", img: "/images/PopularCategories/air.webp" },
    { name: "Dashcams", img: "/images/PopularCategories/dh.avif" },
    { name: "Vacuum cleaners", img: "/images/PopularCategories/vacum.avif" },
    { name: "Trimmers", img: "/images/PopularCategories/trim.webp" },
    { name: "Neckbands", img: "/images/PopularCategories/neckband.webp" },
    { name: "Power Banks", img: "/images/PopularCategories/pb.webp" },
    { name: "Home Audio Systems", img: "/images/PopularCategories/home.webp" },
    { name: "Massagers", img: "/images/PopularCategories/ms.avif" },
  ];

  return (
    <section className="popular-section">
      <h2>Popular Categories</h2>
      <div className="popular-slider">
        {categories.map((cat, index) => (
          <div key={index} className="popular-card">
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
