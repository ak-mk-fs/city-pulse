interface Credentials {
  email: string;
  password: string;
}

export interface UserData extends Credentials {
  firstName?: string;
  lastName?: string;
}

export type LoginData = Credentials;
export interface EventMapProps {
  lat: number;
  lng: number;
}
export interface Event {
  id: string;
  name: string;
  info?: string;
  dates: {
    start: { localDate: string; localTime?: string };
  };
  images?: { url: string }[];
  _embedded?: {
    venues?: {
      name: string;
      city: { name: string };
      state?: { name: string };
      location?: { latitude: string; longitude: string };
    }[];
  };
}