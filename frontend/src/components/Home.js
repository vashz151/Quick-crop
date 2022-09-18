import React from 'react'
import BootstrapCarousel from './BootstrapCarousel'
import Background from "./Background";
import Footer from './Footer';
function Home() {
  return (
    <div>
      <Background/>
      <BootstrapCarousel/>
      <Footer/>
    </div>
  )
}

export default Home