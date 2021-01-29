import React, { useEffect } from 'react'
import { devUrl } from '../../../config/index'
import { NavLink } from 'react-router-dom'

function CourseBlockTwo(props) {
  const { type } = props
  // console.log(type)

  // useEffect(() => {
  //   setTimeout(() => {
  //     props.setType(type)
  //   }, 100)
  // }, [type])

  return (
    <div className="block_two">
      <div className="wrapper" style={{ marginBottom: '25px' }}>
        <img src={props.imgUrl2} alt="" />
        <NavLink
          className="btn-info-more btn btn-outline-light"
          type="button"
          variant="outline-light"
          // onMouseOver={() => {
          //   {
          //     typeof type && props.setType(type)
          //   }
          // }}
          // onMouseOver={() => {}}
          // to={props.type === 'succulent' ? '/course/search' : '/course/search'}
          to={`/courses/search/`}
        >
          了解更多
        </NavLink>
      </div>
      <div className="wrapper">
        <img src={props.imgUrl3} alt="" />
        <NavLink
          className="btn-info-more btn btn-outline-light"
          type="button"
          variant="outline-light"
          //   onMouseOver={() => {
          //   {type && props.setType(type)}
          // }}
          onMouseOver={() => {
            console.log(type)
          }}
          // to={props.type === 'succulent' ? '/course/search' : '/course/search'}
          to={`/courses/search/`}
        >
          了解更多
        </NavLink>
      </div>
    </div>
  )
}

export default CourseBlockTwo
