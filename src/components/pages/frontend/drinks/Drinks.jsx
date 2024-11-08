import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'
import Beer from './Beer'
import Wine from './Wine'
import Tea from './Tea'
import Sake from './Sake'
import useQueryData from '@/components/custom-hook/useQueryData'

const Drinks = (drinkCart, setDrinkCart) => {
  const [index, setIndex] = React.useState(0);
  const handleTab = (idx) => setIndex(idx)
  
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData (
   `/v2/drinks`, // endpoint
   "get", // method
    "drinks",
  );

  const layout = [
    <Beer result={result} isLoading={isLoading}/>,
    <Sake result={result} isLoading={isLoading}/>,
    <Wine result={result} isLoading={isLoading}/>,
    <Tea  result={result} isLoading={isLoading}/>,
  ]

  return (
    <section className='bg-[#fdf7ef]'>
        <img src={`${imgPath}/machi-drinks.webp`} alt="" className='w-full object-cover'/>
        <div className="container py-24">
        <h2 className="text-center uppercase text-accent ">Drinks</h2>

        <ul className='flex gap-20 justify-center text-black mt-10'>
            <li className={`text-3xl font-bold ${index === 0 ? "text-accent" :  ""}`}><button onClick={() => handleTab(0)}>Beer</button></li>
            <li className={`text-3xl font-bold ${index === 1 ? "text-accent" :  ""}`}><button onClick={() => handleTab(1)}>Sake</button></li>
            <li className={`text-3xl font-bold ${index === 2 ? "text-accent" :  ""}`}><button onClick={() => handleTab(2)}>Wine</button></li>
            <li className={`text-3xl font-bold ${index === 3 ? "text-accent" :  ""}`}><button onClick={() => handleTab(3)}>Tea</button></li>
        </ul>
      
        {layout[index]}

        </div>        
    </section>
  )
}

export default Drinks