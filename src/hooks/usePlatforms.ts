import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

const apiClient= new APIClient<Platform>("platforms")

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: platforms.length, results: platforms}
    });
};

// export const usePlatforms = () => { return {data: platforms} }
