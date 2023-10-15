import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface GameDetail {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
}

const apiClient = new APIClient<GameDetail>('games/');


const useGameDetail = (slug: string) => {
    return useQuery({
        queryKey: ['gameDetail', slug],
        queryFn: () => {
           return apiClient.get(slug); 
        }

    })
}

export default useGameDetail;