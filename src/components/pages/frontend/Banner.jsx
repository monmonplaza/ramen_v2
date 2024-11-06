import { Dot } from 'lucide-react'
import React from 'react'
import Header from './Header'

const Banner = () => {
  return (
    <section className="bg-[url('./public/img/banner.webp')] bg-cover bg-no-repeat bg-[left_top_-400px] min-h-screen relative ">
      <div className="container">
        <Header/>
        <div className="absolute top-[14vw] left-1/2 -translate-x-1/2 text-center uppercase">
          <h1 className="text-white mb-1 text-[clamp(50px,_6vw,_180px)]">
            Michi Ramen
          </h1>
          <p className="text-white flex justify-center font-bold text-[clamp(18px,_6vw,_20px)]">
            Tues - Sunday 11AM-Midnight <Dot /> Happy Hours 9pm-11pm
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner