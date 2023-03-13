import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import "./Layout.scss"

const Main= () => {
  return (
    <div>
      <Header/>
      <div className="outlet">
            <Outlet />
            </div>
        <Footer/>
    </div>
  )
}

export default Main