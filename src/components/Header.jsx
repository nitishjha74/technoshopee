import { Link } from "react-router-dom";
import "./Header.css";
import { FaHeart, FaShoppingCart, FaMicrophone, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      {/* Left: Logo & Store Info */}
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="store-info">
          <span className="store-hours">72 Hours</span>
          <span className="store-pincode">847301</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Search for smartphones, laptops etc"
        />
        <FaMicrophone className="mic-icon" />
      </div>

      {/* Right: Icons */}
      <div className="header-right">
        <FaHeart className="icon" />
        <FaShoppingCart className="icon" />
        <Link to="/login" className="login-link">
          <FaUserCircle className="icon" /> Login/Signup
        </Link>
      </div>
    </header>
  );
}

export default Header;
