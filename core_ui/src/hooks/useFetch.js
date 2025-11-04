// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import { useEffect, useState } from "react";
import { apiGet } from "../api/api";

export default function useFetch(url, deps = []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGet(url)
      .then((res) => mounted && setData(res))
      .catch((err) => mounted && setError(err))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, deps);

  return { data, loading, error, setData };
}
