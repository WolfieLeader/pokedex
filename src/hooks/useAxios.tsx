import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2";

const useAxios = (url: string, config?: AxiosRequestConfig<unknown>) => {
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url, config);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useAxios;
