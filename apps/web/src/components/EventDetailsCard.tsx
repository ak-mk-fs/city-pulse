import React, { useState } from "react";
import type { Event } from "@common/services/api";
import EventMap from "./EventMapView";
import { useTranslation } from "react-i18next";
import { useFavourites } from "@common/hooks/useFavourites";
import dayjs from "dayjs";

interface Props {
  event: Event;
}

const EventDetailCard: React.FC<Props> = ({ event }) => {
  const { t } = useTranslation();
  const { toggleFavourite, isFavourite } = useFavourites();
  const venue = event?._embedded?.venues?.[0];
  const attraction =  event?._embedded?.attractions?.[0];
  const image = event.images?.find(img => img?.ratio === "16_9");
  const seatmap = event.seatmap?.staticUrl;

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      {/* Title & Date */}
      <h2 style={{ marginBottom: "0.5rem" }}>{event.name}</h2>
      <p>
        {dayjs(event.dates.start.localDate).format("dddd, MMM D, YYYY")}
        {event.dates.start.localTime && ` at ${event.dates.start.localTime}`}
      </p>

      {/* Event Image */}
      {image && (
        <img
          src={image.url}
          alt={event.name}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
        />
      )}

      {/* Venue Info */}
      {venue && (
        <div style={{ marginBottom: "1rem" }}>
          <h3>Venue</h3>
          <p>
            {venue.name}, {venue.city?.name}, {venue.state?.name},{" "}
            {venue.country?.name}
          </p>
          <p>{venue.address?.line1}</p>
        </div>
      )}

      {/* Seatmap */}
      {seatmap && (
        <div style={{ margin: "1rem 0" }}>
          <h4>Seat Map</h4>
          <img src={seatmap} alt="Seat map" style={{ width: "100%", borderRadius: "6px" }} />
        </div>
      )}

      {/* Classification */}
      {event.classifications?.[0] && (
        <p>
          <strong>Category:</strong>{" "}
          {event.classifications[0].segment.name} →{" "}
          {event.classifications[0].genre?.name} →{" "}
          {event.classifications[0].subGenre?.name}
        </p>
      )}

      {/* Attraction / Performer */}
      {attraction && (
        <div style={{ margin: "1rem 0" }}>
          <h3>Performer</h3>
          <p>{attraction.name}</p>
          {attraction.images?.[0] && (
            <img
              src={attraction.images[0].url}
              alt={attraction.name}
              style={{ width: "200px", borderRadius: "6px" }}
            />
          )}
          <div style={{ marginTop: "0.5rem" }}>
            {attraction.externalLinks?.homepage?.[0]?.url && (
              <a href={attraction.externalLinks.homepage[0].url} target="_blank" rel="noreferrer">
                Official Site
              </a>
            )}
          </div>
        </div>
      )}

      {/* Map */}
      {venue?.location?.latitude && venue?.location?.longitude && (
        <div style={{ margin: "1rem 0" }}>
          <EventMap
            lat={Number(venue.location.latitude)}
            lng={Number(venue.location.longitude)}
          />
        </div>
      )}

      {/* Actions */}
      <div style={{ marginTop: "1rem" }}>
        <button className={`${isFavourite(event.id) ? 'remove-fav-btn' : 'add-fav-btn'}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavourite(event);
        }}
      >
        {isFavourite(event.id) ? t("favourites.unfavourite") : t("favourites.favourite")}
      </button>
        {"  "}
        <a
          href={event.url}
          target="_blank"
          rel="noreferrer"
          style={{
            marginLeft: "1rem",
            padding: "0.5rem 1rem",
            background: "#007bff",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Buy Tickets
        </a>
      </div>

      {/* Extra Info */}
      {event.info && <p style={{ marginTop: "1rem" }}>{event.info}</p>}
    </div>
  );
};

export default EventDetailCard;
