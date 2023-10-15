import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import Games  from "../entities/Games";

const apiClient = new APIClient<Games>("/games");

export const useGames = () => {
  const gameQueries = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQueries],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQueries.genre?.id,
          parent_platforms: gameQueries.platform?.id,
          ordering: gameQueries.sortOrder,
          search: gameQueries.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
