import React, {useEffect, useState} from "react";
import { useFavourites } from "@common/hooks/useFavourites";
import EventsList from "../components/EventsList";

const Favourites: React.FC = () => {
  const { favourites } = useFavourites();

  return (
    <div style={{ margin: "2em auto" }} className="home-wrapper">
      <EventsList events={favourites} loading={false} emptyMsg={'No favourites yet'}/>
    </div>
  );
};

export default Favourites;
