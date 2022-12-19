import React from "react";
import { Line } from "../../types/Line";
import { NavLink } from "react-router-dom";

type Props = {
  lines: Line[];
};

export const Nav = ({ lines }: Props) => {
  return (
    <nav className="primary-nav">
      <ul className="nav-list">
        {lines &&
          lines.map((line) => (
            <NavLink className="button" style={{ backgroundColor: line.color }} key={line.name} to={`${line.name}`}>
              <li>{line.name}</li>
            </NavLink>
          ))}
      </ul>
    </nav>
  );
};
