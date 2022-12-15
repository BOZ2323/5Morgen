import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { lines } from "./lines";

export const SubwayDetailPage = () => {
  // const apiCall = `http://localhost:8080/lines/${name}`;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [storeSelectedStation, setStoreSelectedStation] = useState<string>('');

  const { name } = useParams();

  const searchSelectedLine = () => {
    if (lines.length > 0) {
      return lines.find((line) => line.name === name);
    }
  };
  const selectedLine = searchSelectedLine();

  useEffect(() => {
    searchSelectedLine();
  }, []); //TODO

  if (!selectedLine) {
    return <div>error: no selected line available</div>;
  }
  

  const handleOnClick = (index: number) => {
    setSelectedIndex(index);
    console.log("index", index);
  };

  const firstStationOfSelectedLine = selectedLine.stations[0];

  const lastStationOfSelectedLine = selectedLine.stations[selectedLine.stations.length - 1];

  const selectedStation = selectedLine.stations[selectedIndex];

  const checkAccessToOtherLines = () => {
    if (selectedLine.stations.length > 0) {
  
      return lines.filter((line) => line.stations.find((station) => station === selectedLine.stations?.[selectedIndex]) && line !== selectedLine);
    }
  };

  const linesToBeAccessed = checkAccessToOtherLines();
  if (!linesToBeAccessed) {
    return <div>error: no accessible lines available</div>;
  }

  // useEffect(() => {
  //   checkAccessToOtherLines();
  // }, []); //TODO

  

  return (
    <section>
      <div className="detailpage-header">
        <div className="fs-secondary-heading" style={{color: selectedLine.color}}>{name}</div>
      </div>
      <div className="container padding-1100">
        <div className="even-columns">
          <div className="all-stations">
            <Link className="back-button padding-block-400" key={name} to={"/"}>
              <h3>Back to menu</h3>
            </Link>
            {selectedLine.stations.map((item, index) => (
              <li className="stations" onClick={() => handleOnClick(index)} key={item}>
                {item}
              </li>
            ))}
          </div>
          <div className="detail-station">
            <h1 className="secondary-heading fs-secondary-heading" style={{ color: selectedLine.color }}>{selectedStation}</h1>
            <div className="padding-block-400 padding"></div>
            {linesToBeAccessed.length > 0 && <p>At {selectedStation} you have access to the following lines:</p>}
            <div className="access-lines-box padding-400">
            {linesToBeAccessed && linesToBeAccessed.map((line) => (
              <li className="button button-access-lines" style={{backgroundColor: line.color}} key={line.name}>{line.name}</li>
            ))}
              </div>
            <div className="next-stations-box">
              <div className="next-stations-column">
                {selectedStation !== firstStationOfSelectedLine && (<><h1>next stops to {firstStationOfSelectedLine}</h1>
                <p>{selectedLine.stations[selectedIndex - 1]}</p>
                <p>{selectedLine.stations[selectedIndex - 2]}</p>
                <p>{selectedLine.stations[selectedIndex - 3]}</p></>)}
              </div>
              <div className="next-stations-column">
              {selectedStation !== lastStationOfSelectedLine && (<><h1>next stops to {lastStationOfSelectedLine}</h1>
                <p>{selectedLine.stations[selectedIndex + 1]}</p>
                <p>{selectedLine.stations[selectedIndex + 2]}</p>
                <p>{selectedLine.stations[selectedIndex + 3]}</p></>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
