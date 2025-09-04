import React, {useEffect, useState} from "react";
import { useFavourites } from "@common/hooks/useFavourites";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import type { Event } from "@common/services/api";
import EventsList from "../components/EventsList";

const Favourites: React.FC = () => {
  const { favourites } = useFavourites();

  // const [favorites, setFavorites] = useState<Event[]>([]);

  // useEffect(() => {
  //   const stored = localStorage.getItem("favorites");
  //   if (stored) {
  //     setFavorites(JSON.parse(stored));
  //   }
  // }, [favourites.length]);

  return (
    <div style={{ margin: "2em auto" }} className="home-wrapper">
      {favourites.length === 0 && <p>No favourites yet</p>}
      <EventsList events={favourites} loading={false} />
    </div>
  );
};

export default Favourites;
