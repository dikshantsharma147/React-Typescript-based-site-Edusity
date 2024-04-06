import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../Images/logo.png';
import menu_icon from '../../Images/menu-icon.png';
import './Navbar.css';
const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true):setSticky(false);
    })
  },[])
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const togglemenu =()=>{
    setMobileMenu(preState => !preState);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt='' className='Logo'/>
      <ul className={mobileMenu ?'':'hide-mobile-menu'}>
        <li><Link to='hero-container' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='About' smooth={true} offset={-160} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={togglemenu}/>
    </nav>
  )
}
export default Navbar
