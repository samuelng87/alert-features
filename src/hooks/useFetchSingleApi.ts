import { useState } from "react";

// Mock implementation that doesn't require backend connection
export const useFetchSingleApi = () => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  // Mock fetch function that simulates API call
  const fetchData = async (url: string, _body?: any): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response based on the URL
      if (url.includes('acknowledgeIssueFromEmail')) {
        setData({
          status: 'acknowledged',
          message: 'Alert has been acknowledged successfully'
        });
      } else {
        setData({
          status: 'success',
          data: { /* mock data */ }
        });
      }
      
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetchSingleApi;
