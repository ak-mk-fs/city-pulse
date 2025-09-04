import axiosInstance from "../axios";

export interface Event {
  id: string;
  name: string;
  info?: string;
  dates: {
    start: { localDate: string; localTime?: string };
  };
  images?: { url: string, ratio: string }[];
  seatmap?: { staticUrl: string };
  classifications?: {
    segment: { name: string };
    genre?: { name: string };
    subGenre?: { name: string };
  }[];
  url?: string;
  _embedded?: {
    venues?: {
      name: string;
      city: { name: string };
      state?: { name: string };
      location?: { latitude: string; longitude: string };
      country?: { name: string };
      address?: { line1: string };
    }[];
    attractions?: {
      name: string;
      url?: string;
      images?: { url: string }[]; 
      externalLinks?: {[key: string]: { url: string }[] };
    }[];
    
  };
}

export const getEvents = async (keyword: string = "", city?: string): Promise<Event[]> => {
  const params: any = { keyword };

  if (city) params.city = city;

  const response = await axiosInstance.get("/events.json", { params });
  return response.data._embedded?.events || [];
};

export const getEventById = async (id?: string): Promise<Event> => {
  if (!id) throw new Error("No event ID provided");

  const res = await axiosInstance.get(`/events/${id}`);
  return res.data;
};
