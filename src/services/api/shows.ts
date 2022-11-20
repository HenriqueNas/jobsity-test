import api from ".";
import { ShowModel } from "../../models/show";

export async function getShows(): Promise<ShowModel[]> {
  try {
    const response = await api.get("/shows");
    const shows: ShowModel[] = response.data;

    return shows;
  } catch (error) {
    throw new Error(error?.message);
  }
}

export async function getShowById(id: number): Promise<ShowModel> {
  try {
    const response = await api.get(`/shows/${id}`);
    const show: ShowModel = response.data;

    return show;
  } catch (error) {
    throw new Error(error?.message);
  }
}

export async function searchShowByTherm(therm: string): Promise<ShowModel[]> {
  try {
    const response = await api.get(`/shows?q=${therm}`);
    const show: ShowModel[] = response.data;

    return show;
  } catch (error) {
    throw new Error(error?.message);
  }
}
