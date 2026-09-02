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

export async function getCampers(
  params?: FetchCampersParams,
): Promise<CampersResponse> {
  const response = await apiNext.get<CampersResponse>("/campers", { params });
  return response.data;
}
