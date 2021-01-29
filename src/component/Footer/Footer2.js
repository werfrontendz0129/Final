import React from 'react'
import './Footer.scss'
import {NavLink} from 'react-router-dom'
import { devUrl } from '../../config/index'

function Footer2() {
  return (
    <>
      <div className="container-fluid c-width100 m-0 p-0 col">
        <div className="c-paddingtome"></div>
        <div className="c-footheight align-items-center">
          <div className="row c-border align-items-center p-0 m-0">
          <div className="col-md-3 p-0 m-0">
            <div className="c-email">
              <p className="c-subscription">訂閱電子報, 新品及優惠通知!</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="輸入電子信箱"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    我要訂閱
                  </span>
                </div>
              </div>
            </div>
            <div className="c-socialmedia align-items-center">
              <div className="c-mark">
                <figure>
                  <img src={devUrl+ "/images/index/fb.svg"} alt="" />
                </figure>
              </div>
              <div className="c-mark">
                <figure>
                  <img src={devUrl+ "/images/index/ins.svg"} alt="" />
                </figure>
              </div>
              <div className="c-mark">
                <figure>
                  <img src={devUrl+ "/images/index/url.svg"} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-5"></div>
            <div className="col-md-4 row m-0 p-0">
                <div className="c-help p-0 col">
                  <p className="h6 c-title">HELP</p>
                  <ul className="list-unstyled c-list-padding">
                    <li className="h6">常見問題</li>
                    <li className="h6">聯絡我們</li>
                    <li className="h6">運送規則</li>
                    <li className="h6"></li>
                    <li className="h6"></li>
                  </ul>
                </div>
                <div className="c-help p-0 col">
                  <p className="h6 c-title">GARDEN</p>
                  <ul className="list-unstyled c-list-padding">
                    <li className="h6">關於我們</li>
                    <li className="h6">租賃服務</li>
                    <li className="h6">教學課程</li>
                    <li className="h6">園藝商品</li>
                    <li className="h6">植園部落格</li>
                  </ul>
                </div>
                <div className="c-help p-0 col">
                  <p className="h6 c-title">OTHER</p>
                  <ul className="list-unstyled c-list-padding">
                    <li className="h6">加入我們</li>
                    <li className="h6">隱私條款</li>
                    <li className="h6"></li>
                    <li className="h6"></li>
                    <li className="h6"></li>
                  </ul>
                </div>
            </div>
          </div>
          <div className=" c-reserved">2021 植園Garden All Rights Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Footer2
