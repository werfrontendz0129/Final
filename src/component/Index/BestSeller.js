import React from 'react'
import { devUrl } from '../../config/index'
import {NavLink} from 'react-router-dom'
// import $ from 'jquery'
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
            <NavLink to="/purchase/list/1">
              <figure>
                <img src={devUrl + '/images/images/saleprodlist/墨花常春藤.jpg'} alt="" />
              </figure>
            </NavLink>
            <NavLink to="/purchase/list/2">
              <figure>
                <img src={devUrl + '/images/images/saleprodlist/維多利亞鳳尾蕨.jpg'} alt="" />
              </figure>
            </NavLink>
            <NavLink to="/purchase/list/3">
              <figure>
                <img src={devUrl + '/images/images/saleprodlist/乳斑千年芋.jpg'} alt="" />
              </figure>
            </NavLink>
            <NavLink to="/purchase/list/4">
              <figure>
                <img src={devUrl + '/images/images/saleprodlist/貓眼.jpg'} alt="" />
              </figure>
            </NavLink>
            <NavLink to="/purchase/list/5">
              <figure>
                <img src={devUrl + '/images/images/saleprodlist/山蘇.jpg'} alt="" />
              </figure>
            </NavLink>
            <NavLink to="/purchase/list/6">
              <figure>
                <img src={devUrl + '/images/images/saleprodlist/白脈椒草.jpg'} alt="" />
              </figure>
            </NavLink>
            <NavLink to="/purchase/list/7">
              <figure>
                <img src={devUrl + '/images/images/saleprodlist/小星點.jpg'} alt="" />
              </figure>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSeller
