import { useState, useEffect } from 'react';

/**
 * Custom Hook: useFetch
 * Handles API requests, loading state, and error handling for any provided URL.
 * 
 * @param {string} url - The REST API endpoint URL
 * @returns {Object} { data, loading, error, refetch }
 */
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  // Expose refetch function so components can trigger manually
  return { data, loading, error, refetch: fetchData };
}