export interface EpisodeModel {
  id: number;
  name: string;
  number: 1;
  season: number;
  rating: {
    average: 7.7;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}
