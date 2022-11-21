import api from ".";
import { SeasonModel } from "../../models/season";

export async function getShowSeasonById(
  showId: number,
  seasonId: number
): Promise<SeasonModel> {
  try {
    const response = await api.get(
      `/shows/${showId}?seasons=${seasonId}&embed=episodes`
    );
    const season: SeasonModel = response.data;

    return season;
  } catch (error) {
    throw new Error(error?.message);
  }
}
