import React from "react";
import EventCard from "./EventCard";
import type { Event } from "@common/services/api";

interface Props {
  events?: Event[];
  loading: boolean;
  error?: Error;
}

const EventsList: React.FC<Props> = ({ events, loading, error }) => {
  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error?.message || "Something went wrong"}</p>;
  if (!events || events.length === 0) return <p>No events found.</p>;

  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))" }}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
