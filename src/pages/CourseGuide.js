import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

//元件匯入
import CourseBanner from '../component/course/courseBanner/CourseBanner'
import Scroll from '../component/main/Scroll/Scroll'
import ScrollTop from '../component/main/ScrollTop/ScrollTop'
import MainContent from '../component/main/MainContent'
import CourseTypeSucculent from '../component/course/courseTypeLeft/CourseTypeSucculent'
import CourseTypeBall from '../component/course/courseTypeRight/CourseTypeBall'
import CourseTypeFlower from '../component/course/courseTypeLeft/CourseTypeFlower'
import CourseTypePlant from '../component/course/courseTypeRight/CourseTypePlant'
import CourseBookingFlow from '../component/course/courseBookingFlow/CourseBookingFlow'
import CourseMonth from '../component/course/courseMonth/CourseMonth'
import CoursePast from '../component/course/coursePast/CoursePast'
import Footer from '../component/Footer/Footer'
import HeaderB from '../component/Header/HeaderB'
function CourseGuide(props) {
  console.log(props)
  const isAuth = props.isAuth
  // const { clickType, setClickType } = useState()
  // console.log("Guide_page!" + clickType)

  // useEffect(() => {
  //   props.setFinalType(clickType)
  // }, [clickType])

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <>
      <HeaderB />
      <CourseBanner />
      <MainContent style={{ margin: '0 50%' }}>
        <Scroll />
        <ScrollTop />
        {/* <CourseTypeSucculent type={'succlent'} setClickType={setClickType} /> */}
        <CourseTypeSucculent type={'succlent'} data-aos="fade-up" />
        {/* <CourseTypeBall type={'ball'} setClickType={setClickType} /> */}
        <CourseTypeBall type={'ball'} data-aos="fade-up" />
        {/* <CourseTypeFlower type={'flower'} setClickType={setClickType} /> */}
        <CourseTypeFlower type={'flower'} data-aos="fade-up" />
        {/* <CourseTypePlant type={'plant'} setClickType={setClickType} /> */}
        <CourseTypePlant type={'plant'} data-aos="fade-up" />
        <CourseBookingFlow />
        <CourseMonth />
        <CoursePast />
      </MainContent>
      <Footer />
    </>
  )
}

export default withRouter(CourseGuide)
