import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQueries } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Games>("/games");

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export const useGames = (gameQueries: GameQueries) => {
  return useInfiniteQuery<FetchResponse<Games>,Error>({
    queryKey: ["games", gameQueries],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
        params: {
            genres: gameQueries.genre?.id,
            parent_platforms: gameQueries.platform?.id,
            ordering: gameQueries.sortOrder,
            search: gameQueries.searchText,
            page: pageParam
          }
    }),
  getNextPageParam: (lastPage, allPages) =>  {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime: 24 * 60 * 60 * 1000 // 24hrs
  });
};

