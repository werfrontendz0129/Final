import React from 'react'
import { NavLink } from 'react-router-dom'

function CourseBreadcrumb(props) {
  console.log(props)
  return (
    <>
      <nav aria-label="r-breadcrumb" style={{ margin: '27px 0 62px 0' }}>
        <ol className="breadcrumb-bg d-flex" style={{ listStyleType: 'none' }}>
          <li className="breadcrumb-item">
            <NavLink to="/" style={{ color: '#494949' }}>
              首頁
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/course" style={{ color: '#494949' }}>
              手作課程
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/courses/search" style={{ color: '#494949' }}>
              課程搜尋
            </NavLink>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ color: '#d1cfcf' }}
          >
            {props.course}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default CourseBreadcrumb
