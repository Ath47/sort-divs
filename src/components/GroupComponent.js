import React from "react";

const Group = ({ groupKey, children, sortKey, collapsedGroups, toggleCollapse, getBorderByIntensity }) => {
  return (
    <div
      className="group"
      style={{
        border: sortKey === "intensity" ? getBorderByIntensity(parseInt(groupKey, 10)) : "1px solid #ddd",
      }}
    >
      {sortKey !== "none" && (
        <div className="group-header">
          <span>
            {sortKey.charAt(0).toUpperCase() + sortKey.slice(1)}: {groupKey}
          </span>
          <button onClick={() => toggleCollapse(groupKey)}>
            {collapsedGroups[groupKey] ? "Expand" : "Collapse"}
          </button>
        </div>
      )}
      {!collapsedGroups[groupKey] && <div className="group-content">{children}</div>}
    </div>
  );
};

export default Group;
