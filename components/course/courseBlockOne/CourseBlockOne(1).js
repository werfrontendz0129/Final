import React from 'react'
import { Button } from 'react-bootstrap'
function CourseBlockOne(props) {
  return (
    <div className="block_one">
      <img src={props.imgUrl1} alt="" />
      <Button className="btn-info-more" variant="outline-light">
        了解更多
      </Button>
    </div>
  )
}

export default CourseBlockOne
