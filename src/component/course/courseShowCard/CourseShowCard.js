import React from 'react'
import './CourseShowCard.scss'
import { devUrl } from '../../../config/index'
import { NavLink } from 'react-router-dom'

function CourseShowCard(props) {
  const { course } = props
  return (
    <>
      <div key={course._id} className="card r-course-card">
        <figure>
          <NavLink to={`/course/${course._id}`}>
            <img src={course.img} className="card-img-top" alt="" />
          </NavLink>
        </figure>
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">日期: {course.date}</p>
          <p className="card-text">費用: {course.price}元</p>
        </div>
      </div>
    </>
  )
}

export default CourseShowCard
