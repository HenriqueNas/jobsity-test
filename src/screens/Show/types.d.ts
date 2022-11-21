import { HomeStackNavigation } from "../../core/routes/stacks/Home/routes";
import { RouteProp } from "@react-navigation/native";

interface ShowProps {
  id: number;
}

type ShowRouteProps = RouteProp<HomeStackNavigation, "Show">;
