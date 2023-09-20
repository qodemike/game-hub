import { GameQueries } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface GameObj {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

export const useGames = (
    gameQueries: GameQueries    
) =>
    useData<GameObj>(
        "/games",
        {
            params: {
                genres: gameQueries.genre?.id,
                platforms: gameQueries.platform?.id,
                ordering: gameQueries.sortOrder
            },
        },
        [gameQueries.genre?.id, gameQueries.platform?.id,gameQueries.sortOrder ]
    );
