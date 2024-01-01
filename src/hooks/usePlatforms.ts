import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms')

export const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getAll(),
    });
};

