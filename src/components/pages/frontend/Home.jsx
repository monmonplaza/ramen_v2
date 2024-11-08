import React from 'react'
import Banner from './Banner'
import Instruction from './Instruction'
import CallToAction from './CallToAction'
import Carousel from './Carousel'
import Footer from './Footer'
import Menu from './Menu'
import ModalToppings from './ModalToppings'
import Dessert from './Dessert'
import Drinks from './drinks/Drinks'
import Cart from './Cart'
import { StoreContext } from '@/components/store/storeContext'

const Home = () => {
  const {dispatch, store} = React.useContext(StoreContext)
  const [ramenCart, setRamenCart] = React.useState([])
  const [dessertCart, setDessertCart] = React.useState([])

  return (
    <>
      <Banner />
      <Instruction />
      <Menu ramenCart = {ramenCart} setRamenCart ={setRamenCart}/>
      <Dessert dessertCart={dessertCart} setDessertCart={setDessertCart} />
      <Drinks  />

      <Carousel/>
      <CallToAction/>

      <Footer/>
      {/* <ModalToppings/> */}

      {store.isAdd && <Cart 
        ramenCart={ramenCart}
        setRamenCart={setRamenCart}
        dessertCart={dessertCart}
        setDessertCart={setDessertCart}
      />}
    </>
  )
}

export default Home