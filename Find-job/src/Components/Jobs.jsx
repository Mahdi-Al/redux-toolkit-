import { useEffect, useState } from "react";
import Job from "./Job";

export default function Jobs({ data, setKeywords, keywords }) {
  const [filterData, setFilterData] = useState([]);

  // This function modifies the data based on keywords
  const modifyData = () => {
    if (keywords.length > 0) {
      const newData = data.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilterData(newData);
    } else {
      setFilterData(data);
    }
  };

  // useEffect to call modifyData whenever keywords change
  useEffect(() => {
    modifyData();
  }, [keywords, data]); // Include data in the dependency array if it can change

  return (
    <div className="jobs">
      {filterData.map((d) => {
        return <Job key={d.id} data={d} setKeywords={setKeywords} />;
      })}
    </div>
  );
}
