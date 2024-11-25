import { useState, useEffect } from 'react';

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(endpoint: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const BASE_URL = "https://dummy-kampus.syaifur.id"
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
    