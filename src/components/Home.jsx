import React from 'react'
import "../css/home.css"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";


//
function Home() {
  return (
    <div>
    <div className='home-container'>
        <div className="wrapper">
            <div className="home-content">
                <div>
                <h2>Hmong First Baptist Church</h2>
               
                </div>
            </div>
        </div>
    </div>

    <section className='section-1'>
     <div className="wrapper">
     <div className="section-content">
        <div className="sunday-service">
        <h3>Meet on zoom</h3>
        <a href="#">
        <FontAwesomeIcon icon={faVideo} className="zoom-icon"/>
        </a>
        <p>Meeting ID: 86814207799</p>
        <p>Video or Audio only</p>

       
        
        </div>
        <div className="sunday-service border-left">
          <h3>Join Us Every Sunday</h3>
          <h4>Service</h4>
          <p>10:30AM - 12</p>
          <h4>Men, Women & Youth Bible Study</h4>
          <p>9:30AM - 10:25AM</p>
        </div>
      </div>
     </div>
    </section>
    <section className='section-2'>
    <div className="wrapper">
      <div className="section-2-content">
        <div className="section-column">
        <h3>Welcome</h3>
        <p>Thanks for taking the time to find out about Hmong First Baptist Church. We hope that you would join us for worship and bible study. If you are in need of prayer, please don't hesitate to contact us. We have people ready to pray with you and for you either in person or on the phone.</p>
        <Link to="/prayer" className='serve-button'>Prayer Request</Link>
        </div>
        <div className="section-column">
         <h3>Volunteer</h3>
         <p>If you would like to serve at Hmong First Baptist Church, please fill out a form. A ministry leader will get in touch with you.</p>
          <Link to="/service" className='serve-button'>Serve</Link>
        </div>
        <div className="section-column">
         <h3>Give</h3>
         <p>At Hmong First Baptist Church we have 3 ways to give. We have online, during service, or in giving box placed in the building.</p>
          <Link to="/donate" className='serve-button'>Give</Link>
        </div>
      </div>
    </div>
    </section>
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

export default Home