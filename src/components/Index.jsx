import React from 'react'
import "../css/index.css"
import Navbar from './Navbar'
import Navi from '../routes/Navi'
import {BrowserRouter as Router} from "react-router-dom"
import img1 from "../images/groupcamp.jpg"


//
function Index() {
  return (
    <div className='main-container'>
        <Router>
        <Navbar/>
        <Navi img1={img1}/>
        </Router>
    </div>
  )
}

export default Index