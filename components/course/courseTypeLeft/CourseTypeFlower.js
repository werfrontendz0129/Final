import React from 'react'
import './CourseTypeFlower.scss'
import { devUrl } from '../../../config/index'
import { Button } from 'react-bootstrap'
import CourseBlockOne from '../courseBlockOne/CourseBlockOne'
import CourseBlockTwo from '../courseBlockTwo/CourseBlockTwo'

function CourseTypeFlower() {
  return (
    <div className="r-course-guide r-type-flower">
      <div className="title">
        <h2>各式乾燥花應用手作</h2>
        <h4>Dried Flowers Courses</h4>
      </div>
      <div className="course-guide-pics d-flex ">
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
        />
      </div>
    </div>
  )
}

export default CourseTypeFlower
