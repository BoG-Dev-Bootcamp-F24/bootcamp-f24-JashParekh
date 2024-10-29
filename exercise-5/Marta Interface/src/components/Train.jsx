import React from "react";

export default function Train({ data }) {
  const isOnTime = data.DELAY === "T0S";

  return (
    <div className="train">
      <div>
        <strong>{data.ORIGIN} ➔ {data.DESTINATION}</strong>
        <p>{data.LINE} - {isOnTime ? "On time" : "Delayed"}</p>
      </div>
      <p>{data.WAITING_TIME} min</p>
    </div>
  );
}
