import React from 'react'
import './CourseTypeSucculent.scss'
import { devUrl } from '../../../config/index'
import { Button } from 'react-bootstrap'
import CourseBlockOne from '../courseBlockOne/CourseBlockOne'
import CourseBlockTwo from '../courseBlockTwo/CourseBlockTwo'

function CourseTypeSucculent() {
  return (
    <div className="r-course-guide r-type-succulent">
      <div className="title">
        <h2>多項花器多肉手作</h2>
        <h4>Succulents Courses</h4>
      </div>
      <div className="course-guide-pics d-flex ">
        <CourseBlockOne
          imgUrl1={'/images/course/course-guide/demo_succulents1.jpg'}
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
