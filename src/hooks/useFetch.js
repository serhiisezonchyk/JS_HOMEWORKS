import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async (abortController) => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url, {
          signal: abortController.signal,
        });
        setIsError(false);
        setError(null);
        setData(data);
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(abortController);
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, isLoading, error, isError };
};
