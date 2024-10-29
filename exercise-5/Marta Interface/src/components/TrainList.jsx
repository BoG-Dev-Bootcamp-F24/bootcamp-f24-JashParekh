import React from "react";
import Train from "./Train"; // Assuming Train component is in the same folder

export default function TrainList({ color, trains }) {
  // Filter trains based on color prop
  const filteredTrains = trains.filter(train => train.LINE === color.toUpperCase());

  return (
    <div>
      <div className="buttons">
        <button>Arriving</button>
        <button>Scheduled</button>
        <button>Northbound</button>
        <button>Southbound</button>
      </div>
      {filteredTrains.map((train, index) => (
        <Train key={index} data={train} />
      ))}
    </div>
  );
}
