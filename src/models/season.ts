import { EpisodeModel } from "./episode";

export interface SeasonModel {
  id: number;
  number: number;
  premiereDate: string;
  image: {
    medium: string;
    original: string;
  };
  _embedded: {
    episodes: EpisodeModel[];
  };
}
