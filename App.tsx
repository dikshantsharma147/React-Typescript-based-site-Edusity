import { useState } from 'react'
import About from './assets/Component/About/About'
import Campus from './assets/Component/Campus/Campus'
import Contact from './assets/Component/Contact/Contact'
import Footer from './assets/Component/Footer/Footer'
import Hero from './assets/Component/Hero/Hero'
import Navbar from './assets/Component/Navbar/Navbar'
import Program from './assets/Component/Program/Program'
import Testimonials from './assets/Component/Testimonials/Testimonials'
import VideoPlayer from './assets/Component/Video_Player/VideoPlayer'
import Title from './assets/Component/title/Title'
function App(){
  const [playState, setPlayState] = useState(false);
  return (
      <>
      <div className='app'>
        <Navbar />
        <Hero />
        <div className='Container'>
          <Title subTitle='OUR PROGRAM' title='What We Offer '/>
          <Program/>
          <About setPlayState = {setPlayState}/>
          <Title subTitle='Gallery' title='Campus Photos '/>
          <Campus />
          <Title subTitle='Testimonials' title='What Student Says '/>
          <Testimonials />
          <Title subTitle='CONTACT US' title='Get in Touch '/>
          <Contact />
          <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
      </>
  )
}

export default App
