import React, { useState, useEffect } from 'react'
import './CourseTypeFlower.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { devUrl } from '../../../config/index'
import { Button } from 'react-bootstrap'
import CourseBlockOne from '../courseBlockOne/CourseBlockOne'
import CourseBlockTwo from '../courseBlockTwo/CourseBlockTwo'

function CourseTypeFlower(props) {
  const { type, setType } = useState()
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
      className="r-course-guide r-type-flower"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="title">
        <h2>各式乾燥花應用手作</h2>
        <h4>Dried Flowers Courses</h4>
      </div>
      <div
        className="course-guide-pics d-flex"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        {/* <div className="block_one">
          <img
            src={devUrl + '/images/course/course-guide/demo_flower1.jpg'}
            alt=""
          />
          <Button className="btn-info-more" variant="outline-light">
            了解更多
          </Button>
        </div> */}
        <CourseBlockOne
          imgUrl1={'/images/course/course-guide/demo_flower1.jpg'}
          type={props.type}
          setType={setType}
          data-aos="fade-left"
          data-aos-duration="2500"
        />
        {/* <div className="block_two">
          <img
            src={devUrl + '/images/course/course-guide/demo_flower2.jpg'}
            alt=""
            style={{ marginBottom: '25px' }}
          />
          <img
            src={devUrl + '/images/course/course-guide/demo_flower3.jpg'}
            alt=""
          />
        </div> */}
        <CourseBlockTwo
          imgUrl2={'/images/course/course-guide/demo_flower2.jpg'}
          imgUrl3={'/images/course/course-guide/demo_flower3.jpg'}
          type={props.type}
          setType={setType}
        />
      </div>
    </div>
  )
}

export default CourseTypeFlower
