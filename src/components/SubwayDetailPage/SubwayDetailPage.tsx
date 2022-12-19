import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lines } from "./lines";

export const SubwayDetailPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const { name } = useParams();

  const searchSelectedLine = () => {
    if (lines.length > 0) {
      return lines.find((line) => line.name === name);
    }
  };
  const selectedLine = searchSelectedLine();

  const handleOnClick = (index: number) => {
    setSelectedIndex(index);
  };

  if (!selectedLine) {
    return <div>error: no selected line available</div>;
  }

  const firstStationOfSelectedLine = selectedLine.stations[0];

  const lastStationOfSelectedLine = selectedLine.stations[selectedLine.stations.length - 1];

  const selectedStation = selectedLine.stations[selectedIndex];

  const getAccessToOtherLines = () => {
    if (selectedLine.stations.length > 0) {
      return lines.filter(
        (line) =>
          line.stations.find((station) => station === selectedLine.stations?.[selectedIndex]) && line !== selectedLine
      );
    }
  };

  const linesToBeAccessed = getAccessToOtherLines();

  if (linesToBeAccessed === undefined || linesToBeAccessed === null) {
    return null;
  }

  const currentStationMinus1 = selectedLine.stations[selectedIndex - 1];
  const currentStationMinus2 = selectedLine.stations[selectedIndex - 2];
  const currentStationMinus3 = selectedLine.stations[selectedIndex - 3];

  const currentStationPlus1 = selectedLine.stations[selectedIndex + 1];
  const currentStationPlus2 = selectedLine.stations[selectedIndex + 2];
  const currentStationPlus3 = selectedLine.stations[selectedIndex + 3];

  return (
    <section>
      <div className="detailpage-header">
        <div className="fs-secondary-heading" style={{ color: selectedLine.color }}>
          {name}
        </div>
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
            <h1 className="secondary-heading fs-secondary-heading" style={{ color: selectedLine.color }}>
              {selectedStation}
            </h1>
            <div className="padding-block-400 padding"></div>
            {linesToBeAccessed.length > 0 && <p>At {selectedStation} you have access to the following lines:</p>}
            <div className="access-lines-box padding-400">
              {linesToBeAccessed.map((line) => (
                <li className="button button-access-lines" style={{ backgroundColor: line.color }} key={line.name}>
                  {line.name}
                </li>
              ))}
            </div>
            <div className="next-stations-box">
              <div role="contentinfo" className="next-stations-column">
                {selectedStation !== firstStationOfSelectedLine && (
                  <>
                    <h4>Next stops to {firstStationOfSelectedLine}:</h4>
                    {currentStationMinus1 ? <p>{currentStationMinus1}</p> : null}
                    {currentStationMinus2 ? <p>{currentStationMinus2}</p> : null}
                    {currentStationMinus3 ? <p>{currentStationMinus3}</p> : null}
                  </>
                )}
              </div>
              <div role="contentinfo" className="next-stations-column">
                {selectedStation !== lastStationOfSelectedLine && (
                  <>
                    <h4>Next stops to {lastStationOfSelectedLine}:</h4>
                    {currentStationPlus1 ? <p>{currentStationPlus1}</p> : null}
                    {currentStationPlus2 ? <p>{currentStationPlus2}</p> : null}
                    {currentStationPlus3 ? <p>{currentStationPlus3}</p> : null}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
