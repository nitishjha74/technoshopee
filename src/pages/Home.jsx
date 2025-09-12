import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Header from "../components/Header"; 
import Deals from "../components/Deals";
import Brands from "../components/Brands";
import PopularCategories from "../components/PopularCategories";
import ExploreBrands from "../components/ExploreBrands";
import BrandSlider from "../components/BrandSlider";
import "./Home.css";

function Home() {
   const audioBrands = [
    { name: "Samsung", img: "/brands/samsung.png" },
    { name: "Realme", img: "/brands/realme.png" },
    { name: "Apple", img: "/brands/apple.png" },
    { name: "OnePlus", img: "/brands/oneplus.png" },
    { name: "boAt", img: "/brands/boat.png" },
    { name: "Noise", img: "/brands/noise.png" },
    { name: "Promate", img: "/brands/promate.png" },
    { name: "Mivi", img: "/brands/mivi.png" },
    { name: "Just Corseca", img: "/brands/corseca.png" },
    { name: "JBL", img: "/brands/jbl.png" },
  ];

  const watchBrands = [
    { name: "Samsung", img: "/brands/samsung.png" },
    { name: "Apple", img: "/brands/apple.png" },
    { name: "Pebble", img: "/brands/pebble.png" },
    { name: "Conekt", img: "/brands/conekt.png" },
    { name: "boAt", img: "/brands/boat.png" },
    { name: "Inbase", img: "/brands/inbase.png" },
    { name: "Noise", img: "/brands/noise.png" },
    { name: "Maxima", img: "/brands/maxima.png" },
    { name: "OnePlus", img: "/brands/oneplus.png" },
  ];
  return (
    <div>
      <Header />
      <div className="home-page">

        {/* 🔹 Banner Section */}
        <Banner />

        {/* 🔹 Deals Section */}
        <Deals />
        
        
        {/* 🔹 Brands Section */}
        <Brands />
        {/* 🔹 New Popular Categories Section */}
        <PopularCategories />
        {/* 🔹 Brands Section */}
        <ExploreBrands />
        {/* 🔹 Audio Brands */}
      <BrandSlider title="Explore Top Audio Brands" brands={audioBrands} />

      {/* 🔹 Smart Watch Brands */}
      <BrandSlider title="Explore Top Smart Watches" brands={watchBrands} />

        {/* 🔹 Featured Products */}
        <section className="products-section">
          <h2>Best Sellers</h2>
          <Products />
        </section>

       

        {/* 🔹 Services Section */}
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">📦 Free Delivery</div>
            <div className="service-card">💳 Easy EMI</div>
            <div className="service-card">🔄 7-Day Replacement</div>
            <div className="service-card">🛠 Warranty Support</div>
          </div>
        </section>

        {/* 🔹 Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
