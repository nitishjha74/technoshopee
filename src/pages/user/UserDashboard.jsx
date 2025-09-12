import "./UserDashboard.css";

function UserDashboard() {
  return (
    <div className="user-dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">🏥 Our Clinic</div>
        <nav>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>

      {/* Banner */}
      <section className="banner">
        <h1>Welcome to Our Clinic</h1>
        <p>Your health is our priority</p>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We are committed to providing the best healthcare services for you and
          your family.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service">General Checkups</div>
          <div className="service">Dental Care</div>
          <div className="service">Cardiology</div>
          <div className="service">Pediatrics</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Our Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UserDashboard;
