import { useEffect, useState } from 'react';
import logo from '../../Images/logo.png';
import './Navbar.css';
const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true):setSticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt='' className='Logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}
export default Navbar
