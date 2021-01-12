import React from 'react'
import { Button } from 'react-bootstrap'

function CourseBlockTwo(props) {
  return (
    <div className="block_two">
      <div className="wrapper" style={{ marginBottom: '25px' }}>
        <img src={props.imgUrl2} alt="" />
        <Button className="btn-info-more" variant="outline-light">
          了解更多
        </Button>
      </div>
      <div className="wrapper">
        <img src={props.imgUrl3} alt="" />
        <Button className="btn-info-more" variant="outline-light">
          了解更多
        </Button>
      </div>
    </div>
  )
}

export default CourseBlockTwo
