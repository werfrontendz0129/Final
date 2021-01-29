import React from 'react'
import {NavLink} from 'react-router-dom'
import coursedata from './coursinfo'
function Courseindex() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="c-course align-items-center">
          <div className="c-top1">
            <p className="h2 text-center">最新課程</p>
            <p className="h4 text-center c-70">Latest Course</p>
            <div className="c-rbutton justify-content-center align-items-center">
              <NavLink style={{textDecoration: 'none', color: "#FFF"}} to="/course"><p className="h6 m-0 ">所有課程</p></NavLink>
            </div>
          </div>
          {/* ele.pic_url */}
          <div className="c-coming-soon">
            {coursedata.info.map((ele) => (
              <div key={ele.course_id} className="c-course-pic">
                <figure>
                  <img src={ele.pic_url} alt="" /> 
                </figure>
                <div className="c-course-info">
                  <p className="c-course-date">
                    {ele.date}
                    <br />
                    {ele.course_name}
                  </p>
                  <NavLink to={ele.link}><p className="c-course-link">我要報名</p></NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Courseindex
