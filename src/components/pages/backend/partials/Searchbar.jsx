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
      className="relative"
    >
      <div className="pb-2 flex items-center">
        <input
          type="search"
          placeholder="Search here..."
          className="rounded-tr-none rounded-br-none border-r-0 text-sm py-[0px] h-[30px]"
          ref={search}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn-action-table text-[16px] p-[8px] rounded-tl-none rounded-bl-none border-l-0 bg-accent text-white border-accent hover:bg-accentDark rounded-md"
        >
          <Search />
        </button>
      </div>
      {store.isSearch && (
        <p className="absolute top-2 right-14 pointer-events-none">
          Result: {isFetching ? "Searching..." : result?.[0].count}
        </p>
      )}
    </form>
  );
};

export default SearchBar;