import React, { useState, useEffect } from 'react'
import './CourseTypeSucculent.scss'
import { devUrl } from '../../../config/index'
import { Button } from 'react-bootstrap'

import Aos from 'aos'
import 'aos/dist/aos.css'

import CourseBlockOne from '../courseBlockOne/CourseBlockOne'
import CourseBlockTwo from '../courseBlockTwo/CourseBlockTwo'

function CourseTypeSucculent(props) {
  const { type, setType } = useState()
  // props.setClickType(type)
  console.log(type)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  //傳回上層
  // useEffect(() => {
  //   props.setClickType(type)
  // }, [type])
  return (
    <div
      className="r-course-guide r-type-succulent"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="title">
        <h2>多項花器多肉手作</h2>
        <h4>Succulents Courses</h4>
      </div>
      <div
        className="course-guide-pics d-flex"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <CourseBlockOne
          imgUrl1={'/images/course/course-guide/demo_succulents1.jpg'}
          type={props.type}
          setType={setType}
        />
        {/* <div className="block_one">
          <img
            src={devUrl + '/images/course/course-guide/demo_succulents1.jpg'}
            alt=""
          />
          <Button className="btn-info-more" variant="outline-light">
            了解更多
          </Button>
        </div> */}
        <CourseBlockTwo
          imgUrl2={'/images/course/course-guide/demo_succulents2.jpg'}
          imgUrl3={'/images/course/course-guide/demo_succulents3.jpg'}
          type={props.type}
          setType={setType}
        />
        {/* <div className="block_two">
          <div className="wrapper" style={{ marginBottom: '25px' }}>
            <img
              src={devUrl + '/images/course/course-guide/demo_succulents2.jpg'}
              alt=""
            />
            <Button className="btn-info-more" variant="outline-light">
              了解更多
            </Button>
          </div>
          <div className="wrapper">
            <img
              src={devUrl + '/images/course/course-guide/demo_succulents3.jpg'}
              alt=""
            />
            <Button className="btn-info-more" variant="outline-light">
              了解更多
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default CourseTypeSucculent
