import DarkArrow from '../../Images/dark-arrow.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Our cutting-edge cirriculum is designed to empower students with the knowledge, skills and experiences needed to excel in  the dynamic field of education
        </p>
        <button className='btn'>Explore More <img src={DarkArrow} alt="" /></button>
      </div>
    </div>
  )
}
export default Hero
