import { imgPath } from '@/components/helpers/functions-general'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Cart from './Cart'

const Header = () => {
  return (
    <>
    <header
    className={`px-4 py-2 transition-all z-50 `}
  >
    <div className="flex justify-between items-center ">
      <div className="">
        <Link to="/">
          <img
            src={`${imgPath}/logo.png`}
            alt=""
            className= "w-[80px]"
          />
        </Link>
      </div>

      <ul className="flex gap-10 items-center">
     

        <li>
          <NavLink to="/menu" className="text-base font-bold text-white">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" className="text-base font-bold text-white">
            Location
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-base font-bold text-white">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="text-base font-bold text-white">
            Blog
          </NavLink>
        </li>
      </ul>

      <button className="relative">
        <ShoppingBag stroke={"#fff"} />
      </button>
    </div>
  </header>

    {/* <Cart/> */}
    </>
  )
}

export default Header