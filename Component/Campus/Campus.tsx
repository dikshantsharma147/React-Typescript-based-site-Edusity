import gallery1 from '../../Images/gallery-1.png'
import gallery2 from '../../Images/gallery-2.png'
import gallery3 from '../../Images/gallery-3.png'
import gallery4 from '../../Images/gallery-4.png'
import whitearrow from '../../Images/white-arrow.png'
import './Campus.css'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here <img src={whitearrow} alt="" /></button>
    </div>
  )
}
export default Campus
