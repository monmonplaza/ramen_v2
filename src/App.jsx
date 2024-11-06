import React from 'react'
import { BrowserRouter as Router, Routes , Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/frontend/Home'
import Ramen from './components/pages/backend/ramen/Ramen'
import Transaction from './components/pages/backend/transaction/Transaction'
import SidesDessert from './components/pages/backend/sides-dessert/SidesDessert'
import Drinks from './components/pages/backend/drinks/Drinks'
import Settings from './components/pages/backend/settings/Settings'
import Toppings from './components/pages/backend/toppings/Toppings'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/admin/ramen" element={<Ramen/>}/>
        <Route path="/admin/toppings" element={<Toppings/>}/>
        <Route path="/admin/sides-dessert" element={<SidesDessert/>}/>
        <Route path="/admin/drinks" element={<Drinks/>}/>
        <Route path="/admin/transaction" element={<Transaction/>}/>
        <Route path="/admin/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  )
}     

export default App