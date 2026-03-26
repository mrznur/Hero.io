import { useState, useEffect } from 'react';

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        setLoading(true);
        const res = await fetch('/apps.json');
        if (!res.ok) throw new Error('Failed to fetch apps');
        const data = await res.json();
        setApps(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  return { apps, loading, error };
};

export default useApps;
