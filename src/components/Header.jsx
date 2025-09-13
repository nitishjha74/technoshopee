import { Link } from "react-router-dom";
import "./Header.css";
import { FaHeart, FaShoppingCart, FaMicrophone, FaUserCircle, FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Logo & Store Info */}
      <div className="header-left">
        <img src="/images/technoshopee.png" alt="Logo" className="logo" />
        <div className="store-info">
          <span className="store-hours">72 Hours</span>
          <span className="store-pincode">847301</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="header-search">
        <input type="text" placeholder="Search for smartphones, laptops etc" />
        <FaMicrophone className="mic-icon" />
      </div>

      {/* Right: Icons */}
      <div className="header-right">
        <FaHeart className="icon" />
        <FaShoppingCart className="icon" />
        <Link to="/login" className="login-link">
          <FaUserCircle className="icon" /> Login/Signup
        </Link>
        <FaBars className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
