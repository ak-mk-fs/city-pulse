import React, { useState, useEffect, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import EventsList from "../components/EventsList";
import { getEvents } from "@common/services/api";
import type { Event } from "@common/services/api";
import debounce from "lodash/debounce";
const STORAGE_KEY_EVENTS = "events_data";

const Home: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [events, setEvents] = useState<Event[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_EVENTS);
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchEvents = async (k: string, c: string) => {
    if (!k && !c) return;
    try {
      setLoading(true);
      setError("");
      const data = await getEvents(k, c);
      localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(data));
      setEvents(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetch = useMemo(
    () => debounce((k: string, c: string) => fetchEvents(k, c), 500),
    []
  );

  useEffect(() => {
    debouncedFetch(keyword, city);
  }, [keyword, city, debouncedFetch]);

  return (
    <div className="home-wrapper">
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
