import React,{useEffect, useState} from 'react'
import { NavLink,withRouter} from 'react-router-dom'
import { devUrl } from '../../config/index'
import './ProdOccasion.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

function RentOccation(props) {


  useEffect(()=>{
    props.setO("客廳空間布置")
  },[props.occasion])

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
// data-aos="fade-up"
//             data-aos-anchor-placement="center-bottom"

  return (
    <>
      {/* <div className="container"> */}
      <div className="section-tilte"
            >
        <div className="title2">
          <h3>創造屬於你的居家森林</h3>
          <h5 className="mt-1">Home Decorating</h5>
        </div>
      </div>
      <div className="wrap"
              >
        <div className="left-pic d-flex text-center">
        <NavLink to="/rental/list" >
            <img
              onMouseOver={()=>{props.setO('客廳空間布置')}}
              className="livingroom-pic"
              src={devUrl + '/images/images/rentprodindex/客廳布置3.jpg'}
              alt=""
              
            />
            <div 
            className="living-room-mask mask">
              <p>客廳空間布置</p>
            </div>
          </NavLink>
        </div>

        <div className="right-pic-top d-flex text-center" >
          <NavLink to="/rental/list" >
            <img
            //  onMouseOver={()=>{props.setO('居家牆面布置')}}
              className="wall-pic"
              src={devUrl + '/images/images/rentprodindex/居家牆面.jpg'}
              alt=""
            />
            <div 
            className="wall-mask mask">
              <p>居家牆面布置</p>
            </div>
          </NavLink>
        </div>
        <div className="right-pic-bottom d-flex text-center">
          <NavLink to="/rental/list">
            <img
              // onMouseOver={()=>{props.setO('浴室空間布置')}}
              className="bathroom-pic"
              src={devUrl + '/images/images/rentprodindex/浴室布置.jpeg'}
              alt=""
            />
            <div className="bathroom-mask mask">
              <p>浴室空間佈置</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="section-tilte"
            >
        <div className="title2">
          <h3>適合各種商業場合</h3>
          <h5 className="mt-1">Business Occasions</h5>
        </div>
      </div>
      <div className="wrap2"
              >
        <div className="left-pic-top d-flex text-center">
        <NavLink to="/rental/list">
            <img
              className="livingroom-pic"
              src={devUrl + '/images/images/rentprodindex/辦公室布置.jpg'}
              // onMouseOver={()=>{props.setO('辦公室布置')}}
              alt=""
            />
            <div className="living-room-mask mask">
              <p>辦公室佈置</p>
            </div>
          </NavLink>
        </div>
        <div className="left-pic-bottom d-flex text-center">
        <NavLink to="/rental/list">
            <img
              className="wall-pic"
              // onMouseOver={()=>{props.setO('商業空間布置')}}
              src={devUrl + '/images/images/rentprodindex/咖啡廳5.jpg'}
              alt=""
            />
            <div className="wall-mask mask">
              <p>商業空間佈置</p>
            </div>
          </NavLink>
        </div>
        <div className="right-pic d-flex text-center">
        <NavLink to="/rental/list">
            <img
              className="bathroom-pic"
              src={devUrl + '/images/images/rentprodindex/婚禮布置.jpg'}
              // onMouseOver={()=>{props.setO('婚禮活動布置')}}
              alt=""
            />
            <div className="bathroom-mask mask">
              <p>婚禮活動佈置</p>
            </div>
          </NavLink>
        </div>
      </div>
      {/* container ends  */}
      {/* </div> */}
    </>
  )
}

export default withRouter(RentOccation)
