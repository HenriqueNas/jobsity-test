import api from ".";
import { ShowModel, ShowSearchResultModel } from "../../models/show";

export async function getShows(): Promise<ShowModel[]> {
  try {
    const response = await api.get("/shows");
    const shows: ShowModel[] = response.data;

    return shows;
  } catch (error) {
    throw new Error(error?.message);
  }
}

export async function getShowById(
  id: number,
  embed = "seasons"
): Promise<ShowModel> {
  try {
    const response = await api.get(`/shows/${id}?embed=${embed}`);
    const show: ShowModel = response.data;

    return show;
  } catch (error) {
    throw new Error(error?.message);
  }
}

export async function searchShowByTherm(therm: string): Promise<ShowModel[]> {
  try {
    const response = await api.get(`/search/shows?q=${therm}`);
    const searchResult: ShowSearchResultModel[] = response.data;

    return searchResult.map((result) => result.show);
  } catch (error) {
    throw new Error(error?.message);
  }
}
