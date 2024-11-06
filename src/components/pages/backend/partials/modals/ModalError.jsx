import { CircleAlert, MessageCircleWarning, TriangleAlert,  } from 'lucide-react'
import React from 'react'
import ModalWrapper from './ModalWrapper'

const ModalError = () => {
  return (
    <ModalWrapper>
        <div className="modal-main bg-primary z-50 max-w-[350px] w-full rounded-md">
           
            <div className="modal-body p-2 px-4 text-center">
                <div className='size-[70px] mt-2 bg-alert bg-opacity-20 grid place-content-center rounded-full mx-auto'>
                    <TriangleAlert className='stroke-alert' strokeWidth={1} size={45}/>
                </div>
                <h3 className='mt-5 mb-3'>System Issue</h3>
                <p className='mt-3 mb-5 text-balance'>Something went wrong. Contact system developer.</p>
            </div>

            <div className='modal-footer flex py-2 px-4 border-t border-line justify-end gap-3'>
                <button className='btn btn-alert w-full text-center block'>Okay</button>
            </div>
        </div>
    </ModalWrapper>
  )
}

export default ModalError