import { setSuccess } from '@/components/store/storeAction'
import { StoreContext } from '@/components/store/storeContext'
import { CheckCircle, X } from 'lucide-react'
import React from 'react'


const ToastSuccess = () => {
  const {store, dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setSuccess(false))

  React.useEffect(()=> {
    setTimeout(() => {
      handleClose()
    }, 2000)
  })
  return (
    <div className='fixed top-5 left-1/2 -translate-x-1/2  bg-secondary min-w-[50px]  overflow-hidden rounded-md shadow-md border-success border'>
        <div className="flex items-center overflow-hidden pr-2">
            <div className='grid place-content-center bg-success basis-[35px] size-[35px]'>
                <CheckCircle size={18} className='text-white'/>
            </div>

            <p className='basis-[80%] p-1.5 mb-0'>{store.message}</p>

            <button className='basis-[10%]' onClick={handleClose}><X size={14}/></button>
        </div>

    </div>
  )
}

export default ToastSuccess