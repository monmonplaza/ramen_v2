import { setIsSearch } from "@/components/store/storeAction";
import { Search } from "lucide-react";

const SearchBar = ({
  search,
  dispatch,
  store,
  result,
  isFetching,
  setOnSearch,
  onSearch,
}) => {
  const handleChange = (e) => {
    if (e.target.value === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
    }
  };

  const handleChangeSubmit = (e) => {
    e.preventDefault();
    let val = search.current.value;

    if (val === " " || val === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
      // dispatch(setError(true));
      // dispatch(setMessage("Search keyword cannot be space only or blank."));
    } else {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(true));
    }
  };

  return (
    <form
      // onSubmit={(e) => e.preventDefault()}
      onSubmit={(e) => {
        handleChangeSubmit(e);
      }}
      className="max-w-[300px] w-full relative"
    >
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search here... "
          className="px-2 py-1 rounded-l-md w-full border border-dark text-light"
          ref={search}
          onChange={handleChange}
          
        />
        <button
          type="submit"
          className="px-2 py-1 rounded-r-md bg-accent border-accent border-[.5px]"
        >
          <Search />
        </button>
      </div>
      {store.isSearch && (
        <p className="absolute top-2 right-[70px] text-light flex items-center mb-0 opacity-60">
          Result: {isFetching ? "Searching..." : result?.[0].count}
        </p>
      )}
    </form>
  );
};

export default SearchBar;