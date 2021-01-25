import React from 'react'
import './CoursePast.scss'

function CoursePast() {
  return (
    <div className="r-past-course">
      <div className="title">
        <h1>課程回顧</h1>
        <h5>Past Courses</h5>
      </div>
      <div className="row pics-wrapper d-flex justify-content-center">
        <div className="box col-lg-2">
          <img
            src={'images/course/course-guide/室內多肉＆植物照顧課05.jpg'}
            alt=""
          />
        </div>
        <div className="box col-lg-2">
          <img src={'images/course/course-guide/乾燥花團照.jpg'} alt="" />
        </div>
        <div className="box col-lg-2">
          <img src={'images/course/course-guide/乾燥花.jpg'} alt="" />
        </div>
        <div className="box col-lg-2">
          <img src={'images/course/course-guide/苔球.jpg'} alt="" />
        </div>
        <div className="box col-lg-2 pc">
          <img src={'images/course/course-guide/多肉植物照顧課03.jpg'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CoursePast
