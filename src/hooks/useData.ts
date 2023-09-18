import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { GameObj } from "./useGames";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  games: GameObj[];
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// requestConfig?: means it is optional, so we don't have to always pass it.
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>> (endpoint, { ...requestConfig, signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;
