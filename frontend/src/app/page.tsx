"use client";

import { useEffect, useState } from "react";
import { useUser } from './hooks/useUser';

interface ApiResponse {
  message: string;
}

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  //userUserからインポート
  const {count, handleIncremment, handleMinus} = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: ApiResponse = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
      <h1 onClick={handleIncremment}>+</h1>
      <h1 onClick={handleMinus}>-</h1>
      <h2>{count}</h2>
      <h1>circleCI</h1>
    </div>
  );
}
