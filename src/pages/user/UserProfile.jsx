import { useEffect, useState } from "react";
import "./UserProfile.css";  // ✅ Import CSS

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setError("No token found. Please login again.");
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/auth/profile/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setProfile(data);
        } else {
          setError(data.detail || "Failed to fetch profile");
        }
      } catch (err) {
        setError("Network error. Check your server!");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <p className="error">{error}</p>}
      {profile ? (
        <div className="profile-card">
          <p><strong>User ID:</strong> {profile.user_id}</p>
          <p><strong>Full Name:</strong> {profile.full_name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Mobile:</strong> {profile.mobile_number}</p>
        </div>
      ) : (
        !error && <p className="loading">Loading profile...</p>
      )}
    </div>
  );
}

export default UserProfile;

