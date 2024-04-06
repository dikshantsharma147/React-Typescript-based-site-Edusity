import about_img from '../../Images/about.png'
import play_icon from '../../Images/play-icon.png'
import './About.css'
const About = ({setPlayState}: {setPlayState:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className='About'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
            {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensic=ve educative programs. our cutting-edge curriculam is designed to empower students with the knowledge, skills, and ecperiences needed to excel in
                the dynamic field of education. </p>
            <p>With a focus on iinnovation , hands-on leaning, and personalized
                mentorship, our programs prepare aspiring educators to make a meaningful impact in classroos, schools and commmunities.
            </p>
            <p>Whether you aspire to become a teacher , administrator, counselor, or educational leader, our diverse range of programs offers the prefect pathway 
                to achieve your goals and unlock your full potential in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About
