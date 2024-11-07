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
            className=""
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
        className=" hover:text-accent"
      >
        {isFetchingNextPage ? <SpinnerButton /> : <span>Load more</span>}
      </button>
    );
  }
};

export default Loadmore;