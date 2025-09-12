import "./BrandSlider.css";

function BrandSlider({ title, brands }) {
  return (
    <section className="brand-slider-section">
      <h2>{title}</h2>
      <div className="brand-slider">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.img} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandSlider;
