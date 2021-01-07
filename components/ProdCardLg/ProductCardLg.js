import React from 'react'
import './ProductCardLg.scss'
import { devUrl } from '../../config/index'

function ProductCardLg() {
  return (
    <>
      <div className="v-product-background ">
        <div className="container">
          <div className="v-product-card-lg d-flex ">
            <div className="v-product-img-wrapper ">
              <div>
                <img
                  className="v-product-img-lg"
                  src={devUrl + '/images/images/金邊虎尾蘭盆栽.jpg'}
                  alt=""
                />
              </div>
              <div className="v-product-img-browse d-flex align-items-center">
                <div className="v-product-left">
                  <img src={devUrl + '/images/svg/prod-arrow-01.svg'} alt="" />
                </div>
                <div className="">
                  <img
                    className="v-product-img-sm"
                    src={devUrl + '/images/images/金邊虎尾蘭盆栽2.jpg'}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="v-product-img-sm"
                    src={devUrl + '/images/images/金邊虎尾蘭盆栽3.jpg'}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="v-product-img-sm"
                    src={devUrl + '/images/images/金邊虎尾蘭盆栽4.jpg'}
                    alt=""
                  />
                </div>
                <div className="v-product-right ">
                  <img src={devUrl + '/images/svg/prod-arrow-02.svg'} alt="" />
                </div>
              </div>
            </div>

            <div className="v-product-card-text-main text-align-left ">
              <h2>落地虎尾蘭盆栽</h2>
              <p className="price">NT$500 / 日</p>
              <p className="v-product-description">
                28cm x 28cm x 78cm
                <br />
                磨石子陶瓷盆栽
              </p>
              <form action="">
                <div className="form-row date-wrapper">
                  <div className="form-group col-md-6 m-0 p-0 ">
                    <label className="v-rent-date " for="v-start-rent-date">
                      開始租賃日期
                    </label>
                    <input
                      className="v-input-style form-control"
                      id="v-start-rent-date"
                      type="date"
                      placeholder="選取日期"
                    />
                  </div>
                  <div className="form-group col-md-6 m-0 p-0">
                    <label className="v-rent-date" for="v-end-rent-date">
                      結束租賃日期
                    </label>
                    <input
                      className="v-input-style rent-date-right form-control"
                      id="v-end-rent-date"
                      type="date"
                      placeholder="選取日期"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="v-rent-date" for="v-rent-amount">
                    租賃數量{' '}
                    <p className="v-limit-rent">目前最多可租賃數量： 20株</p>
                  </label>
                  <input
                    className="v-input-style-lg form-control"
                    id="v-rent-amount"
                    type="number"
                    placeholder=" 租賃數量"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="v-btn-g v-btn-checkdate form-control"
                    type="button"
                    value="查看可租日期"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      className="v-btn-g v-btn-arrivalnotice form-control"
                      type="button"
                      value="貨到通知"
                      disabled
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="v-btn-g v-btn-addlike form-control"
                      type="button"
                      value="加入收藏"
                    />
                  </div>
                </div>
              </form>
              <div className="v-rent-v-product-des-wrapper">
                <div className="v-share d-flex align-items-center">
                  <p className="v-share-text m-0">分享商品：</p>
                  <a href="#">
                    <img src={devUrl + '/images/svg/fb-icon.svg'} alt="" />
                  </a>
                  <a href="#">
                    <img src={devUrl + '/images/svg/ig-icon.svg'} alt="" />
                  </a>
                  <a href="#">
                    <img src={devUrl + '/images/svg/link-icon.svg'} alt="" />
                  </a>
                </div>
                <div className="v-shipping-des">
                  <h5>運送說明：大型植栽僅供宅配</h5>
                </div>
                <div className="v-maintain-des">
                  <h5>定期維護：30日 無須額外付費</h5>
                </div>
                <div className="v-other-des">
                  <p>
                    備註：若是您的租賃時間少於定期維護時間，則不享有免費維護服務
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCardLg
