import React from 'react'
import Hero from './components/Hero/Hero'
import OurServices from './components/Our Services/OurServices'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <OurServices />
      <WhereToBuy />
      <Banner />
      <Footer />
    </main>
    )
}

export default App