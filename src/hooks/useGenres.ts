import { useQuery } from "@tanstack/react-query";
import APIClient  from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres")

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: {
    id: number;
    slug: string;
    name: string;
    added: number;
  }[];
}

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    // Setting the intialData Inorder for seamless transitions using the static data we had
    initialData: { count: genres.length, results: genres },
  });
};
