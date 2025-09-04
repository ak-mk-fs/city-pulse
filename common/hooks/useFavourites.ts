import { useState, useEffect } from "react";
import type { Event } from "../services/api";

const FAV_KEY = "favourites";

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<Event[]>([]);

  // Load favourites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAV_KEY);
    if (stored) setFavourites(JSON.parse(stored));
  }, []);

  // Add event
  const addFavourite = (event: Event) => {
    if (!favourites.find(fav => fav.id === event.id)) {
      const updated = [...favourites, event];
      setFavourites(updated);
      localStorage.setItem(FAV_KEY, JSON.stringify(updated));
    }
  };

  // Remove event
  const removeFavourite = (eventId: string) => {
    const updated = favourites.filter(fav => fav.id !== eventId);
    setFavourites(updated);
    localStorage.setItem(FAV_KEY, JSON.stringify(updated));
  };

  // Toggle event
  const toggleFavourite = (event: Event) => {
    favourites.find(fav => fav.id === event.id)
      ? removeFavourite(event.id)
      : addFavourite(event);
  };

  // Check if favourite
  const isFavourite = (eventId: string) =>
    favourites.some(fav => fav.id === eventId);

  return { favourites, addFavourite, removeFavourite, toggleFavourite, isFavourite };
};
