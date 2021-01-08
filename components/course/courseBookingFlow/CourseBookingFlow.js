import React from 'react'
import './CourseBookingFlow.scss'
import { devUrl } from '../../../config/index'

function CourseBookingFlow() {
  return (
    <div className="r-booking-flow">
      <div className="title">
        <h2>預約課程流程</h2>
        <h4 style={{ color: '#494949' }}>Courses-Booking Process</h4>
      </div>
      <div className="booking-content">
        <div className="step step1">
          <div className="circle">
            <img
              className=""
              src={'/images/course/course-guide/choice.jpg'}
              alt=""
            />
          </div>
          <h1>01</h1>
          <h4>預約課程</h4>
        </div>
        <div className="step step2">
          <div className="circle">
            <img
              className=""
              src={'/images/course/course-guide/email.jpg'}
              alt=""
            />
          </div>
          <h1>02</h1>
          <h4>收到E-mail 確認信</h4>
        </div>
        <div className="step step3">
          <div className="circle">
            <img
              className=""
              src={'/images/course/course-guide/counter.jpg'}
              alt=""
            />
          </div>
          <h1>03</h1>
          <h4>上課日報到繳費</h4>
        </div>
        <div className="line line-left"></div>
        <div className="line line-right"></div>
      </div>
    </div>
  )
}

export default CourseBookingFlow
