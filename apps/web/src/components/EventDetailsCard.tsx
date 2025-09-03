import React, { useState } from "react";
import type { Event } from "@common/services/api";
import EventMap from "./EventMapView";
import { useTranslation } from "react-i18next";

interface Props {
  event: Event;
}

const EventDetailCard: React.FC<Props> = ({ event }) => {
  const [favourite, setFavourite] = useState(false);
  const { t } = useTranslation();
  
  const venue = event?._embedded?.venues && event?._embedded?.venues[0];
  const image = event.images?.[0];

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{event.name}</h2>
      {image && <img src={image.url} alt={event.name} style={{ width: "100%", borderRadius: "6px" }} />}
      <p>
        {t("event_details.date")}: {event.dates.start.localDate}{" "}
        {event.dates.start.localTime && `at ${event.dates.start.localTime}`}
      </p>
      {venue && (
        <p>
          {t("event_details.venue")}: {venue.name}, {venue.city.name}, {venue.state?.name}
        </p>
      )}
      {venue?.location?.latitude && venue?.location?.longitude && (
      <EventMap lat={Number(venue?.location?.latitude)} lng={Number(venue?.location?.longitude)} />
    )}
      <button onClick={() => setFavourite(!favourite)}>
        {favourite ? t("favourites.unfavourite") : t("favourites.favourite")}
      </button>
      <p>{event.info}</p>
    </div>
  );
};

export default EventDetailCard;
