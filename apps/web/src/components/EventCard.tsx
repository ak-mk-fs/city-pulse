import React, { useState } from "react";
import type { Event } from "@common/services/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const [favourite, setFavourite] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const goToDetails = () => {
    navigate(`/events/${event?.id}`);
  };
  return (
    <div onClick={goToDetails} style={{ border: "1px solid #ccc", padding: "0.5rem", borderRadius: "8px" }}>
      <h3>{event.name}</h3>
      <p>
        {t("event_details.date")}: {event.dates.start.localDate}{" "}
        {event.dates.start.localTime && `at ${event.dates.start.localTime}`}
      </p>
      {event?._embedded?.venues && event?._embedded?.venues[0] && (
        <p>
          {t("event_details.venue")}: {event._embedded?.venues[0]?.name},{" "}
          {event._embedded.venues[0]?.city?.name}
        </p>
      )}
      {event.images?.[0] && (
        <img src={event.images[0].url} alt={event.name} style={{ width: "100%", borderRadius: "4px" }} />
      )}
      <button onClick={() => setFavourite(!favourite)}>
        {favourite ? t("favourites.unfavourite") : t("favourites.favourite")}
      </button>
    </div>
  );
};

export default EventCard;
