import React, { useEffect, useState } from "react";
import { Line } from "../../types/Line";
import { Nav } from "../Nav/Nav";

const AllSubwaysUrl = "http://localhost:8080/lines";

export const AllSubways = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lines, setLines] = useState<Line[]>([]);

  const fetchSubwayData = async () => {
    await fetch(AllSubwaysUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Could not fetch the data from 'http://localhost:8080/lines ");
      })
      .then((data) => {
        setLines(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSubwayData();
  }, []);

  if (loading) {
    return <div>Loading... </div>;
  }
  if (error) return <div>Error when loading...</div>;

  return (
    <div className="container">
      <header className="header">
        <h1 className="primary-heading fs-primary-heading">U-Bahn Berlin</h1>
        <Nav lines={lines} />
      </header>
    </div>
  );
};
