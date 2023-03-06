import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../components/Home'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Donate from '../components/Donate'
import Prayer from '../components/Prayer'

function Navi({img1}) {
  return (
    <div>
        <Routes>
       <Route path='/' exact element={<Home />} />
       <Route path='/donate' element={<Donate/>}/>
       <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service img1={img1}/>}/>
      <Route path="/prayer" element={<Prayer/>}/>
    </Routes>
    </div>
  )
}

export default Navi