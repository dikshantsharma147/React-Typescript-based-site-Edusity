import { useRef } from 'react'
import back_icon from '../../Images/back-icon.png'
import next_icon from '../../Images/next-icon.png'
import user1 from '../../Images/user-1.png'
import user2 from '../../Images/user-2.png'
import user3 from '../../Images/user-3.png'
import user4 from '../../Images/user-4.png'
import './Testimonials.css'

const Testimonials = () => {
    const sliderRef = useRef<HTMLUListElement>(null);
    let tx  =0;
    const slideForward =()=>{
        if(sliderRef.current){
        if(tx>-50){
            tx -=25
        }
        sliderRef.current.style.transform = `translateX(${tx}%)`;
        }
    }
    const slideBackward =()=>{
        if(sliderRef.current){
            if(tx<0){
                tx += 25
            }
            sliderRef.current.style.transform = `translateX(${tx}%)`;
            }
    }
  return (
    <div className='testimonial'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={sliderRef}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                    </div>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                <p>Choosing to pursue my degree at edusity was one of the best decision I've
                    ever made. The supportive commuity, state-of-the-art facilities, and commitment
                    to academic excellence hace truly exceeded my expectations.
                </p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                    </div>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                <p>Choosing to pursue my degree at edusity was one of the best decision I've
                    ever made. The supportive commuity, state-of-the-art facilities, and commitment
                    to academic excellence hace truly exceeded my expectations.
                </p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                    </div>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                <p>Choosing to pursue my degree at edusity was one of the best decision I've
                    ever made. The supportive commuity, state-of-the-art facilities, and commitment
                    to academic excellence hace truly exceeded my expectations.
                </p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                    </div>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                <p>Choosing to pursue my degree at edusity was one of the best decision I've
                    ever made. The supportive commuity, state-of-the-art facilities, and commitment
                    to academic excellence hace truly exceeded my expectations.
                </p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
