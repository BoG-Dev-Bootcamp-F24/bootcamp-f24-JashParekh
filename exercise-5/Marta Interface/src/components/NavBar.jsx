import React from "react";

export default function NavBar({ color, stations }) {
  return (
    <div className="navbar">
      <h2>Select your starting station</h2>
      <ul>
        <li>All Stations</li>
        {stations.map((station, index) => (
          <li key={index}>{station.name}</li>
        ))}
      </ul>
    </div>
  );
}
