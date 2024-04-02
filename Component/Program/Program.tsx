import Program_1 from '../../Images/program-1.png'
import Program_2 from '../../Images/program-2.png'
import Program_3 from '../../Images/program-3.png'
import program_icon_1 from '../../Images/program-icon-1.png'
import program_icon_2 from '../../Images/program-icon-2.png'
import program_icon_3 from '../../Images/program-icon-3.png'
import './Program.css'
const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={Program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}
export default Program
