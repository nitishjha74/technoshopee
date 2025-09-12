import React from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>🏠 Dashboard</li>
          <li>👥 Users</li>
          <li>📦 Appointments</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <header className="admin-header">
          <h1>Welcome, Admin</h1>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="admin-cards">
          <div className="card">
            <h3>Total Patients</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Appointments Today</h3>
            <p>35</p>
          </div>
          <div className="card">
            <h3>Doctors</h3>
            <p>12</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
