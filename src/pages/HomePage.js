import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SampleData from "../data/SampleData.json";
import "../styles/HomePage.css";
import SortSelector from "../components/SortSelector";
import Group from "../components/GroupComponent";
import Box from "../components/BoxComponent";
import { getColorByIntensity, getBorderByIntensity } from "../utils/intensityUtils";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [sortKey, setSortKey] = useState("none");
  const [collapsedGroups, setCollapsedGroups] = useState({});

  useEffect(() => {
    setData(SampleData);
  }, []);

  const handleSort = (event) => {
    const key = event.target.value;
    setSortKey(key);
    setCollapsedGroups({});
  };

  const toggleCollapse = (groupKey) => {
    setCollapsedGroups((prevState) => ({
      ...prevState,
      [groupKey]: !prevState[groupKey],
    }));
  };

  const groupedData =
    sortKey === "none"
      ? { all: data }
      : data.reduce((acc, item) => {
          const key = item[sortKey];
          if (!acc[key]) acc[key] = [];
          acc[key].push(item);
          return acc;
        }, {});

  return (
    <Layout>
      <SortSelector sortKey={sortKey} handleSort={handleSort} />
      <div className="container">
        {Object.keys(groupedData).map((groupKey) => (
          <Group
            key={groupKey}
            groupKey={groupKey}
            sortKey={sortKey}
            collapsedGroups={collapsedGroups}
            toggleCollapse={toggleCollapse}
            getBorderByIntensity={getBorderByIntensity}
          >
            {groupedData[groupKey].map((item) => (
              <Box key={item.id} item={item} sortKey={sortKey} getColorByIntensity={getColorByIntensity} />
            ))}
          </Group>
        ))}
      </div>
    </Layout>
  );
}
