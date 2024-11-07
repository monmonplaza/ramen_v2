import React from 'react'
import Navigation from '../partials/Navigation'
import Footer from '../partials/Footer'
import Heading from '../partials/Heading'
import SidesDessertTable from './SidesDessertTable'

const SidesDessert = () => {
  return (
    <section className="flex  min-h-screen bg-secondary">
    <aside className="bg-primary text-dark basis-[200px] border-r border-line">
      <Navigation menu="side&dessert"/>
    </aside>
    <main className="basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]">
      <Heading title="Sides & Dessert" subtitle="Manage sides & dessert List"/>
      <SidesDessertTable/>
      <Footer />
    </main>
  </section>
  )
}

export default SidesDessert