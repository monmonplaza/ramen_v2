import SpinnerButton from "./spinners/SpinnerButton";

const Loadmore = ({
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
  result,
  setPage,
  page,
  refView,
}) => {
  if (page === result?.total_pages) {
    return (
      <>
        {isFetchingNextPage ? (
          <button
            type="button"
            disabled={isFetchingNextPage}
            className="h-full relative mb-6 mt-3 text-primary p-1.5 rounded-full w-36 disabled:opacity-50 disabled:hover:bg-primary disabled:hover:opacity-50 disabled:cursor-not-allowed"
            // className="h-full relative my-6 text-white p-1.5 rounded-full w-36 bg-gradient-to-t from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary disabled:opacity-50 disabled:hover:bg-primary disabled:hover:opacity-50 disabled:cursor-not-allowed"
          >
            <SpinnerButton />
          </button>
        ) : (
          <div className="my-6 p-1.5">End of list.</div>
        )}
      </>
    );
  }
  if (!hasNextPage) {
    return <div className="my-6 p-1.5">End of list.</div>;
  }
  if (hasNextPage) {
    return (
      <button
        ref={refView}
        type="button"
        disabled={isFetchingNextPage}
        onClick={() => {
          setPage((prev) => prev + 1);
          fetchNextPage();
        }}
        className="h-full relative mb-6 mt-3 text-primary p-1.5 rounded-full w-36 disabled:opacity-50 disabled:hover:bg-primary disabled:hover:opacity-50 disabled:cursor-not-allowed"
        // className="h-full relative my-6 text-white p-1.5 rounded-full w-36 bg-gradient-to-t from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary disabled:opacity-50 disabled:hover:bg-primary disabled:hover:opacity-50 disabled:cursor-not-allowed"
      >
        {isFetchingNextPage ? <SpinnerButton /> : <span>Load more</span>}
      </button>
    );
  }
};

export default Loadmore;