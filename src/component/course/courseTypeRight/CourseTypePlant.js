import React, { useState, useEffect } from 'react'
import './CourseTypePlant.scss'
import { devUrl } from '../../../config/index'
import { Button } from 'react-bootstrap'

import Aos from 'aos'
import 'aos/dist/aos.css'

import CourseBlockOne from '../courseBlockOne/CourseBlockOne'
import CourseBlockTwo from '../courseBlockTwo/CourseBlockTwo'

function CourseTypePlant(props) {
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
      className="r-course-guide r-type-plant"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="title">
        <h2>邂逅你的植能生活</h2>
        <h4>Other Pot Culture Couses</h4>
      </div>
      <div
        className="course-guide-pics d-flex"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <CourseBlockTwo
          imgUrl2={'/images/course/course-guide/demo_plant2.jpg'}
          imgUrl3={'/images/course/course-guide/demo_plant3.jpg'}
          type={props.type}
          setType={setType}
        />
        {/* <div className="block_two">
          <img
            src={devUrl + '/images/course/course-guide/demo_plant2.jpg'}
            alt=""
            style={{ marginBottom: '25px' }}
          />
          <img
            src={devUrl + '/images/course/course-guide/demo_plant3.jpg'}
            alt=""
          />
        </div> */}
        <CourseBlockOne
          imgUrl1={'/images/course/course-guide/demo_plant1.jpg'}
          type={props.type}
          setType={setType}
        />
        {/* <div className="block_one">
          <img
            src={devUrl + '/images/course/course-guide/demo_plant1.jpg'}
            alt=""
          />
          <Button className="btn-info-more" variant="outline-light">
            了解更多
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default CourseTypePlant
