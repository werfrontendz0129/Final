import React from 'react'
import './ProductCardLg.scss'
import { devUrl } from '../../config/index'

function ProductCardLg() {
  return (
    <>
      <div className="v-bg">
        <div className="v-card-lg">
          <div className=" row m-0 ">
            <div className="v-img-part col-lg-6 p-0">
              <div>
                <img
                  className="v-product-img-lg"
                  src={devUrl + '/images/images/Fiddle 琴葉榕大型植栽.jpg'}
                  alt=""
                />
              </div>
              <div className="v-product-img-browse  justify-content-between d-flex row m-0">
                <div className="v-product-left align-self-center">
                  <img
                    className="py-5 v-prod-arrow"
                    src={devUrl + '/images/svg/prod-arrow-01.svg'}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className="   v-product-img-sm"
                    src={devUrl + '/images/images/Fiddle 琴葉榕大型植栽2.jpg'}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className=" v-product-img-sm"
                    src={devUrl + '/images/images/Fiddle 琴葉榕大型植栽3.jpg'}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className="  v-product-img-sm"
                    src={devUrl + '/images/images/Fiddle 琴葉榕大型植栽4.jpg'}
                    alt=""
                  />
                </div>
                <div className="v-product-right align-self-center">
                  <img
                    className="py-5 v-prod-arrow"
                    src={devUrl + '/images/svg/prod-arrow-02.svg'}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* 這裡是表單處  */}
            <div className="v-form-part col-lg-5">
              <h2>琴葉榕大型植栽</h2>
              <p className="v-price">NT$500</p>
              <p className="v-product-description">
                28cm x 28cm x 33cm
                <br />
                霧面白盆栽
              </p>
              <form action="">
                <div className="form-group">
                  <div className="form-row">
                    <label
                      className="col-6 p-0 rent-date "
                      for="v-start-rent-date"
                    >
                      開始租賃日期
                    </label>
                    <label
                      className="col-6 p-0 rent-date "
                      for="v-end-rent-date"
                    >
                      結束租賃日期
                    </label>
                  </div>
                  <div className="form-row v-input-style">
                    <input
                      className="col-6 p-0  form-control"
                      id="v-start-rent-date"
                      type="date"
                      placeholder="選取日期"
                    />
                    <input
                      className="col-6 p-0  rent-date-right form-control"
                      id="v-end-rent-date"
                      type="date"
                      placeholder="選取日期"
                    />
                  </div>
                </div>
                <div className="form-group form-row v-input-style-lg">
                  <label className="v-buy-date col-12" for="v-buy-amount">
                    選購數量{' '}
                  </label>
                  <input
                    className=" col-12 form-control"
                    id="v-buy-amount"
                    type="number"
                    placeholder="選購數量"
                  />
                </div>
                <div className="form-group form-row v-btn-g v-btn-checkdate">
                  <input
                    className=" col-12 form-control"
                    type="button"
                    value="加入購物車"
                  />
                </div>
                <div className="form-group form-row v-btn-g v-btn-arrivalnotice">
                  <div className="col-6 p-0 m-0">
                    <input
                      className=" form-control "
                      type="button"
                      value="貨到通知"
                      disabled
                    />
                  </div>
                  <div className="col-6 p-0 m-0 v-btn-g v-btn-addlike">
                    <input
                      className=" form-control "
                      type="button"
                      value="加入收藏"
                    />
                  </div>
                </div>
              </form>
              <div className="v-card-des-wrapper">
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
                <div className="shipping-des">
                  <h5>運送說明：大型植栽僅供宅配</h5>
                </div>
                <div className="other-des">
                  <p>備註：植株商品不適用七日鑑賞期</p>
                </div>
              </div>
            </div>
          </div>
          {/* card ends  */}
        </div>
      </div>
    </>
  )
}

export default ProductCardLg
