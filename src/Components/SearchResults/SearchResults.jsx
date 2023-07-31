import SearchResult from "../SearchResult/SearchResult";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.items.map((item, i) => {
        return <SearchResult item={item} key={i} />;
      })}
    </div>
  );
};

export default SearchResults;
