import axios from "axios";
import {
  BookingRequest,
  Camper,
  CamperFilters,
  CampersResponse,
  FetchCampersParams,
  GetCampersReviews,
} from "@/types/types";

const apiNext = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export async function getCampers(
  params?: FetchCampersParams,
): Promise<CampersResponse> {
  const response = await apiNext.get<CampersResponse>("/campers", { params });
  return response.data;
}
export async function getFilters(): Promise<CamperFilters> {
  const { data } = await apiNext.get<CamperFilters>("/campers/filters");
  return data;
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
