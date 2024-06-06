import React from "react";

const Box = ({ item, sortKey, getColorByIntensity }) => {
  return (
    <div
      className="box"
      key={item.id}
      style={{
        backgroundColor: sortKey === "intensity" ? getColorByIntensity(item.intensity) : "white",
      }}
    >
      <p>Value: {item.value}</p>
      <p>Intensity: {item.intensity}</p>
      <p>Tier: {item.tier}</p>
    </div>
  );
};

export default Box;
