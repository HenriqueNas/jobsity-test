import { SeasonProps } from "../../../../screens/Season";
import { ShowProps } from "../../../../screens/Show";

export type HomeStackNavigation = {
  Home: undefined;
  Show: ShowProps;
  Season: SeasonProps;
};
