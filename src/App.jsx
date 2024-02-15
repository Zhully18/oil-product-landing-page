import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Desc from './Components/Details/Desc'
import Product from './Components/Product page/Product'
import Footer from './Components/Footer/Footer'
import Testimonial from './Components/Testimonials/Testimonial'


function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <Desc />
      <Product />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
