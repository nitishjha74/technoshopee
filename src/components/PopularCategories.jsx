import "./PopularCategories.css";

function PopularCategories() {
  const categories = [
    { name: "Truly Wireless Buds", img: "/categories/buds.png" },
    { name: "Dashcams", img: "/categories/dashcam.png" },
    { name: "Vacuum cleaners", img: "/categories/vacuum.png" },
    { name: "Trimmers", img: "/categories/trimmer.png" },
    { name: "Neckbands", img: "/categories/neckband.png" },
    { name: "Power Banks", img: "/categories/powerbank.png" },
    { name: "Home Audio Systems", img: "/categories/audio.png" },
    { name: "Massagers", img: "/categories/massager.png" },
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
