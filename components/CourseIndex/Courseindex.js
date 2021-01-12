import React from 'react'
import coursedata from './coursinfo'

function Courseindex() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="c-course align-items-center">
          <div className="c-top1">
            <p className="h2 text-center">最新課程</p>
            <p className="h4 text-center">LatestCourse</p>
            <div className="c-rbutton justify-content-center align-items-center">
              <p className="h6 m-0">所有課程</p>
            </div>
          </div>
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
                  <p className="c-course-link">我要報名</p>
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
