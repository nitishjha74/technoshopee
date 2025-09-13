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
import AudioBrands from "../components/AudioBrands";
import Watch from "../components/Watch";

function Home() {
  
  

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
        {/* <ExploreBrands /> */}
        {/* 🔹 Audio Brands */}
         <AudioBrands/>

      {/* 🔹 Smart Watch Brands */}
         <Watch />

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
