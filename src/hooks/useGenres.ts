import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),

    // Setting the intialData Inorder for seamless transitions using the static data we had
    // initialData: { count: genres.length, results: genres },
  });
};
