import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // or ClinicHome.jsx if you renamed it
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import Login from "./pages/user/Login";
import UserProfile from "./pages/user/UserProfile"; 

function App() {
  return (
    <div>
    

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
       
      </Routes>
    </div>
  );
}

export default App;
