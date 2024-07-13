import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
async function fetchCoins(page) {
  const options = {
    method: "GET",
    url: BASE_URL,
    params: { page, limit: "10", currency: "RUB" },
    headers: {
      accept: "application/json",
      "X-API-KEY": `${API_KEY}=`,
    },
  };
  const response = await axios(options);
  return response.data.result;
}
export function Coins() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(
    ["coinst", page],
    () => fetchCoins(page),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );
  if (isLoading) {
    return <h3 className="text-center">Loading...</h3>;
  }
  if (isError) {
    return <h3 className="text-center">Ошибка при получении данных</h3>;
  }
  if (!data) {
    return <h3 className="text-center">Нет данных</h3>;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <p className="w-5"></p>
        <p className="w-3">№</p>
        <p className="w-28">Name</p>
        <p className="w-32">Price</p>
      </div>
      {data.map((coin, index) => (
        <div key={index} className="flex gap-2">
          <img className="w-5 h-5" src={coin.icon} alt="" />
          <p className="w-3">{index + 1}</p>
          <p className="w-28 h-6 overflow-auto ">{coin.name}</p>
          <p className="w-32">{coin.price} RUB</p>
        </div>
      ))}
      <div className="flex gap-5 w-72 justify-between mt-3">
        <button
          onClick={() => {
            setPage((p) => p - 1);
          }}
          disabled={page === 1}
          className="border border-red-100 w-24"
        >
          -
        </button>
        <p>{page}</p>
        <button
          onClick={() => {
            setPage((p) => p + 1);
          }}
          className="border border-red-100 w-24"
        >
          +
        </button>
      </div>
    </div>
  );
}
