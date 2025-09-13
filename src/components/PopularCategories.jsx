import "./PopularCategories.css";

function PopularCategories() {
  const categories = [
    { name: "Truly Wireless Buds", img: "/public/images/PopularCategories/air.webp" },
    { name: "Dashcams", img: "/public/images/PopularCategories/dh.avif" },
    { name: "Vacuum cleaners", img: "/public/images/PopularCategories/vacum.avif" },
    { name: "Trimmers", img: "/public/images/PopularCategories/trim.webp" },
    { name: "Neckbands", img: "/public/images/PopularCategories/neckband.webp" },
    { name: "Power Banks", img: "/public/images/PopularCategories/pb.webp" },
    { name: "Home Audio Systems", img: "/public/images/PopularCategories/home.webp" },
    { name: "Massagers", img: "/public/images/PopularCategories/ms.avif" },
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
