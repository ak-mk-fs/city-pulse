import React from "react";
import { useLanguage } from "@common/hooks/useLanguage";

interface Props {
  keyword: string;
  setKeyword: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ keyword, setKeyword, city, setCity }) => {
  const { lang, toggleLang } = useLanguage();

  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <button onClick={toggleLang}>
        {lang === "en" ? "Switch to Arabic" : "Switch to English"}
      </button>
      <input
        type="text"
        placeholder={lang === "en" ? "Search keyword" : "بحث بالكلمة"}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        type="text"
        placeholder={lang === "en" ? "City" : "المدينة"}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
