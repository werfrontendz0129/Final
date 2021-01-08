import React from 'react'

//元件匯入
import CourseBanner from '../components/course/courseBanner/CourseBanner'
import Scroll from '../components/main/Scroll/Scroll'
import ScrollTop from '../components/main/ScrollTop/ScrollTop'
import MainContent from '../components/main/MainContent'
import CourseTypeSucculent from '../components/course/courseTypeLeft/CourseTypeSucculent'
import CourseTypeBall from '../components/course/courseTypeRight/CourseTypeBall'
import CourseTypeFlower from '../components/course/courseTypeLeft/CourseTypeFlower'
import CourseTypePlant from '../components/course/courseTypeRight/CourseTypePlant'
import CourseBookingFlow from '../components/course/courseBookingFlow/CourseBookingFlow'
function CourseGuide() {
  return (
    <>
      <CourseBanner />
      <MainContent>
        <Scroll />
        <ScrollTop />
        <CourseTypeSucculent />
        <CourseTypeBall />
        <CourseTypeFlower />
        <CourseTypePlant />
        <CourseBookingFlow />
      </MainContent>
    </>
  )
}

export default CourseGuide
