import React from 'react'
import Navigation from '../partials/Navigation'
import Footer from '../partials/Footer'
import Heading from '../partials/Heading'
import RamenTable from './RamenTable'

const Ramen = () => {
  return (
    <section className="flex  min-h-screen bg-secondary">
    <aside className="bg-primary text-dark basis-[200px] border-r border-line">
      <Navigation menu="ramen"/>
    </aside>
    <main className="basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]">
      <Heading title="Ramen" subtitle="Manage Ramen List"/>
     <RamenTable/>
    
      <Footer />
    </main>
  </section>
  )
}

export default Ramen