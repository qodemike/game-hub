import { useQuery } from "@tanstack/react-query";
import { GameQueries } from "../App";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import apiClient from "../services/api-client";

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}


export const useGames = ( gameQueries : GameQueries) => {
    return useQuery<FetchResponse<Games>,Error>({
        queryKey: [ "games", gameQueries],
        queryFn: () => {
            return apiClient
                .get<FetchResponse<Games>>("/games", {
                    params: {
                        genres: gameQueries.genre?.id,
                        parent_platforms: gameQueries.platform?.id,
                        ordering: gameQueries.sortOrder,
                        search: gameQueries.searchText,
                    },
                })
                .then((res) => {
                    return res.data;
                });
        },
    });
};

