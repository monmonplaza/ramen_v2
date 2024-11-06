import { Archive, ArchiveRestore, FilePenLine, Plus, Search, Trash } from 'lucide-react'
import React from 'react'
import LoaderTable from '../partials/LoaderTable'
import NoData from '../partials/icons/NoData'
import ServerError from '../partials/icons/ServerError'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import { StoreContext } from '@/components/store/storeContext'
import SearchBar from '../partials/searchbar'
import { useInfiniteQuery } from '@tanstack/react-query'
import Loadmore from '../partials/LoadMore'
import { useInView } from "react-intersection-observer";
import { queryDataInfinite } from '@/components/helpers/queryDataInfinite'

const DrinksTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();

  const {
    data: result,
    error,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["drinks", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/drinks/search`, // search endpoint
        `/v2/drinks/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, id: "" } // search value
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });


  return (
    <div className="m-8">
    <div className="flex justify-between items-center">
      <SearchBar  
       search={search}
              dispatch={dispatch}
              store={store}
              result={result?.pages}
              isFetching={isFetching}
              setOnSearch={setOnSearch}
              onSearch={onSearch}
              />
      <button className="btn btn-accent" >
        <Plus size={14} /> Add New
      </button>
    </div>


    {(status === "loading" || result?.pages[0].data.length === 0) &&
          (status === "loading" ? <LoaderTable /> : <NoData />)}
        {error && <ServerError />}


    <div className="table_wrapper bg-primary p-4 mt-5 rounded-md relative">
        {/* <SpinnerTable/> */}
        <table>
        <thead>

          <tr>
                  <td>#</td>
            <td>Title</td>
            <td>Price</td>
            <td>Category</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          

      {result?.pages.map((page, key) => (
      <React.Fragment key={key}>
        {page.data.map((item, key) => (
          <tr key={key}>
            <td>1. </td>
            <td>{item.drinks_title} </td>
            <td>200 </td>
            <td>Shoyo Tonkatsu</td>
            <td>
                true
            </td>
            <td>
                <ul className="table-action">
                <li>
                    <button
                        type="button"
                        data-tooltip="Edit"
                    >
                        <FilePenLine size={14} />
                    </button>
                </li>
                <li>
                    
                    <button
                        type="button"
                        data-tooltip="Archive"
                    >
                        <Archive size={14} />
                    </button>
                </li>
                <li>
                    
                    <button
                        type="button"
                        data-tooltip="Restore"
                    >
                        <ArchiveRestore size={14} />
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        data-tooltip="Delete"
                    >
                        <Trash size={14} />
                    </button>
                </li>
                </ul>
            </td>
            </tr>
          ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>

    <Loadmore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={ref}
          />
  </div>
  )
}

export default DrinksTable