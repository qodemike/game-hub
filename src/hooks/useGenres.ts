import useData from "./useData";
import { GameObj } from "./useGames";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  games: GameObj[];
}

export const useGenres = () => useData<Genre>('/genres') 

