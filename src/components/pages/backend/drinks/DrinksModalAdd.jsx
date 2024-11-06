import { ImagePlusIcon, X } from "lucide-react";
import ModalWrapper from "../partials/modals/ModalWrapper";

const DrinksModalAdd = () => {

  return (
    <ModalWrapper>
      
            <form className="">
              <div className="modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] ">
                <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center self-start">
                  <h5 className="mb-0">Add Drinks</h5>
                  <button >
                    <X />
                  </button>
                </div>

                <div className="modal-body  p-3 px-4 ">
                  <div className="input-wrap">
                   <label htmlFor="">Name</label>
                   <input type="text" />
                  </div>
                  <div className="input-wrap">
                  <label htmlFor="">Price</label>
                   <input type="text" />
                  </div>
                  <div className="input-wrap relative">
                    <label htmlFor="">Description</label>
                    <textarea name="" id=""></textarea>
                  </div>
                </div>
                <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start">
                  <button
                    className="btn btn-accent min-w-[90px] flex justify-center"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-cancel min-w-[90px] flex justify-center"
                    type="reset"
                    
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          
    </ModalWrapper>
  );
};

export default DrinksModalAdd;
