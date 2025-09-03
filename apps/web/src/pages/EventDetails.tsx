import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById } from "@common/services/api";
import type { Event } from "@common/services/api";
import EventDetailCard from "../components/EventDetailsCard";
import { useApi } from "@common/hooks/useApi";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: event,
    loading,
    error,
  } = useApi<Event>(() => getEventById(id), [id]);

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>{error}</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <div>
      <button
        onClick={() => navigate("/events")}
        style={{ marginBottom: "1rem" }}
      >
        ← Back to Events
      </button>
      <EventDetailCard event={event} />
    </div>
  );
};

export default EventDetails;
