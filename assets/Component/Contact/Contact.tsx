import React from 'react'
import location_icon from '../../Images/location-icon.png'
import mail_icon from '../../Images/mail-icon.png'
import msg_icon from '../../Images/msg-icon.png'
import phone_icon from '../../Images/phone-icon.png'
import white_arrow from '../../Images/white-arrow.png'
import './Contact.css'
const Contact: React.FC = () => {

  const [result, setResult] = React.useState<string>("");

  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>)  => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.currentTarget as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  return (
    <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" className='image'/></h3>
          <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are important to us as we strive to provide 
            exceptional service to our university community.
          </p>
          <ul>
              <li><img src={mail_icon} alt="" />contact@GreatStack.dev</li>
              <li><img src={phone_icon} alt="" />+91 9876543210</li>
              <li><img src={location_icon} alt="" />Ghumarwin <br />Himachal Pradesh</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number'required/>
            <label>Write your message here</label>
            <textarea name="message" rows={6} placeholder="Enter your message" required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    )
  }
}

export default Contact
