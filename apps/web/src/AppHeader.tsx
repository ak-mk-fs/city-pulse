import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@common/hooks/useLanguage";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { lang, toggleLang } = useLanguage();
  const { t } = useTranslation();
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
      backgroundColor: "#f0f0f0",
      width: "100%",
    }}>
      <nav>
        <Link to="/home" style={{ marginRight: 15 }}>{t("home.title")}</Link>
        <Link to="/profile">{t("profile.title")}</Link>
      </nav>
      <div>
        <button onClick={toggleLang} style={{ marginRight: 15 }}>
         {lang === "en" ? t("language_toggle.switch_to_ar") : t("language_toggle.switch_to_en")}
        </button>
        <button onClick={handleLogout}>{t("logout")}</button>
      </div>
    </header>
  );
};

export default Header;
