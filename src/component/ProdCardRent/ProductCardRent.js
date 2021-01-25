import React, {useEffect, useState} from 'react'

import './ProductCardRent.scss'
import { devUrl } from '../../config/index'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Modal , Button} from 'react-bootstrap';
//date-calender2
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'



function ProductCardRent(props) {
//分享
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url= window.location.href
  
//日期

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const minDay = 14

//數量
const [number, setNumber] = useState('');
  const product = {countInStock:8}
  if (product.countInStock >10){
  product.countInStock=10
  }
  
  const printValues = e => {
    e.preventDefault();
  };
  // console.log(number);
  return (
    <>
      <div className="v-bg">
        <div className="v-card-lg">
          <div className="row m-0 ">
            <div className="v-img-part col-xl-6 col-lg-12 p-0">
              <img
                className="v-product-img-lg"
                src={props.value.product_img}
                alt=""
              />
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
                    className=" v-product-img-sm"
                    src={props.value.product_detail_img1}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className=" v-product-img-sm"
                    src={props.value.product_detail_img2}
                    alt=""
                  />
                </div>
                <div className="col-3 p-0">
                  <img
                    className="  v-product-img-sm"
                    src={props.value.product_detail_img3}
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
            <div className="v-form-part col-xl-5 position-relative">
              <h2>{props.value.product_name}</h2>
              <p className="v-price">NT$ {props.value.product_price}</p>
              <p className="v-product-description">
                {props.value.prod_info}
              </p>
              {/* 日期 */}
              <form action="" onSubmit={printValues}>
                <div className="form-group form-row">
                    <label
                      className="col-6 p-0 rent-date "
                      htmlFor="v-start-rent-date"
                    >
                      開始租賃日期
                    </label>
                    <label
                      className="col-6 p-0 rent-date "
                      htmlFor="v-end-rent-date"
                    >
                      結束租賃日期
                    </label>
                 
                  <div className="col-12 p-0">
                    <DateRangePicker
                            startDate={startDate}
                            endDate={endDate}
                            onStartDateChange={setStartDate}
                            onEndDateChange={setEndDate}
                            minimumDate={new Date()}
                            minimumLength={1}
                            format='dd MMM yyyy'
                            locale={enGB}
                            minimumLength = {minDay}
                          >
                            {({ startDateInputProps, endDateInputProps, focus }) => (
                              <div className="form-row col-12 v-input-style p-0 m-0">
                                <input id="v-start-rent-date"
                                  className={'input ' + 'col-6' + (focus === START_DATE ? ' -focused' : '')}
                                  {...startDateInputProps}
                                  placeholder='開始租賃日期'
                                />
                                <input
                                id="v-end-rent-date"
                                  className={'input '+ 'col-6'  + (focus === END_DATE ? ' -focused' : '')}
                                  {...endDateInputProps}
                                  placeholder='結束租賃日期'
                                />
                              </div>
                            )}
                   </DateRangePicker>
                  </div>
                </div>
                {/* 數量 */}
                <div className="form-group form-row v-input-style-lg">
                  <label className="col-12" htmlFor="v-buy-amount">
                    選擇數量
                  </label>
                  <select required
                              className=" col-12 form-control"
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                            >
                            <option defaultValue="selected" disabled="disabled" style={{display: 'none'}} value=''>請選擇數量</option>
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x+1} value={x+1} >
                                  {x+1}
                                  </option>
                                )
                              )}
                            </select>
                  {/* <input
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    name="number"
                    className=" col-12 form-control"
                    id="v-buy-amount"
                    type="number"
                    placeholder="選購數量"
                  /> */}
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
            {/* 這裡是分享 */}
              <div className="v-card-des-wrapper v-card-des-rwd">
                <div className="v-share d-flex align-items-center">
                  <p className="v-share-text m-0">分享商品：</p>
                  <a
                    target="_blank"
                    href={'https://www.facebook.com/sharer.php?u='+url}
                  >
                    <img src={devUrl + '/images/svg/fb-icon.svg'} alt="" />
                  </a>
                  <a
                    target="_blank"
                    href={'https://lineit.line.me/share/ui?url='+url}
                  >
                    <img src={devUrl + '/images/svg/ig-icon.svg'} alt="" />
                  </a>
                  <a  onClick={() => {navigator.clipboard.writeText(url) 
                                              handleShow()
                                              }} >
                    <img src={devUrl + '/images/svg/link-icon.svg'} alt="" />
                  </a>

       <Modal  centered size="sm" className="v-modal" show={show} onHide={handleClose}>
       <Modal.Header closeButton style={{border:'none' , padding:"16px 20px 10px 0" }}></Modal.Header>
        <Modal.Body className="mb-4 text-center p-0">網址複製成功</Modal.Body>
        <div className="d-flex mb-3 justify-content-center">
        <button style={{background:"#6c8650" , border:"0" , borderRadius:"1px" }} className="mx-5 v-got-it-btn btn btn-primary btn-block" onClick={handleClose}>
            我知道了
          </button>
        </div>
      </Modal>





                </div>
                <div className="shipping-des">
                  <h5>運送說明：大型植栽僅供宅配</h5>
                </div>
                <div className="other-des">
                  <p>備註：植株商品不適用七日鑑賞期，最短租期14日。</p>
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

export default ProductCardRent
