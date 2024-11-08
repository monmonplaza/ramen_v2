import useQueryData from '@/components/custom-hook/useQueryData';
import { imgPath } from '@/components/helpers/functions-general'
import { Plus } from 'lucide-react'
import React from 'react'

const Dessert = ({dessertCart, setDessertCart}) => {
    const {
        isLoading,
        isFetching,
        error,
        data: result,
      } = useQueryData (
       `/v2/sides-dessert`, // endpoint
       "get", // method
        "sides-dessert",
      );

      const handleAddDessert  = (item) => {
     
        const exist = dessertCart.find((dessert) => dessert.sidesdessert_aid === item.sidesdessert_aid);
    
        console.log(dessertCart)

        if (exist !== undefined) {
            setDessertCart(
            dessertCart.map((dessert) =>
                dessert.sidesdessert_aid === item.sidesdessert_aid
                ? { ...exist, quantity: exist.quantity + 1 }
                : dessert
            )
          );
        } else {
            setDessertCart([...dessertCart, { ...item, quantity: 1 }]);
        }
        // dispatch(setSuccess(true));
        // setShowToppings(true)
      };

  return (
    <section className='bg-[#fdf7ef]'>
        <img src={`${imgPath}/machi-dessert.webp`} alt="" className='w-full object-cover'/>
        <div className="container py-24">
        <h2 className="text-center uppercase text-accent ">Sides & Dessert</h2>
        <div className="grid grid-cols-3 gap-10 mt-16">

        {result?.data.map((item, key)=>(
            <div key={key} className="grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black">
                <div>
                    <h5 className='mb-0 text-black'>{item.sidesdessert_title}</h5>
                    <small>{item.sidesdessert_description}</small>
                </div>
                <p className='font-bold text-2xl justify-self-center'>{item.sidesdessert_price}</p>
                <button className='bg-accent text-white  justify-self-center rounded-md px-2 py-1.5' onClick={() => handleAddDessert(item)}><Plus/></button>
            </div>
            )
        )}

          
      
        </div>
        </div>        
    </section>
  )
}

export default Dessert