import React from 'react'
import Firstpage from '../components/Index/Firstpage'
import { devUrl } from '../config/index'
// import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Cardsection from '../components/Cardsection/Cardsection'
import BestSeller from '../components/Index/BestSeller'
// import Introduction from '../Introduction'
import Service from '../components/Service/Service'
import PopularItems from '../components/Popularitem/PopularItems'
import Header from '../components/Header/Header'
import Promotion from '../components/Index/Promotion'
import Courseindex from '../components/CourseIndex/Courseindex'
// import Footer from '../components/Footer/Footer'
import XBox from '../components/Cardsection/XBox'
import Footer from '../components/Footer/Footer'
import '../components/Index/homepage.scss'

const Home = () => {
  return (
    <>
      <Promotion />
      <Header />
      <Firstpage />
      <XBox />
      <Cardsection />
      <Service />
      <PopularItems />
      <Courseindex />
      <BestSeller />
      <Footer />
    </>
  )
}

export default Home
