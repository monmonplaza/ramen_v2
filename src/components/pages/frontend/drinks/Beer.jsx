import { Plus } from 'lucide-react'
import React from 'react'

const Beer = () => {
  return (
    <> 
     <div className="grid grid-cols-2 gap-10 mt-16">
    <div className="grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black">
        <div>
            <h5 className='mb-0 text-black '>aasdfasdfasd fasdfasdfasdfasdf asdfasdf</h5>
            <small>Philser Austine Beerworks</small>
        </div>
        <p className='font-bold text-2xl justify-self-center'>200</p>
        <button className='bg-accent text-white  justify-self-center rounded-md px-2 py-1.5'><Plus/></button>
    </div>

    <div className="grid-item grid grid-cols-[1fr,_100px,_100px] items-center text-black">
        <div>
            <h5 className='mb-0 text-black '>aasdfasdfasd fasdfasdfasdfasdf asdfasdf</h5>
            <small>Philser Austine Beerworks</small>
        </div>
        <p className='font-bold text-2xl justify-self-center'>200</p>
        <button className='bg-accent text-white  justify-self-center rounded-md px-2 py-1.5'><Plus/></button>
    </div>


</div>
</>
  )
}

export default Beer