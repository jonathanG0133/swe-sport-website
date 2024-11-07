import { useEffect, useState } from "react";

const baseUrl = "https://api.everysport.com/v1/leagues/";

const apiKey = "?apikey=26192887ec48f76ab54167238ae16688";

function useFetch(leagueId, extras, limit) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        baseUrl + leagueId + extras + apiKey + limit
      );
      const jsonData = await response.json();
      setData(jsonData[extras]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [leagueId, extras, limit]);

  return [data, fetchData]; // Return the data and fetch function
}

export default useFetch;
