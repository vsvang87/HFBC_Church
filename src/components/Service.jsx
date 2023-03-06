import React, {useState} from 'react'
import "../css/serve.css"

function Service(props) {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: 0,
    message: ""
})

function handleSubmit(event) {
    event.preventDefault()
}
  return (
    <div>
         <div className="image-container">
            <div className='wrapper'><h2>"Love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength." Mark 12:30</h2></div>
        </div>
    <div className='service-container'>
    
    <div className="wrapper">
    <div className="two-col">
        <div className="service col">
            <h3>Serve</h3>
            <div className="para">
            <p>Hmong First Baptist Church values the opportunity to serve the Lord. We believe the purpose of serving in ministry is to honor God.</p>
            </div>
        </div>
        <div className="online col">
            <form className='form' onSubmit={handleSubmit}>
    <div className="form-group">
        <input type="text" name="name" placeholder="Full Name" required/>
    </div>
    <div className="form-group">
        <input type="email" name='email' placeholder='Email' required/>
    </div>
    <div className="form-group">
        <input type="phone" name='phone' placeholder='Phone' required/>
    </div>
    <div className="form-group">
        <textarea cols="22" rows="10" name='message' placeholder='Message'/>
    </div>
    <div className="form-group">
        <button type='submit' className='submit-button'>Submit</button>
    </div>
            </form>
           
            </div>
        </div>
    </div>
    </div>
    <footer className='footer-container'>
      <div className="wrapper">
        <div className="footer-content">
          <div className='footer-column'>
           
            <p>6693 N 99th St, Milwaukee, WI 53224</p>
            <p>414-358-2610</p>
            <p>hfbc.milw@gmail.com</p>
           
          </div>
          <div className='footer-column'>
              <p>Sunday Worship</p>
              <p>10:30AM - 12</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Service;