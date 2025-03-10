import axios, { AxiosResponse } from "axios";
import { useRef, useState } from "react";
import { useCookies } from "react-cookie";

export const useFetchSingleApi = <T>() => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);
  const [cookie, setCookie, removeCookie] = useCookies();

  const axiosSource = useRef<any>();

  const fetchData = async (url: string, body?: any): Promise<void> => {
    if (axiosSource.current) {
      axiosSource.current.cancel("CANCEL");
    }

    axiosSource.current = axios.CancelToken.source();
    try {
      setLoading(true);
      setError(null);

      const response: AxiosResponse<T> = await axios.post(url, body, {
        headers: {
          // Authorization: `Bearer ${cookie.jwt_token}`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhbmdAZDdkLmNvbS5hdSIsIm9yZ2FuaXNhdGlvbklkIjoiMjJiNjA0M2UtZTk1Yy00N2JhLWIwOGItYTkxOTdlYjRjMTQwIiwic3ViIjoiZWU0MGIxYjgtNzliZi00MWUxLThjOWEtYzFjMjUxYjQzMzZhIiwiaWF0IjoxNzE5NDU0MDIwfQ.2HPzmR51thHSb41BuSqsDZxq6_wcdS7hqxYxgvkfEHc`,
        },
        cancelToken: axiosSource.current.token,
      });
      if (response) {
        setData(response.data);
        setLoading(false);
      }
    } catch (err: any) {
      if (err.name !== "CanceledError") {
        setError(err);
        setLoading(false);
      }
    }
  };

  return { data, loading, error, fetchData };
};
