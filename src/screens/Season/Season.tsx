import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { SeasonModel } from "../../models/season";

import { getShowSeasonById } from "../../services/api/season";

import { EpisodesCarousel } from "./components/EpisodesCarousel";
import { GoBack } from "./components/GoBack";
import { SeasonCard } from "./components/SeasonCard";

import { EpisodeModel } from "../../models/episode";
import { SeasonContainer } from "./styles";
import { SeasonRouteProps } from "./types";

export function Season() {
  const {
    params: { show, season },
  } = useRoute<SeasonRouteProps>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [episodes, setEpisodes] = useState<EpisodeModel[]>([]);

  useEffect(() => {
    (async () => {
      const seasonEpisodes = await getShowSeasonById(show.id, season.id);

      setEpisodes(
        seasonEpisodes._embedded.episodes.filter(
          (episode) => episode.season === season.number
        )
      );
      setIsLoading(false);
    })();
  }, []);

  return (
    <SeasonContainer>
      {isLoading ? null : (
        <>
          <GoBack />

          <SeasonCard show={show} season={season} />

          <EpisodesCarousel episodesModelList={episodes} />
        </>
      )}
    </SeasonContainer>
  );
}
