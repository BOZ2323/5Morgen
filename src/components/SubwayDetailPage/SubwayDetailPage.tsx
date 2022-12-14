import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { lines } from "./lines";

export const SubwayDetailPage = () => {
  // const apiCall = `http://localhost:8080/lines/${name}`;
  const [selectedIndex, setSelectedIndex] = useState<Number>(0);

  const { name } = useParams();

  const searchSelectedLine = () => {
    if (lines.length > 0) {
      return lines.filter((line) => line.name === name);
    }
  };
  const selectedLine = searchSelectedLine();

  const handleOnClick = (index: number) => {
    setSelectedIndex(index);
    console.log("index", index);
  };

  const searchAccessToOtherLines = () => {
   return lines.filter(line => line.stations.find(station => station === line.stations[2]))
    // lines.filter(line => line.stations.filter(station => station === line.stations[selectedIndex]))
  }

  const linesToBeAccessed = searchAccessToOtherLines()

  console.log("linesToBeAccessed", linesToBeAccessed)


  useEffect(() => {
    searchSelectedLine();
  }, []); //TODO

  console.log("selectedLine:", selectedLine);

  return (
    <section>
      <div className="detailpage-header">
        <div className="fs-secondary-heading">{name}</div>
      </div>
      <div className="container padding-1100">
        <div className="even-columns">
          <div className="all-stations">
            <Link className="back-button" key={name} to={"/"}>
              <h3>Back</h3>
            </Link>
            {selectedLine?.map((item) =>
              item.stations.map((item, index) => (
                <li className="stations" onClick={() => handleOnClick(index)} key={item}>
                  {item}
                </li>
              ))
            )}
            {/* {selectedLine?.stations.map((item, index) => (
                <li className="stations" onClick={() => handleOnClick(index)} key={item}>
                  {item}
                </li>
              ))
            )} */}
          </div>
          <div className="detail-station"></div>
        </div>
      </div>
    </section>
  );
};
