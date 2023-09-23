import platforms from "../data/platforms.ts";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export const usePlatforms = () => ({data: platforms})

