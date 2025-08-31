import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@common/hooks/useLanguage";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { lang, toggleLang } = useLanguage();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#f0f0f0"
    }}>
      <nav>
        <Link to="/home" style={{ marginRight: 15 }}>Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div>
        <button onClick={toggleLang} style={{ marginRight: 15 }}>
          {lang === "en" ? "AR" : "EN"}
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
