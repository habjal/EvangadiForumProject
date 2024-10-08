import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Layout({children}) {
  return (
    <div style={{background:"url(/../../Assets/Images/blueRedBG.jpg"}}>
      <Header/>
      <div style={{minHeight:"100vh !important"}}>
      {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
