import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'
import Navbar from '../pages/Shared/NavBar/Navbar'

const Main = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Main