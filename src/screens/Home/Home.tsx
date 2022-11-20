import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { ShowModel } from "../../models/show";
import { getShows } from "../../services/api/shows";

import { Search } from "./components/Search";
import { Filters } from "./components/Filters";
import { ShowCarousel } from "./components/ShowCarousel";

import { BoldTitle, Header, HomeContainer, Subtitle, Title } from "./styles";
import { useAuth } from "../../services/context/auth";

export function Home() {
  const { user } = useAuth();

  const [shows, setShows] = useState<ShowModel[]>([]);
  const [featuredShows, setFeaturedShows] = useState<ShowModel[]>([]);
  const [mostWatchedShows, setMostWatchedShows] = useState<ShowModel[]>([]);
  const [moreShows, setMoreShows] = useState<ShowModel[]>([]);

  function chunkShowList(shows: ShowModel[], chunkSize: number) {
    var results: ShowModel[][] = [];

    while (shows.length) {
      results.push(shows.splice(0, chunkSize));
    }

    return results;
  }

  useEffect(() => {
    (async () => {
      const showsList = await getShows();
      setShows(showsList.slice(15, 45));

      const chunkedShows = chunkShowList(showsList, 5);

      setFeaturedShows(chunkedShows[0]);
      setMostWatchedShows(chunkedShows[1]);
      setMoreShows(chunkedShows[2]);
    })();
  }, []);

  return (
    <HomeContainer>
      <SafeAreaView />
      <Header>
        <Title>
          <BoldTitle>Hey</BoldTitle> {!!user ? user.name : "You"}!
        </Title>
        <Subtitle>Let's watch something?</Subtitle>
      </Header>

      <Search />
      <Filters />

      <ShowCarousel title="Featured Series" showModelList={featuredShows} />
      <ShowCarousel title="Most Watched" showModelList={mostWatchedShows} />
      <ShowCarousel title="More Shows" showModelList={moreShows} />
      <ShowCarousel showModelList={shows} />
    </HomeContainer>
  );
}
