import React from 'react'
import Header from '../component/Header' 
import Footer from '../component/Footer'

const page = () => {
  return (
    <>
    <Header/>
    <div className='container mt-20'>
      <h1 style={{color:'orange'}}><center>Thank your for your request we will contact you soon</center></h1>
    <br/>
    <center><a href="/">return home</a></center>
    </div>
     <Footer/>
     </>
  )
}

export default page