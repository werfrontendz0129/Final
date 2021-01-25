import React, { useState, useEffect } from 'react'
import './CourseRecommend.scss'
import Carousel from 'react-multi-carousel'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

// import { response } from 'express'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

function CourseRecommend(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/courses/recommend/${props.id}/${props.type}`
    ).then((response) => {
      if (response) {
        console.log(response)
        setData(response.data)
      }
    })
  }, [])
  return (
    <>
      <div className="r-re-courses">
        <div className="title">
          <h1>其他推薦課程</h1>
          <h5>Other Courses</h5>
        </div>

        <div className="courses-card-wrapper">
          <Carousel
            responsive={responsive}
            className="r-course-card-carouse"
            infinite={true}
            // itemClass="carousel-item-padding-20-px"
            containerClass="r-carousel-container"
          >
            {data.map((item) => {
              return (
                <div className="card" style={{ width: '18.75rem' }}>
                  <a href={`/course/${item._id}`}>
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: '100%',
                        height: '296px',
                        objectFit: 'cover',
                      }}
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">日期: {item.date}</p>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default CourseRecommend
