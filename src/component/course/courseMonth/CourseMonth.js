import React, { useState, useEffect } from 'react'
import './CourseMonth.scss'
import Carousel from 'react-multi-carousel'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

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

function CourseMonth() {
  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:3001/courses/month/`).then((response) => {
      if (response) {
        console.log(response)
        setData(response.data)
      }
    })
  }, [])
  return (
    <>
      <div className="r-month-courses">
        <div className="title">
          <h1>本月開課</h1>
          <h5>Courses of The Month</h5>
        </div>

        <div className="courses-card-wrapper">
          <Carousel
            responsive={responsive}
            className="r-course-card-carouse"
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

            {/* <div className="card" style={{ width: '18.75rem' }}>
              <a href={`/course/12`}>
                <img
                  src={devUrl + '/images/course/show/好運多肉巡禮.jpg'}
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">好運多肉巡禮</h5>
                <p className="card-text">日期: 2021-02-10</p>
              </div>
            </div> */}
            {/* <div className="card" style={{ width: '18.75rem' }}>
              <a href={`/course/6`}>
                <img
                  src={devUrl + '/images/course/show/苔球手作體驗課.jpg'}
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">苔球手作體驗課</h5>
                <p className="card-text">日期: 2021-03-01</p>
              </div>
            </div> */}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default CourseMonth
