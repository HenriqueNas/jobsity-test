import { SeasonModel } from "./season";

export interface ShowModel {
  id: number;
  name: string;
  language: string;
  genres: string[];
  premiered: string;
  summary: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  _embedded: {
    seasons: SeasonModel[];
  };
}

export interface ShowSearchResultModel {
  score: number;
  show: ShowModel;
}
