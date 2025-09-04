import React, { useState } from "react";
import type { Event } from "@common/services/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFavourites } from "@common/hooks/useFavourites";
interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toggleFavourite, isFavourite } = useFavourites();

  const goToDetails = () => {
    navigate(`/events/${event?.id}`);
  };
  return (
    <div
      onClick={goToDetails}
      style={{
        border: "1px solid #ccc",
        padding: "0.5rem",
        borderRadius: "8px",
        cursor: "pointer",
        maxWidth: "340px",
      }}
    >
      <div style={{ minHeight: "180px" }}>
      <h3>{event.name}</h3>
      <p>
        {t("event_details.date")}: {event.dates.start.localDate}{" "}
        {event.dates.start.localTime && `at ${event.dates.start.localTime}`}
      </p>
      {event?._embedded?.venues?.[0] && (
        <p>
          {t("event_details.venue")}: {event._embedded.venues[0].name},{" "}
          {event._embedded.venues[0].city?.name}
        </p>
      )}
      </div>
      {event.images?.[0] && (
        <div
          style={{
            width: "100%",
            height: "180px", // fixed height
            overflow: "hidden",
            borderRadius: "6px",
            marginBottom: "0.5rem",
          }}
        >
          <img
            src={event.images[0].url}
            alt={event.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // 🔑 keeps proportions
            }}
          />
        </div>
      )}
      <button className={`${isFavourite(event.id) ? 'remove-fav-btn' : 'add-fav-btn'}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavourite(event);
        }}
      >
        {isFavourite(event.id) ? t("favourites.unfavourite") : t("favourites.favourite")}
      </button>
    </div>
  );
};

export default EventCard;
