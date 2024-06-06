import React from "react";

const SortSelector = ({ sortKey, handleSort }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSort} value={sortKey}>
        <option value="none">None</option>
        <option value="value">Value</option>
        <option value="intensity">Intensity</option>
        <option value="tier">Tier</option>
      </select>
    </div>
  );
};

export default SortSelector;
