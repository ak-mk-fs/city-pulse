import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import type { EventMapProps } from "../types";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const EventMap: React.FC<EventMapProps> = ({ lat, lng }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <p>Map cannot be loaded</p>;
  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat, lng }}
      zoom={14}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
};

export default EventMap;
