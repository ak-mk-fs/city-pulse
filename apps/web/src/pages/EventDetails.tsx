import React from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "@common/services/api";
import type { Event } from "@common/services/api";
import EventDetailCard from "../components/EventDetailsCard";
import { useApi } from "@common/hooks/useApi";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

    const { data: event, loading, error } = useApi<Event>(() => getEventById(id), [id]);

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>{error}</p>;
  if (!event) return <p>No event found.</p>;

  return <EventDetailCard event={event} />;
};

export default EventDetails;
