import { ShowModel } from "../models/show";

export function chunkShowList(shows: ShowModel[], chunkSize: number) {
  var results: ShowModel[][] = [];

  while (shows.length) {
    results.push(shows.splice(0, chunkSize));
  }

  return results;
}
