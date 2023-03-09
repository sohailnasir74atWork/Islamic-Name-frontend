import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

const Main= () => {
  return (
    <div>
      <Header/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main