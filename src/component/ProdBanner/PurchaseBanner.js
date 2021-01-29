import React from 'react'
import { devUrl } from '../../config/index'
import './ProdBanner.scss'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function PurchaseBanner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const imgSlide= [
  devUrl + '/images/images/saleprodindex/purchase_banner_1.jpg' ,
  devUrl + '/images/images/saleprodindex/purchase_banner_2.jpg' ,
  devUrl + '/images/images/saleprodindex/purchase_banner_3.jpg' ,
]


  return (
    <>
      <div className="text-center ">

      <Carousel

          className="v-banner-wrapper"
          swipeable={true}
          draggable={false}
          // showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          <img className="v-banner-wrapper" style={{width:'100%'}} alt="" src={imgSlide[0]} />
          <img className="v-banner-wrapper" style={{width:'100%'}} alt="" src={imgSlide[1]} />
          <img className="v-banner-wrapper" style={{width:'100%'}} alt="" src={imgSlide[2]} />

      </Carousel>
      </div>
      {/* <div className="text-center">
        <img
          className="v-arrow-down"
          src={devUrl + '/images/svg/arrow-down-01.svg'}
          alt=""
        />
      </div> */}
    </>
  )
}

export default PurchaseBanner
