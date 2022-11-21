import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { ShowModel } from "../../models/show";
import { getShows } from "../../services/api/shows";

import { Filters } from "./components/Filters";
import { Search } from "./components/Search";
import { ShowCarousel } from "./components/ShowCarousel";

import { useAuth } from "../../contexts/auth";
import { Header, HomeContainer, Loading, Heading } from "./styles";
import { BoldTitle, Subtitle } from "../components/Text";
import { chunkShowList } from "../../utils/show";

export function Home() {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shows, setShows] = useState<ShowModel[]>([]);
  const [featuredShows, setFeaturedShows] = useState<ShowModel[]>([]);
  const [mostWatchedShows, setMostWatchedShows] = useState<ShowModel[]>([]);
  const [moreShows, setMoreShows] = useState<ShowModel[]>([]);

  const [searchedShows, setSearchedShows] = useState<ShowModel[]>([]);

  useEffect(() => {
    (async () => {
      const showsList = await getShows();
      setShows(showsList.slice(15, 45));

      const chunkedShows = chunkShowList(showsList, 5);

      setFeaturedShows(chunkedShows[0]);
      setMostWatchedShows(chunkedShows[1]);
      setMoreShows(chunkedShows[2]);
      setIsLoading(false);
    })();
  }, []);

  return (
    <HomeContainer>
      <SafeAreaView />
      <Header>
        <Heading>
          <BoldTitle>Hey</BoldTitle> {!!user ? user.name : "You"}!
        </Heading>
        <Subtitle>Let's watch something?</Subtitle>
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Search setSearchShow={setSearchedShows} />
          <Filters />

          {searchedShows.length > 0 ? (
            <ShowCarousel title="Your Search" showModelList={searchedShows} />
          ) : (
            <>
              <ShowCarousel
                title="Featured Series"
                showModelList={featuredShows}
              />
              <ShowCarousel
                title="Most Watched"
                showModelList={mostWatchedShows}
              />
              <ShowCarousel title="More Shows" showModelList={moreShows} />
              <ShowCarousel showModelList={shows} />
            </>
          )}
        </>
      )}
    </HomeContainer>
  );
}
