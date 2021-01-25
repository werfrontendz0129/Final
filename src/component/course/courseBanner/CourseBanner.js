import React from 'react'
// import background from '../../images/course/banner/好運多肉.png'
import './CourseBanner.scss'
import { devUrl } from '../../../config/index'
//Carousel 套件
import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'

//Carousel RWD設定
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
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
const imgUrl = '/images/course/banner/' //圖片絕對路徑
const imgArr = [
  devUrl + imgUrl + '好運多肉巡禮.jpg', //放要的圖片名
  devUrl + imgUrl + '新春好運到.jpg',
  devUrl + imgUrl + '春節組盆達摩課程.jpg',
]

function CourseBanner() {
  return (
    // <div className="r-banner">
    //   <img src={background} alt="no" />
    // </div>
    <>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        className="r-course-carouse"
        infinite={true}
      >
        <img src={imgArr[0]} style={{ width: '100%' }} alt="" />
        <img src={imgArr[1]} style={{ width: '100%' }} alt="" />
        <img src={imgArr[2]} style={{ width: '100%' }} alt="" />
      </Carousel>
    </>
  )
}

export default CourseBanner
