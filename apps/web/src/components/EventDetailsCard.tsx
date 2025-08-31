import React, { useState } from "react";
import type { Event } from "@common/services/api";
import { useLanguage } from "@common/hooks/useLanguage";

interface Props {
  event: Event;
}

const EventDetailCard: React.FC<Props> = ({ event }) => {
  const { lang } = useLanguage();
  const [favourite, setFavourite] = useState(false);

  const venue = event._embedded?.venues[0];
  const image = event.images?.[0];

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{event.name}</h2>
      {image && <img src={image.url} alt={event.name} style={{ width: "100%", borderRadius: "6px" }} />}
      <p>
        {lang === "en" ? "Date" : "التاريخ"}: {event.dates.start.localDate}{" "}
        {event.dates.start.localTime && `at ${event.dates.start.localTime}`}
      </p>
      {venue && (
        <p>
          {lang === "en" ? "Venue" : "المكان"}: {venue.name}, {venue.city.name}, {venue.state?.name}
        </p>
      )}
      {venue?.location && (
        <iframe
          title="venue-map"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "6px", margin: "0.5rem 0" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${venue.location.latitude},${venue.location.longitude}`}
        />
      )}
      <button onClick={() => setFavourite(!favourite)}>
        {favourite ? (lang === "en" ? "Unfavourite" : "إزالة من المفضلة") : (lang === "en" ? "Favourite" : "أضف للمفضلة")}
      </button>
      <p>{event.info}</p>
    </div>
  );
};

export default EventDetailCard;
