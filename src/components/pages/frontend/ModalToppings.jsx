import React from 'react'
import ModalWrapper from '../backend/partials/modals/ModalWrapper'
import { Plus, X } from 'lucide-react'
import useQueryData from '@/components/custom-hook/useQueryData';
import SpinnerMenu from '../backend/partials/spinners/SpinnerMenu';
import { setSuccess } from '@/components/store/storeAction';
import { StoreContext } from '@/components/store/storeContext';

const ModalToppings = ({setShowToppings, setCartItem, cartItem}) => {
    const {dispatch} = React.useContext(StoreContext)
    const {
        isLoading,
        isFetching,
        error,
        data: result,
      } = useQueryData (
       `/v2/toppings`, // endpoint
       "get", // method
        "toppings",
      );


      const handleAddItem = (item) => {
        const exist = cartItem.find((cart) => cart.toppings_aid === item.toppings_aid);
    
        if (exist !== undefined) {
          setCartItem(
            cartItem.map((cart) =>
              cart.toppings_aid === item.toppings_aid
                ? { ...exist, quantity: exist.quantity + 1 }
                : cart
            )
          );
        } else {
          setCartItem([...cartItem, { ...item, quantity: 1 }]);
        }
        dispatch(setSuccess(true));
        setShowToppings(true)
      };



  return (
    <ModalWrapper>
        <div className="modal-main bg-white text-black p-4 rounded-md z-50 max-w-[900px] w-full">
            <div className="modal-header flex justify-between pb-1 mb-2 border-b border-gray-200">
                <h5 className='text-black mb-0'>Add Toppings</h5>
                <button onClick={() => setShowToppings(false)}><X/></button>
            </div>
            <div className="modal-body my-5">
                {
                    isLoading ? (
                        <div className="min-h-[400px] w-full relative">
                            <SpinnerMenu/>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-10">
                            {result?.data.map((item, key) => (
                                <div className="grid grid-cols-[1fr,_50px_30px] gap-2 items-center" key={key}>
                                   <div className='leading-none'>
                                       <h6 className='text-black mb-0 leading-none'>{item.toppings_title}</h6>
                                       <small className='text-[11px]'>{item.toppings_description}</small>
                                   </div>
                                   <span>{item.toppings_price}</span>
                                   <button className='size-[25px] grid place-content-center bg-accent text-white rounded-full' onClick={() => handleAddItem(item)}><Plus size={16}/></button>
                               </div>
                            ) )}
                         
                        </div>
                    )
                }
               
            </div>

        </div>
    </ModalWrapper>
  )
}

export default ModalToppings