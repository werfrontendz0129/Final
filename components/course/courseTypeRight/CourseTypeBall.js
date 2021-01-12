import React from 'react'
import './CourseTypeBall.scss'
import { devUrl } from '../../../config/index'
import { Button } from 'react-bootstrap'
import CourseBlockOne from '../courseBlockOne/CourseBlockOne'
import CourseBlockTwo from '../courseBlockTwo/CourseBlockTwo'

function CourseTypeBall() {
  return (
    <div className="r-course-guide r-type-ball">
      <div className="title">
        <h2>尋覓你的苔球世界</h2>
        <h4>Kokedama Courses</h4>
      </div>
      <div className="course-guide-pics d-flex">
        <CourseBlockTwo
          imgUrl2={'/images/course/course-guide/demo_ball2.jpg'}
          imgUrl3={'/images/course/course-guide/demo_ball3.jpg'}
        />
        {/* <div className="block_two">
          <img
            src={devUrl + '/images/course/course-guide/demo_ball2.jpg'}
            alt=""
            style={{ marginBottom: '25px' }}
          />
          <img
            src={devUrl + '/images/course/course-guide/demo_ball3.jpg'}
            alt=""
          />
        </div> */}
        <CourseBlockOne
          imgUrl1={'/images/course/course-guide/demo_ball1.jpg'}
        />
        {/* <div className="block_one">
          <img
            src={devUrl + '/images/course/course-guide/demo_ball1.jpg'}
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

export default CourseTypeBall
