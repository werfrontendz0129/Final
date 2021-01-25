import React, { useState, useEffect } from 'react'

function CourseResultTitle(props) {
  const { title, subTitle } = props
  console.log(props)
  return (
    <div className="r-result-title">
      <h4>{title ? title : '全部課程'}</h4>
      <p style={{ textAlign: 'left' }}>{subTitle ? subTitle : 'All Courses'}</p>
    </div>
  )
}

export default CourseResultTitle
