import genres from "../data/genres";

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

export const useGenres = () => ({ data: genres, isLoading: false })
// export const useGenres = () => useData<Genre>("/genres")

