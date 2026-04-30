import { useState, useEffect } from "react";
import { client } from "../lib/sanityClient";

/**
 * Custom hook for fetching Sanity data with real-time updates.
 * @param {string} query - The GROQ query to execute.
 * @param {object} params - Optional parameters for the query.
 * @returns {object} { data, loading, error }
 */
export function useSanityData(query, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscription;

    const fetchData = async (isInitial = false) => {
      if (isInitial) setLoading(true);
      try {
        // We use { useCdn: false } for the fetch to ensure we get the latest data
        // especially when called after a mutation notification.
        const result = await client.fetch(query, params, { useCdn: false });
        setData(result);
      } catch (err) {
        console.error("Sanity Fetch Error:", err);
        setError(err);
      } finally {
        if (isInitial) setLoading(false);
      }
    };

    // 1. Initial fetch
    fetchData(true);

    // 2. Set up real-time listener
    // The listener triggers whenever documents matching the query are mutated.
    subscription = client.listen(query, params).subscribe((update) => {
      console.log("Sanity Update Detected:", update);
      // Refetch the data to ensure projections and references are correctly resolved
      fetchData();
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}
