import { Filters } from "@/lib/store/useStore";

export interface CamperFilters {
  forms: string[];
  transmissions: string[];
  engines: string[];
}
export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  description: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
  gallery: GalleryImage[];
}

export interface GalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}
export interface FetchCampersParams extends Filters {
  page?: number;
  perPage?: number;
}
export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface GetCampersReviews {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface BookingRequest {
  name: string;
  email: string;
}
