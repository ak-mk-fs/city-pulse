import React, { useState } from "react";
import type { Event } from "@common/services/api";
import { useLanguage } from "@common/hooks/useLanguage";

interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const { lang } = useLanguage();
  const [favourite, setFavourite] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "0.5rem", borderRadius: "8px" }}>
      <h3>{event.name}</h3>
      <p>
        {lang === "en" ? "Date" : "التاريخ"}: {event.dates.start.localDate}{" "}
        {event.dates.start.localTime && `at ${event.dates.start.localTime}`}
      </p>
      {event._embedded?.venues[0] && (
        <p>
          {lang === "en" ? "Venue" : "المكان"}: {event._embedded?.venues[0]?.name},{" "}
          {event._embedded.venues[0]?.city?.name}
        </p>
      )}
      {event.images?.[0] && (
        <img src={event.images[0].url} alt={event.name} style={{ width: "100%", borderRadius: "4px" }} />
      )}
      <button onClick={() => setFavourite(!favourite)}>
        {favourite ? (lang === "en" ? "Unfavourite" : "إزالة من المفضلة") : (lang === "en" ? "Favourite" : "أضف للمفضلة")}
      </button>
    </div>
  );
};

export default EventCard;
