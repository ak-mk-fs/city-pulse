import React from "react";
import { useNavigate } from "react-router-dom";
import type { UserData } from "../types";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  // Retrieve the current user from login mock (optional)
  const storedUsers = localStorage.getItem("mockUsers");
  const users = storedUsers ? JSON.parse(storedUsers) : [];
  const user = users.find((u: UserData) => u.email === email);

  const handleLogout = () => {
    ["token", "userEmail", "favourites", "events_data"].forEach(key =>
    localStorage.removeItem(key)
  );
  navigate("/login", { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem" }}>Profile</h2>
        {user ? (
          <div>
            <p>
              <strong>First Name:</strong> {user.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {user.lastName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ) : (
          <p>No user info available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
