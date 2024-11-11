import React from 'react'
import ModalWrapper from '../partials/modals/ModalWrapper'
import { X } from 'lucide-react'
import { StoreContext } from '@/components/store/storeContext'
import { setIsAdd } from '@/components/store/storeAction'
import useQueryData from '@/components/custom-hook/useQueryData'
import LoaderTable from '../partials/LoaderTable'
import NoData from '../partials/icons/NoData'
import ServerError from '../partials/icons/ServerError'

const TransactionModalView = ({id}) => {
    const {dispatch} = React.useContext(StoreContext)

    const {
        isLoading,
        isFetching,
        error,
        data: result,
      } = useQueryData (
       `/v2/transaction/${id}`, // endpoint
       "get", // method
        "transaction",
      );

  return (
    <>
    <ModalWrapper>
    <div className="modal-main bg-primary z-50 max-w-[850px] w-full rounded-md">
      <div className="modal-header p-2 border-b border-line flex justify-between items-center">
        <h6 className="mb-0 leading-none text-dark">
          View Transaction
        </h6>
        <button onClick={() => dispatch(setIsAdd(false))}>
          <X />
        </button>
      </div>
      <div className="modal-body p-2 px-4 text-center">
        <div className="table-wrapper mb-4">
            <table>
                <thead>
                    <tr className='text-left'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>  
                </thead>  

                <tbody>
                {((isLoading && !isFetching) || result?.data.length === 0) && (
                  <tr>
                    <td colSpan="100%">
                      {isLoading ? (
                        <LoaderTable count={30} cols={6} />
                      ) : (
                        <NoData />
                      )}
                    </td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan="100%" className="p-10">
                      <ServerError />
                    </td>
                  </tr>
                )}

                {result?.data[0].transaction_cart_ramen !== undefined &&
                  JSON.parse(result?.data[0].transaction_cart_ramen).map(
                    (item, key) => {
                       
                      return (
                        <tr className="text-left" key={key}>
                         
                          <td>{item.ramen_title}</td>
                          <td>{item.ramen_price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            {Number(item.ramen_price) * Number(item.quantity)}
                          </td>
                        </tr>
                      );
                    }
                  )}


                {result?.data[0].transaction_cart_toppings !== undefined &&
                  JSON.parse(result?.data[0].transaction_cart_toppings).map(
                    (item, key) => {
                       
                      return (
                        <tr className="text-left" key={key}>
                        
                          <td>{item.toppings_title}</td>
                          <td>{item.toppings_price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            {Number(item.toppings_price) * Number(item.quantity)}
                          </td>
                        </tr>
                      );
                    }
                  )}

                {result?.data[0].transaction_cart_drinks !== undefined &&
                  JSON.parse(result?.data[0].transaction_cart_drinks).map(
                    (item, key) => {
                       
                      return (
                        <tr className="text-left" key={key}>
                        
                          <td>{item.drinks_title}</td>
                          <td>{item.drinks_price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            {Number(item.drinks_price) * Number(item.quantity)}
                          </td>
                        </tr>
                      );
                    }
                  )}

                {result?.data[0].transaction_cart_dessert !== undefined &&
                  JSON.parse(result?.data[0].transaction_cart_dessert).map(
                    (item, key) => {
                       
                      return (
                        <tr className="text-left" key={key}>
                        
                          <td>{item.sidesdrinks_title}</td>
                          <td>{item.sidesdrinks_price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            {Number(item.sidesdrinks_price) * Number(item.quantity)}
                          </td>
                        </tr>
                      );
                    }
                  )}

                </tbody>
            </table>     
        </div>

        
      </div>

      
    </div>
  </ModalWrapper>
  </>
  )
}

export default TransactionModalView