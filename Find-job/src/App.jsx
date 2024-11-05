import "./App.css";
import data from "./data.json";
import Jobs from "./Components/Jobs";
import Header from "./Components/Header";
import { useSelector, useDispatch } from "react-redux";
import { clearKeywords, removeKeyword } from "../src/Redux/filterRoleSlice";

function App() {
  const dispatch = useDispatch();
  const filterKeywords = useSelector((state) => state.filter.keywords);

  const deleteKeyword = (keyword) => {
    dispatch(removeKeyword(keyword));
  };

  return (
    <>
      {filterKeywords.length > 0 ? (
        <Header
          keyWords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={() => dispatch(clearKeywords())}
        />
      ) : (
        <Header />
      )}

      <Jobs keywords={filterKeywords} data={data} />
    </>
  );
}

export default App;
