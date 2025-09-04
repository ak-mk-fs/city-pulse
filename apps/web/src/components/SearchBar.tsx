import React from "react";
import { useLanguage } from "@common/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { cities } from "@common/data";
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
    <div style={{ margin: "1rem 0" , display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder={t("home.search_placeholder")}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="search-input"
      />
       <select
          className="search-input"
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">-- Select City --</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
    </div>
  );
};

export default SearchBar;
