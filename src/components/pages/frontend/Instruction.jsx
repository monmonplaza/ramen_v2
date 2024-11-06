import { imgPath } from '@/components/helpers/functions-general'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const Instruction = () => {
  return (
    <section className="py-24 bg-[#fcf6ef]">
    <div className="container">
      <h2 className="text-accent text-center text-[clamp(20px,_10vw,_50px)]">How to Order At Michi</h2>

      <div className="grid grid-cols-[170px,_40px,_170px,_40px_170px] gap-10 mt-10 max-w-[700px] mx-auto items-center justify-center">
        <div className="text-center">
          <img
            src={`${imgPath}/ramen-step-1.jpg`}
            alt=""
            className="w-[150px] h-[130px] mb-4 object-cover"
          />
          <h5 className=" text-black text-nowrap text-[clamp(18px,_3vw,_20px)]">
            Pick Your Ramen
          </h5>
        </div>
        <ChevronRight
          stroke={"#e60033"}
          size={60}
          className="-translate-x-2 -translate-y-4"
        />
        <div className="text-center">
          <img
            src={`${imgPath}/ramen-step-2.jpg`}
            alt=""
            className="w-[170px] h-[100px] mb-10 object-cover"
          />
          <h5 className=" text-black text-nowrap text-[clamp(18px,_3vw,_20px)]">
            Pick Your Broth
          </h5>
        </div>
        <ChevronRight
          stroke={"#e60033"}
          size={60}
          className="-translate-x-2 -translate-y-4"
        />
        <div className="text-center">
          <img
            src={`${imgPath}/ramen-step-3.jpg`}
            alt=""
            className="w-[170px] h-[120px] mb-4 object-cover"
          />
          <h5 className=" text-black text-nowrap text-[clamp(18px,_3vw,_20px)]">
            Add Toppings
          </h5>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Instruction