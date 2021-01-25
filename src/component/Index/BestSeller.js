import React from 'react'
import { devUrl } from '../../config/index'
import {NavLink} from 'react-router-dom'
import $ from 'jquery'
function BestSeller() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="c-bestseller align-items-center">
          <div className="c-top">
            <p className="h2 text-center">熱銷商品</p>
            <p className="h4 c-70 m-0 text-center">Best Sellers</p>
            <div className="c-rbutton justify-content-center align-items-center">
              <NavLink to="/rentalguide" style={{ textDecoration: 'none' , color:"#FFF"}} className="h6 whitecolor m-0">更多商品</NavLink>
            </div>
          </div>
          <div className="c-productlist">
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={devUrl + '/images/index/merchandise.jpg'} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSeller
