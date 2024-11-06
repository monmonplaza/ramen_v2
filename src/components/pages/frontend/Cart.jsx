import { imgPath } from '@/components/helpers/functions-general'
import { Minus, Plus, ShoppingBasket, Trash2, X } from 'lucide-react'
import React from 'react'
const Cart = () => {
  return (
    <div className="w-[300px] h-screen fixed top-0 right-0 bg-white text-black z-50 grid grid-rows-[auto,_1fr,_auto] shadow-[rgba(17,_0,_26,_0.1)_0px_0px_16px]">
      <div className="cart-header p-3 flex justify-between mb-2 border-b border-gray-200">
        <h5 className="mb-0  text-black leading-tight">Your Cart</h5>
        <button >
          <X />
        </button>
      </div>

      <div className="cart-body px-2 h-full overflow-auto ">
          <button className="flex justify-end mb-5 w-full">
            <Trash2 />
          </button>
     
          <div className="size-[200px] mx-auto text-center flex flex-col justify-center items-center opacity-30">
            <ShoppingBasket size={100} className="mb-5" strokeWidth={1} />
            <h4>Cart is Empty</h4>
          </div>
       

      
            <div
              className="card-item grid grid-cols-[90px_1fr] gap-2 items-center mb-2 pb-2 border-b border-gray-100"
            >
              <img
                src={`${imgPath}/menu-1.webp`}
                alt=""
                className="w-full h-[90px] object-cover "
              />

              <div className="basis-full">
                <h5 className="mb-0 text-[clamp(14px,_6vw,_18px)] text-black">
                  Ramen 1
                </h5>
                <p>Shoyo Tonkatsu</p>
                <div className="flex justify-between items-center w-full">
                  <ul className="flex gap-3 items-center">
                    <li className="size-[25px] bg-accent grid place-content-center rounded-full ">
                      <button >
                        <Plus stroke="#fff" size={15} />
                      </button>
                    </li>
                    <li className="text-base font-bold">2</li>
                    <li className="size-[25px] bg-accent grid place-content-center rounded-full ">
                      <button >
                        <Minus stroke="#fff" size={15} />
                      </button>
                    </li>
                  </ul>

                  <h5 className="mb-0">
                    <span className="text-xs pr-0.5 font-normal">PHP</span>
                  200
                  </h5>
                </div>
              </div>
            </div>
         
      </div>

      
        <form className="">
            <div className="cart-summary mt-5 p-2 ">
            <h5 className="mb-3 pb-2 ">Summary</h5>
            <ul className="flex justify-between items-center mb-1 text-xs space-y-2">
                <li className=" ">Subtotal</li>
                <li>
                <span className="pr-1">PHP</span>
                0.00
                </li>
            </ul>
            <ul className="flex justify-between items-center mb-1 text-xs space-y-2">
                <li className=" ">Service Fee</li>
                <li>
                <span className="pr-1">PHP</span>
                0.00
                </li>
            </ul>

            <ul className="flex justify-between items-center mb-1 text-xs space-y-2">
                <li className="">Total </li>

                <li>
                <span className="pr-1">PHP</span>
                0.00
                </li>
            </ul>

            <div className="input-wrap mt-5 flex items-center justify-between [&>input]:basis-[70px] ">
                <label htmlFor="">Payment</label>
                <input type="text" />
            </div>

            <ul className="flex justify-between items-center  pt-2 mb-5 text-xs space-y-2">
                <li className=" ">Change</li>
                <li>
                <span className="pr-1">PHP</span>
                0.00
                </li>
            </ul>

            <button
                className="btn btn-accent w-full text-center flex justify-center"
                type="submit"
            >
                Continue
            </button>
            </div>
        </form>
    </div>
  )
}
export default Cart
