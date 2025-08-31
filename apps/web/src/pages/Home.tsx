import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import EventsList from "../components/EventsList";
import { useApi } from "@common/hooks/useApi";
import { getEvents } from "@common/services/api";
import type { Event } from "@common/services/api";


const Home: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  const { data: events, loading, error } = useApi<Event[]>(
    () => getEvents(keyword, city),
    [keyword, city]
  );

  return (
    <div style={{ padding: "1rem" }}>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        city={city}
        setCity={setCity}
      />
      <EventsList events={events} loading={loading} error={error} />
    </div>
  );
};

export default Home;
