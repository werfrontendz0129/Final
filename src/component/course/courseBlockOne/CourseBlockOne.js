import React, { useState, useEffect } from 'react'
import { devUrl } from '../../../config/index'
import { NavLink } from 'react-router-dom'

function CourseBlockOne(props) {
  const { type } = props
  console.log(type)
  // const [nowtype, setNowtype] = useState()
  // useEffect(() => {
  //   props.setType(type)
  // }, [type])

  return (
    <div className="block_one">
      <img src={props.imgUrl1} alt="" />
      <NavLink
        className="btn-info-more btn btn-outline-light"
        type="button"
        // onMouseOver={() => {
        // {
        //   typeof type && props.setType(type)
        // }
        // }}
        // class="btn btn-outline-success"
        variant="outline-light"
        to={`/courses/search/`}
        // onMouseOver={() => {
        //   setTimeout(() => {
        //     props.setType(type)
        //   }, 100)
        // }}
        // to={props.type === 'succulent' ? '/course/search' : '/course/search'}
      >
        了解更多
      </NavLink>
    </div>
  )
}

export default CourseBlockOne
