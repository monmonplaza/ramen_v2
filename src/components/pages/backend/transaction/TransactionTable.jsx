import { queryDataInfinite } from '@/components/helpers/queryDataInfinite'
import { StoreContext } from '@/components/store/storeContext'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { useInView } from "react-intersection-observer"
import Loadmore from '../partials/LoadMore'
import LoaderTable from '../partials/LoaderTable'
import SearchBar from '../partials/SearchBar'
import NoData from '../partials/icons/NoData'
import ServerError from '../partials/icons/ServerError'
import { View } from 'lucide-react'
import TransactionModalView from './TransactionModalView'
import { setIsAdd } from '@/components/store/storeAction'

const TransactionTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();

  let count = 0;
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
    queryKey: ["transaction", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/transaction/search`, // search endpoint
        `/v2/transaction/page/${pageParam}`, // list endpoint
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

  const handleViewInfo = (item) => {
    setId(item.transaction_aid)
    dispatch(setIsAdd(true))
  }

  return (
    <>
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
     
    </div>

    <div className="table_wrapper bg-primary p-4 mt-5 rounded-md relative">
        {/* <SpinnerTable/> */}
        <table>
        <thead>
          <tr>
            <td className='w-[30px]'>#</td>
            <td >Date</td>
            <td>Total</td>
            <td>Change</td>
            <td>MOP</td>      
            <td></td>
          </tr>
        </thead>

        <tbody>
         {  
         (status === "loading" || result?.pages[0].data.length === 0) && (
            <tr>
              <td colSpan="100%">
                {status === "loading" ? (
                  <LoaderTable count={30} cols={6} />
                ) : (
                  <NoData />
                )}
              </td>
            </tr>
          )} 

            {error && ( 
               <tr>
                <td colSpan="100%">
                 <ServerError/>
                </td>
              </tr>
            )}  
      {result?.pages.map((page, key) => (
      <React.Fragment key={key}>
        {page.data.map((item, key) => {
         count++
         return ( 
         <tr key={key}>
          <td>{count} </td>
          <td>{item.transaction_created} </td>
          <td>PHP {item.transaction_finaltotal} </td>
          <td>PHP {item.transaction_change} </td>
          <td>{item.transaction_mop} </td>
          <td>
            <ul className='table-action'>
              <li><button data-tooltip="View" onClick={() => handleViewInfo(item)}><View size={14}/></button></li>
            </ul>
          </td>
          </tr>
          ) 
        }
          )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
        <div className='text-center mt-5'>
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
  </div>

    {store.isAdd && <TransactionModalView id={id} />}
  </>
  )
}

export default TransactionTable