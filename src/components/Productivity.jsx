import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export function useAcitivity() {
  return useQuery("activity", () =>
    axios.get("https://www.boredapi.com/api/activity/").then((res) => res.data)
  );
}

const Productivity = () => {
  const { data, isLoading, isError, refetch } = useAcitivity();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;
  return (
    <div className="card">
      <div className="body">
        <p className="text">{data.activity}</p>
        <h3>{data.type}</h3>
        <button onClick={refetch}>Get new activity</button>
      </div>
    </div>
  );
};

export default Productivity;
