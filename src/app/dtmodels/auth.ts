import { LocationPayload } from 'src/app/dtmodels/location-payload';

export interface Auth {
  id: string;
  username: string;
  role: string;
  locations: LocationPayload;
  token: string;
}
