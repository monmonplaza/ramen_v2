import { ImagePlusIcon, X } from "lucide-react";
import ModalWrapper from "../partials/modals/ModalWrapper";

const RamenModalAdd = () => {

  return (
    <ModalWrapper>
      
            <form className="">
              <div className="modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft">
                <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center self-start">
                  <h5 className="mb-0">Add Ramen</h5>
                  <button type="button">
                    <X />
                  </button>
                </div>

                <div className="modal-body  p-3 px-4 ">
                  <div className="w-full h-[150px] border border-line  rounded-md mb-1.5">
                    <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                   
                        <div className="w-full  rounded-md flex justify-center items-center flex-col h-full">
                          <ImagePlusIcon
                            size={50}
                            strokeWidth={1}
                            className="opacity-20 group-hover:opacity-50 transition-opacity"
                          />
                          <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                            Upload Photo
                          </small>
                        </div>
                     
                        <img

                        //   src={
                        //     photo
                        //       ? URL.createObjectURL(photo) // preview
                        //       : imgPath + "/" + itemEdit?.ramen_image // check db
                        //   }
                          alt="employee photo"
                          className="group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto"
                        />
                    

                     
                    </div>
                  </div>
                  <div className="input-wrap">
                   <label htmlFor="">Title</label>
                   <input type="text" />
                  </div>
                  <div className="input-wrap">
                  <label htmlFor="">Price</label>
                   <input type="text" />
                  </div>

                  <div className="input-wrap">
                  <label htmlFor="">Category</label>
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">\4</option>
                  </select>
                  </div>

                  <div className="input-wrap relative">
                    <label htmlFor="">Ingredients</label>
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

export default RamenModalAdd;
