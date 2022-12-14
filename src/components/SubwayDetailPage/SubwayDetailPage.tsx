import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { lines } from "./lines";


export const SubwayDetailPage = () => {
  // const apiCall = `http://localhost:8080/lines/${name}`;
  const [selectedLineName, setSelectedLineName] = useState<Number>(0);

  const { name } = useParams();



  const searchSelectedLine = () => {
    if (lines.length > 0) {
      return lines.filter((line) => line.name === name);
    }
  };
  const selectedLine = searchSelectedLine();

  const handleOnClick = (index: number) => {
    setSelectedLineName(index)
    console.log('index', index)
  }

  useEffect(() => {
    searchSelectedLine();
  }, []); //TODO

  console.log("selectedLine:", selectedLine);

  return (
    <>
      <div className="container">
        <div>SubwayDetailPage of {name}</div>
        <div className="even-columns">
          <div className="all-stations">
            <Link className="back-button" key={name} to={"/"}>
              <h3>Back</h3>
            </Link>
            {/* {selectedLine?[0].stations.map(item => <button>{item.stations}</button>)} */}

            {selectedLine?.map((item) => item.stations.map((item, index) => <li onClick={() => handleOnClick(index)}
             key={item}>{item}</li>))} 
          </div>
        </div>
      </div>
    </>
  );
};
