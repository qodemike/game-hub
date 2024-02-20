import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Games from "../entities/Games";

const apiClient = new APIClient<Games>("/games");

const useSearchBar = (searchText: string) => {

  return useQuery({
    queryKey: ["suggestions", searchText],
    queryFn: () => apiClient.getAll({ params: { search: searchText, page_size: 7 } }),
    cacheTime: 0,
    enabled: !!searchText
  });
};

export default useSearchBar;
