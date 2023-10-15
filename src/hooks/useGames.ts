import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

export interface Games {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new APIClient<Games>("/games");

export const useGames = () => {
  const gameQueries = useGameQueryStore(s => s.gameQuery);
  
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
  });
};

