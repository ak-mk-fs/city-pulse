import React from "react";
import { useLanguage } from "@common/hooks/useLanguage";
import { useTranslation } from "react-i18next";
interface Props {
  keyword: string;
  setKeyword: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ keyword, setKeyword, city, setCity }) => {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder={t("home.search_placeholder")}
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
