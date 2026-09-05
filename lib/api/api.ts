import axios from "axios";
import { Filters } from "../store/useStore";

const apiNext = axios.create({
  baseURL: "https://campers-api.goit.study",
});

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

export async function getCampers(
  params?: FetchCampersParams,
): Promise<CampersResponse> {
  const response = await apiNext.get<CampersResponse>("/campers", { params });
  return response.data;
}

export async function getCamperById(camperId: string): Promise<Camper> {
  const response = await apiNext.get(`/campers/${camperId}`);
  return response.data;
}
export async function getReviews(
  camperId: string,
): Promise<GetCampersReviews[]> {
  const response = await apiNext.get<GetCampersReviews[]>(
    `/campers/${camperId}/reviews`,
  );
  return response.data;
}

export async function bookCamper(
  camperId: string,
  data: BookingRequest,
): Promise<BookingRequest> {
  const response = await apiNext.post(
    `/campers/${camperId}/booking-requests`,
    data,
  );
  return response.data;
}
