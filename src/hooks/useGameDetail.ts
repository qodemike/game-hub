import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Games from "../entities/Games";

const apiClient = new APIClient<Games>('games/');

const useGameDetail = (slug: string) => {
    return useQuery({
        queryKey: ['gameDetail', slug],
        queryFn: () => {
           return apiClient.get(slug); 
        }
    })
    
}

export default useGameDetail;