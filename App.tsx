import About from './assets/Component/About/About'
import Campus from './assets/Component/Campus/Campus'
import Contact from './assets/Component/Contact/Contact'
import Hero from './assets/Component/Hero/Hero'
import Navbar from './assets/Component/Navbar/Navbar'
import Program from './assets/Component/Program/Program'
import Testimonials from './assets/Component/Testimonials/Testimonials'
import Title from './assets/Component/title/Title'
function App(){
  return (
      <>
        <Navbar />
        <Hero />
        <div className='Container'>
          <Title subTitle='OUR PROGRAM' title='What We Offer '/>
          <Program/>
          <About />
          <Title subTitle='Gallery' title='Campus Photos '/>
          <Campus />
          <Title subTitle='Testimonials' title='What Student Says '/>
          <Testimonials />
          <Title subTitle='CONTACT US' title='Get in Touch '/>
          <Contact />
        </div>
        
      </>
  )
}

export default App
