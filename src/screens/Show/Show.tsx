import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { SeasonModel } from "../../models/season";
import { ShowModel } from "../../models/show";

import { getShowById } from "../../services/api/shows";

import { Title } from "../components/Text";
import { GoBack } from "./components/GoBack";
import { SeasonsCarousel } from "./components/SeasonsCarousel";
import { ShowCard } from "./components/ShowCard";

import { Plot, PlotWrapper, ShowContainer } from "./styles";
import { ShowRouteProps } from "./types";

export function Show() {
  const {
    params: { id },
  } = useRoute<ShowRouteProps>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [show, setShow] = useState<ShowModel>({} as ShowModel);
  const [seasons, setSeasons] = useState<SeasonModel[]>([]);

  useEffect(() => {
    (async () => {
      const showInfo = await getShowById(id);

      setShow(showInfo);
      setSeasons(showInfo._embedded.seasons);
      setIsLoading(false);
    })();
  }, []);

  const summaryWithoutTags = show?.summary?.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <ShowContainer>
      {isLoading ? null : (
        <>
          <GoBack />

          <ShowCard show={show} />

          <SeasonsCarousel show={show} seasonModelList={seasons} />

          <PlotWrapper>
            <Title>Plot</Title>
            <Plot>{summaryWithoutTags}</Plot>
          </PlotWrapper>
        </>
      )}
    </ShowContainer>
  );
}
