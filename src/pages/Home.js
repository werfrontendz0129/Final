import Promotion from '../component/Index/Promotion'
import HeaderIndex from '../component/Header/HeaderIndex'
import Firstpage from '../component/Index/Firstpage'
import XBox from '../component/Cardsection/XBox'
import Cardsection from '../component/Cardsection/Cardsection'
import Intro from '../component/Index/Intro'
import Service from '../component/Service/Service'

import Courseindex from '../component/CourseIndex/Courseindex'
import BestSeller from '../component/Index/BestSeller'
import Footer2 from '../component/Footer/Footer2'

import React from 'react'

import '../component/Index/homepage2.scss'

const Home = () => {
  return (
    <>
    {/* <Promotion /> */}
    <HeaderIndex />
    <Firstpage />
    <XBox />
    <Cardsection />
    <Service />
    <Intro />
    {/* <Cardcarousel /> */}
    <Courseindex />
    <BestSeller />
    <Footer2 />
    </>
  )
}

export default Home
