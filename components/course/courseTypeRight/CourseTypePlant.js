import React from 'react'
import './CourseTypePlant.scss'
import { devUrl } from '../../../config/index'
import { Button } from 'react-bootstrap'
import CourseBlockOne from '../courseBlockOne/CourseBlockOne'
import CourseBlockTwo from '../courseBlockTwo/CourseBlockTwo'

function CourseTypePlant() {
  return (
    <div className="r-course-guide r-type-plant">
      <div className="title">
        <h2>邂逅你的植能生活</h2>
        <h4>Other Pot Culture Couses</h4>
      </div>
      <div className="course-guide-pics d-flex">
        <CourseBlockTwo
          imgUrl2={'/images/course/course-guide/demo_plant2.jpg'}
          imgUrl3={'/images/course/course-guide/demo_plant3.jpg'}
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
