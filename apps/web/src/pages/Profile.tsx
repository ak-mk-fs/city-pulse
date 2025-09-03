import React from "react";
import { useNavigate } from "react-router-dom";
import type { UserData } from "../types";

const Profile:React.FC = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  // Retrieve the current user from login mock (optional)
  const storedUsers = localStorage.getItem("mockUsers");
  const users = storedUsers ? JSON.parse(storedUsers) : [];
  const user = users.find((u: UserData) => u.email === email); // token exists, take first logged-in user for mock

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user info available.</p>
      )}
      <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
