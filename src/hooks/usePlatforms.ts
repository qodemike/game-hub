// import platforms from "../data/platforms.ts";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => {
            return apiClient
                .get<FetchResponse<Platform>>("/platforms")
                .then((res) => {
                    return res.data;
                });
        },
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: platforms.length, results: platforms}
    });
};

// export const usePlatforms = () => { return {data: platforms} }
