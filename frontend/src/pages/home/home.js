import React from 'react'
import About from '../../components/about/About'
import Hero from '../../components/hero/Hero'
import Reviews from '../../components/reviews/reviews'
import SriMap from '../../components/srilankaMap/SriMap'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <SriMap/>
        <Reviews/>

    </div>
  )
}

export default Home