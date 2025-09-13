import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* 🔹 About Section */}
        <div className="footer-about">
          <h2>Technoshoopee</h2>
          <p>
            Your trusted destination for the latest smartphones, gadgets, and accessories. 
            We provide premium devices at the best prices with excellent after-sales service.
          </p>
        </div>

        {/* 🔹 Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* 🔹 Customer Support */}
        <div className="footer-support">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* 🔹 Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 <strong>Technoshoopee</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
