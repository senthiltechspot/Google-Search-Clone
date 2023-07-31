import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar/Searchbar";
import { useLocation } from "react-router-dom";
import { getResults } from "../../Api/GoogleSearch";
import SearchResults from "../../Components/SearchResults/SearchResults";

const Search = () => {
  const [results, setResults] = useState(null);

  const location = useLocation();
  const searchValue = new URLSearchParams(location.search).get("query");

  const fetchResults = async () => {
    const results = await getResults(searchValue);
    setResults(results);
  };

  useEffect(() => {
    fetchResults();
  }, [searchValue]);
  return (
    <div>
      <div className="d-flex align-items-center p-4">
        <img
          src={
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          alt="not available"
          height={"40px"}
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        />
        <SearchBar searchValue={searchValue} />
      </div>
      {results ? <SearchResults results={results} /> : <></>}
    </div>
  );
};

export default Search;
