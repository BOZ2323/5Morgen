import React, { useEffect, useState } from "react";
import { Line } from "../../types/Line";
import { Nav } from "../Nav/Nav";

export const AllSubways = () => {
  const apiCall = "http://localhost:8080/lines";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lines, setLines] = useState<Line[]>([]);

  const fetchSubwayData = async () => {
    await fetch(apiCall)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("could not fetch the data for that url");
      })
      .then((data) => {
        setLines(data);
        // console.log("response data", data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error.message);
        setError(error.message);
        setLoading(false);
      });
    // .finally(setLoading(false));

    if (loading) {
      return <div>Loading... </div>;
    }
    if (error) return "Error";
  };


  useEffect(() => {
    fetchSubwayData();
  }, []);  //TODO

  return (
    <div className="container">
      <header className="header">
        <h1 className="primary-heading fs-primary-heading">U-Bahn Berlin</h1>
        <Nav lines={lines} />
      </header>
    </div>
  );
};
