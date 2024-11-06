import React from 'react'
import ModalWrapper from '../../partials/modals/ModalWrapper'
import SpinnerButton from '../../partials/spinners/SpinnerButton'
import { X } from 'lucide-react'

const PromoModalAdd = () => {
  return (
    <ModalWrapper>
    <div className="modal-main bg-primary z-50 max-w-[300px] w-full rounded-md animate-slideUp">
      <div className="modal-header p-2 border-b border-line flex justify-between items-center">
        <h6 className="mb-0 leading-none text-dark">
         Add
        </h6>
        <button >
          <X />
        </button>
      </div>
      <div className="modal-body p-2 px-4">
        <div className="input-wrap">
            <label htmlFor="">Promo</label>
            <input type="text" />
        </div>
      </div>

      <div className="modal-footer flex py-2 px-4 border-t border-line justify-end gap-3">
        <button
          className="btn btn-accent !text-xs"
          type="submit"
        >
            <SpinnerButton />
            Add
         
        </button>
        <button
          className="btn btn-cancel !text-xs"
          type="reset"
        >
          Cancel
        </button>
      </div>
    </div>
  </ModalWrapper>
  )
}

export default PromoModalAdd