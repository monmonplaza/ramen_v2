import useQueryData from '@/components/custom-hook/useQueryData';
import { Plus } from 'lucide-react'
import React from 'react'
import SpinnerMenu from '../../backend/partials/spinners/SpinnerMenu';

const Beer = ({result, isLoading, setDrinkCart, drinkCart}) => {

    const getAllBeer = result?.data.length > 0 && result?.data.filter((item) => item.drinks_category === "Beer" )

    
  return (
    <> 

        {
            isLoading ? (
                <div className="min-h-[400px] w-full relative">
                    <SpinnerMenu/>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-10 mt-16">
                    {getAllBeer.map((item, key)=>(
                        <div className="grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black" key={key}>
                            <div>
                                <h5 className='mb-0 text-black '>{item.drinks_title}</h5>
                                <small>{item.drinks_description}</small>
                            </div>
                            <p className='font-bold text-2xl justify-self-center'>{item.drinks_price}</p>
                            <button className='bg-accent text-white  justify-self-center rounded-md px-2 py-1.5'><Plus/></button>
                        </div>
                    ))}
                    
                 </div>
            )
         }
     
    </>
  )
}

export default Beer