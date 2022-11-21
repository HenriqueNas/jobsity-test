import { RouteProp } from "@react-navigation/native";

import { HomeStackNavigation } from "../../core/routes/stacks/Home/routes";

import { SeasonModel } from "../../models/season";
import { ShowModel } from "../../models/show";

interface SeasonProps {
  show: ShowModel;
  season: SeasonModel;
}

type SeasonRouteProps = RouteProp<HomeStackNavigation, "Season">;
