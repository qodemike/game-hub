import { useState, useEffect } from "react";
import apiClient from "./api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:  {platform: Platform}[]; // Design smell, overly nested object
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const  useGames =() => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
        // console.log( response.data.results[0].parent_platforms[2].platform.slug)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
}

export default useGames;
